import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fen1x Rising" },
    { name: "description", content: "Portfolio for Architect and Storyteller Fen1x" },
  ];
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Nicholas Larsen</h1>
      <p className="mt-3 opacity-80">Architect / Storyteller</p>
    </div>  
    );
}
