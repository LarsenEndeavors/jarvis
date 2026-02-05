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
        title: "Hello World",
        summary: "First Post. Suck it, executive dysfunction.",
        date: "2026-01-30",
        tags: ["Initial"],
        slug: "hello-world",
        markdownPath: "/content/blogs/hello-world.md"
    },
]

export function getBlog(slug: string) {
    return blogs.find((s) => s.slug === slug);
}