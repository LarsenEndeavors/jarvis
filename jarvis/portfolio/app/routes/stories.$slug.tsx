import { Link, useParams } from "react-router";
import { getStory } from "./stories._index";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";

export default function StoryDetail() {
    const [markdown, setMarkdown] = useState("");
    const { slug } = useParams()
    const story = slug ? getStory(slug) : undefined;
    console.log("Story: " + JSON.stringify(story, null, 2));
    if (!story) {
        throw new Response("not Found", { status: 404 });
    }

    const markdownFilePath = `/content/stories/${story.slug}.md`
    console.log("Markdown Text: " + markdown)

    useEffect(() => {
        fetch(markdownFilePath)
        .then(res => {
            console.log(res);
            return res.text();
        })
        .then(text => setMarkdown(text))
        .catch(err => console.error(err));
    }, [markdownFilePath]); // Fetch when the file path changes

    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <Link to="/stories" className="text-sm opacity-80 hover:opacity-100">
                ← Back to Stories
            </Link>
            <div className="markdown-container">
                <Markdown>
                    {markdown}
                </Markdown>
            </div>
        </div>
    );
}