import type { Route } from "./+types/work._index";
import Card from "~/components/Card";
import { projects } from "~/content/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Work | Fen1x Rising" },
    { name: "description", content: "Selected builds and experiments" },
  ];
}

export default function WorkIndex() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-2xl font-semibold">Work</h1>
            <p className="mt-2 opacity-80">Selected builds and experiments (WIP)</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {projects.map(p => (
                    <Card key={p.slug} 
                          to={`/work/${p.slug}`} 
                          title={p.title}
                          summary={p.summary}
                    />
                ))}
            </div>
        </div>
    );
}