import type { Route } from "./+types/stories.$slug";
import { Link, useParams } from "react-router";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { getStory } from "~/content/stories";

export function meta({ params }: Route.MetaArgs) {
  const story = params.slug ? getStory(params.slug) : undefined;
  if (!story) return [{ title: "Not Found" }];

  const title = `${story.title} — Stories`;
  const desc = story.summary || "Short story on fen1x.org";
  const url = `https://fen1x.org/stories/${story.slug}`;
  const img = "https://fen1x.org/og.png";

  return [
    { title },
    { name: "description", content: desc },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:url", content: url },
    { property: "og:image", content: img },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: desc },
    { name: "twitter:image", content: img },
  ];
}

export default function StoryDetail() {
    const [markdown, setMarkdown] = useState("");
    const { slug } = useParams()
    const story = slug ? getStory(slug) : undefined;
    if (!story) {
        throw new Response("not Found", { status: 404 });
    }
    
    const markdownFilePath = story.markdownPath ?? `/content/stories/${story.slug}.md`;

    useEffect(() => {
        fetch(markdownFilePath)
        .then(res => res.text())
        .then(text => setMarkdown(text))
        .catch(err => console.error(err));
    }, [markdownFilePath]); // Fetch when the file path changes

    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <Link to="/stories" className="text-sm opacity-80 hover:opacity-100">
                ← Back to Stories
            </Link>
            <article className="mt-6 leading-relaxed
                [&_h1]:text-3xl [&_h1]:font-semibold
                [&_h2]:text-2xl [&_h2]:font-semibold
                [&_p]:mt-4
                [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6
                [&_code]:px-1 [&_code]:rounded [&_code]:bg-black/5"
            >
                <Markdown>
                    {markdown}
                </Markdown>
            </article>
        </div>
    );
}