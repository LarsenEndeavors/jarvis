export type Blog = {
    title: string;
    summary: string;
    date: string;
    tags: string[];
    slug: string;
    markdownPath?: string;
};

export const blogs: Blog[] = [
    {
        title: "How to win D&D",
        summary: "D&D is a game, you win when the DM yells \"Fuck you\"",
        date: "2026-02-25",
        tags: ["D&D", "DM", "Players"],
        slug: "cooperativeCompetition",
        markdownPath: "/content/blogs/cooperativeCompetition.md"
    },
    {
        title: "Hello World, Seems You're on Fire",
        summary: "An Introduction to Nick",
        date: "2026-01-30",
        tags: ["Introduction"],
        slug: "helloWorld",
        markdownPath: "/content/blogs/helloWorld.md"
    },
]

export function getBlog(slug: string) {
    return blogs.find((s) => s.slug === slug);
}
