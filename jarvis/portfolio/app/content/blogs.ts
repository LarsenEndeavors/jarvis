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
