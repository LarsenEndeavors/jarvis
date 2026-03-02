import type { Route } from "./+types/blog.$slug";
import { Link, useParams } from "react-router";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { getBlog } from "~/content/blogs";

export function meta({ params }: Route.MetaArgs) {
  const post = params.slug ? getBlog(params.slug) : undefined;
  if (!post) return [{ title: "Not Found" }];

  const title = `${post.title} — Blog`;
  const desc = post.summary || "Blog post on fen1x.org";
  const url = `https://fen1x.org/blog/${post.slug}`;
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

export default function BlogDetail() {
    const [markdown, setMarkdown] = useState("");
    const { slug } = useParams()
    const blog = slug ? getBlog(slug) : undefined;
    if (!blog) {
        throw new Response("not Found", { status: 404 });
    }
    
    const markdownFilePath = blog.markdownPath ?? `/content/blogs/${blog.slug}.md`;

    useEffect(() => {
        fetch(markdownFilePath)
        .then(res => res.text())
        .then(text => setMarkdown(text))
        .catch(err => console.error(err));
    }, [markdownFilePath]); // Fetch when the file path changes

    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <Link to="/blog" className="text-sm opacity-80 hover:opacity-100">
                ← Back to Blog
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