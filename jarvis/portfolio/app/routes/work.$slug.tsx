import { Link, useParams } from "react-router";
import { getProject } from "~/content/projects";

export default function WorkDetail() {
    const { slug } = useParams()
    const project = slug ? getProject(slug) : undefined;

    if (!project) {
        throw new Response("not Found", { status: 404 });
    }

    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <Link to="/work" className="text-sm opacity-80 hover:opacity-100">
                ← Back to Work
            </Link>
            <h1 className="mt-4 text-3xl font-semibold">{project.title}</h1>
            <p className="mt-3 opacity-80">{project.summary}</p>

            {!!project.highlights?.length && (
                <>
                    <h2 className="mt-8 text-lg font-semibold">Highlights</h2>
                    <ul className="mt-3 list-disc pl-5 opacity-80">
                        {project.highlights.map(h => <li key={h}>{h}</li>)}
                    </ul>
                </>
            )}

            <h2 className="mt-8 text-lg font-semibold">Proof</h2>
            <div className="mt-3 flex flex-wrap gap-3">
                {project.links.github && <a className="underline" href={project.links.github}>Github</a>}
                {project.links.live && <a className="underline" href={project.links.live}>Live</a>}
                {project.links.writeup && <a className="underline" href={project.links.writeup}>Write-up</a>}
            </div>
        </div>
    );
}