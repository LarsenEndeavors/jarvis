import React, { useEffect, useMemo, useRef } from "react";
import styles from "./MatrixBackground.module.scss";

const DEFAULT_COLS = 144;
const DEFAULT_LINES = 80;

// ASCII-ish set of characters to use for the background
const CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Props = {
    /** Lower = slower overall */
    minStepsMs?: number;
    maxStepsMs?: number;
    /** Longer = longer tail */
    minTrail?: number;
    maxTrail?: number;
    /** Force fewer columns on mobile */
    maxCols?: number;
};

type ColState = {
    head: number;
    tick: number;
    nextStepAt: number;
    stepMs: number;
    trail: number;
    birthTick: Int32Array;
    charIdx: Uint16Array;
}

const ri = (min: number, max: number) => (min + Math.random() * (max - min)) | 0;

export default function MatrixBackground({ 
    minStepsMs = 90,
    maxStepsMs = 170,
    minTrail = 14,
    maxTrail = 28,
    maxCols
} : Props) {
    const canvasRef = useRef<HTMLCanvasElement|null>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        // Respect reduced motion
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;


        let width = 0;
        let height = 0;
        let fontSize = 14;
        let cols = 0;
        let rows = 0;
        let dpr = 0;

        let states: ColState[] = [];

        let raf = 0;
        let lastRender = 0;

        const setSize = () => {
            const rect = canvas.getBoundingClientRect();
            width = Math.max(1, Math.floor(rect.width));
            height = Math.max(1, Math.floor(rect.height));

            dpr = Math.min(2, window.devicePixelRatio || 1);
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // Responsive font sizing
            fontSize = width < 480 ? 10 : width < 768 ? 12 : 14;
            ctx.font = 
                `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, ` +
                `"Liberation Mono", "Courier New", monospace`;
            ctx.textBaseline = "top";

            cols = Math.max(1, Math.floor(width / fontSize));
            if (maxCols) cols = Math.min(cols, maxCols);
            rows = Math.max(1, Math.floor(height/fontSize));

            const now = performance.now();

            states = Array.from({ length: cols }, (_, i) => {
                const head = ri(0, rows);
                const stepMs = ri(minStepsMs, maxStepsMs);
                const trail = ri(minTrail, maxTrail);
                const birthTick = new Int32Array(rows);
                birthTick.fill(-1);
                const charIdx = new Uint16Array(rows);

                // prime tail so you don't start empty
                let tick = 0;
                for (let a = trail; a >= 0; a--) {
                    const r = (head - a + rows) % rows;
                    birthTick[r] = tick - a; // so age becomes 0..trail
                    charIdx[r] = ri(0, CHARSET.length);
                }

                return {
                    head,
                    tick,
                    nextStepAt: now + ri(0, stepMs),
                    stepMs,
                    trail,
                    birthTick,
                    charIdx,
                };
            });

            // Hard Clear
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, width, height);
        };

        // uWu
        const stepColumn = (s: ColState) => {
            s.tick++;
            s.head = (s.head + 1) % rows;

            s.birthTick[s.head] = s.tick;
            s.charIdx[s.head] = ri(0, CHARSET.length);

            // optionally: small chance to "restart" for variation
            if (Math.random() > 0.999) {
                s.stepMs = ri(minStepsMs, maxStepsMs);
                s.trail = ri(minTrail, maxTrail);
            }
        };

        const render = (t: number) => {
            // render cap
            if (t - lastRender < 1000 / 60) {
                raf = requestAnimationFrame(render);
                return;
            }
            lastRender = t;

            // advance steps
            for (let i = 0; i < states.length; i++) {
                const s = states[i];
                while (t >= s.nextStepAt) {
                    stepColumn(s);
                    s.nextStepAt += s.stepMs;
                }
            }

            // clear fully: NO alpha fade = no smear/overwrite artifacts
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, width, height);

            // draw
            for (let c = 0; c < cols; c++) {
                const s = states[c];
                const hue = (c / cols) * 360;
                const x = c * fontSize;

                for (let r = 0; r < rows; r++) {
                    const born = s.birthTick[r];
                    if (born < 0) continue;

                    const age = s.tick - born; // 0 = head
                    if (age < 0 || age > s.trail) continue;

                    const alpha = 1 - age / (s.trail + 1);

                    // head brighter, tail dimmer
                    const light = age === 0 ? 85 : 60;

                    ctx.fillStyle = `hsla(${hue}, 100%, ${light}%, ${alpha})`
                    ctx.fillText(CHARSET[s.charIdx[r]]!, x, r * fontSize);
                }
            }

            raf = requestAnimationFrame(render);
        }

        const ro = new ResizeObserver(setSize);
        ro.observe(canvas);
        setSize();

        raf = requestAnimationFrame(render);

        const onVis = () => {
            if (!document.hidden) {
                raf = requestAnimationFrame(render);
            } else {
                cancelAnimationFrame(raf);
            }
        };
        document.addEventListener("visibilitychange", onVis);

        return () => {
            cancelAnimationFrame(raf);
            document.removeEventListener("visibilitychange", onVis);
            ro.disconnect();
        };
    }, [minStepsMs, maxStepsMs, minTrail, maxTrail, maxCols]);

    return (
        <div className={styles.wrap} aria-hidden="true">
            <canvas ref={canvasRef} className={styles.canvas} />
        </div>
    )
}