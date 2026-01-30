import { NavLink } from "react-router";

const linkClass = ({ isActive }: { isActive: boolean}) => 
[
    "px-3 py-2 rounded-md text-sm",
    isActive ? "bg-black text-white" : "hover:bg-black/5"
].join(" ");

export default function Nav() {
    return (
        <header className="border-b">
            <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
                <NavLink to="/" className="font-semibold tracking-tight">
                    <img alt="fen1x.org" src="favicon.svg" className="w-30 h-20 mr-2 hover:bg-black/5"/>
                </NavLink>
                <nav className="flex gap-1">
                    <NavLink to="/work" className={linkClass}>Work</NavLink>
                    <NavLink to="/stories" className={linkClass}>Stories</NavLink>
                    <NavLink to="/lab" className={linkClass}>Lab</NavLink>
                    <NavLink to="/blog" className={linkClass}>Blog</NavLink>
                    <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                </nav>
            </div>
        </header>
    );
}