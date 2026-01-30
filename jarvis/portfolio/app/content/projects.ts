export type Project = {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    links: {github?: string; live?: string; writeup?: string };
    highlights?: string[];
};

export const projects: Project[] = [
    {
        slug:"omnilator",
        title:"Omnilator",
        summary:" A web SNES emulator experiment built to learn agentic coding workflows",
        tags: ["Web", "WASM", "TypeScript", "Architecture", 'Github", "AI', "Github Copilot"],
        links: { github: "https://github.com/LarsenEndeavors/omnilator"},
        highlights: ["60fps render loop (goal)", "WebAudio pipeline", "Save States (planned)"]
    },
    {
        slug:"penumbras-edge",
        title:"Penumbra's Edge",
        summary:" Godot Metroidvania foundation with architecture-first scaffolding.",
        tags: ["Godot", "C#", "Game Architecture"],
        links: { github: "https://github.com/binarybarnyard/Penumbras-Edge" }
    },
    {
        slug: "element-marketing",
        title: "ElementMarketing.Solutions",
        summary: "Next.js site for my LLC-brand hub + experiments, (click the 'P' in the header for an easter egg).",
        tags: ["Next.js", "Web", "Deployment"],
        links: { github: "https://github.com/LarsenEndeavors/ink-and-parchement", live: "https://elementmarketing.solutions"},
    },
    {
        slug: "tailorClass",
        title: "TailorClass (Tooling/Pipeline)",
        summary: "Repeatable mod/tool workflow repo-docs-as-code pipeline and pipeline thinking",
        tags: ["Tooling", "Docs-as-code", "DND", "Homebrew"],
        links: { github: "https://github.com/LarsenEndeavors/TailorClass" }
    }
];

export function getProject(slug: string) {
    return projects.find(p => p.slug === slug);
}