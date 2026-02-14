import type { Route } from "./+types/blog._index";
import { Link } from "react-router";
import { blogs } from "~/content/blogs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | Fen1x Rising" },
    { name: "description", content: "Notes on games, writing, and what I'm building" },
  ];
}

export default function BlogIndex() {
    
    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-2xl font-semibold">Blog</h1>
            <p className="mt-2 opacity-80">(WIP) Notes on games, writing, and whatever I'm building</p>
            <div className="mt-6 grid gap-4">
                {blogs.map((p) => (
                    <Link key={p.slug} to={`/blog/${p.slug}`} className="rounded-xl border p-4 hover:bg-black/5">
                        <div className="font-semibold">{p.title}</div>
                        <div className="mt-1 text-sm opacity-70">{p.date}</div>
                        <div className="mt-2 opacity-80">{p.summary}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}