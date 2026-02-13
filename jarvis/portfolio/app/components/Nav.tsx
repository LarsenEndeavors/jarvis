import { useState } from "react";
import { NavLink } from "react-router";

const linkClass = ({ isActive }: { isActive: boolean}) => 
[
    "px-3 py-2 rounded-md text-sm",
    isActive ? "bg-black text-white" : "hover:bg-black/5"
].join(" ");

const LINKS = [
    {to: "/work", label: "Work"},
    {to: "/stories", label: "Stories"},
    {to: "/lab", label: "Lab"},
    {to: "/blog", label: "Blog"},
    {to: "/contact", label: "Contact"},
]

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                className={`md:hidden fixed top-4 left-4 z-100 rounded-md bg-black/70 px-3 py-2 text-sm text-white border border-white/10 backdrop-blur ${open ? "hidden" : ""}`}
            >
                Menu
            </button>
            {/* Mobile Backdrop*/}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-black/60 ${open ? "" : "hidden"}`}
                onClick={() => setOpen(false)}
                aria-hidden="true"
            />

            {/* Sidebar */}
            <aside
                className={[
                    "fixed top-0 left-0 z-50 h-dvh w-64",
                    "bg-black/25 backdrop-blur border-r border-white/10",
                    "transform transition-transform duration-200",
                    open ? "translate-x-0" : "-translate-x-full",
                    "md:translate-x-0",
                ].join(" ")}
                >
                    {/* Top brand block */}
                    <div className="p-5 border-b border-white/10">
                        <a href="/" className="flex items-center gap-3">
                            <div className="leading-tight">
                                <div className="font-semibold text-white">Nicholas Larsen</div>
                                <div className="text-xs text-white/70">Architect / Storyteller</div>
                            </div>
                        </a>

                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className={`md:hidden mt-4 w-full rounded-md bg-white/10 px-3 py-2 text-sm text-white`}
                        >
                            Close
                        </button>
                    </div>
                    {/* Links */}
                    <nav className="p-3">
                        <ul className="space-y-1">
                            {LINKS.map((l) => (
                                <li key={l.to}>
                                    <NavLink to={l.to}
                                             onClick={() => setOpen(false)}
                                             className={({ isActive }) => [
                                                "block rounded-md px-3 py-2 text-sm",
                                                "transition",
                                                isActive
                                                ? "bg-white/10 text-white"
                                                : "text-white/75 hover:text-white hover:bg-white/5"
                                             ].join(" ")}
                                             >
                                                {l.label}
                                             </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
        </>
    );
}