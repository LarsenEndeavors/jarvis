import { Link } from "react-router";

export default function Lab() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-2xl font-semibold">Lab</h1>
            <p className="mt-2 opacity-80">Experiments and projects I'm working on</p>
            <div className="mt-6 grid gap-4">
                <Link to={"https://n8n.fen1x.org"} className="rounded-xl border p-4 hover:bg-black/5">
                    <div className="font-semibold">n8n</div>
                    <div className="mt-2 opacity-80">My personal n8n instance</div>
                </Link>
            </div>
        </div>
    )
}