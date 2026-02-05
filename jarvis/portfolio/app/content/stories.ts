export type Story = {
    title: string;
    summary: string;
    tags: string[];
    slug: string;
    markdownPath?: string;
};

export const stories: Story[] = [
    {
        title: "Silence",
        summary: "An assassin finds his pulse in a cyberpunk dystopia",
        tags: ["Fantasy", "Cyberpunk", "Noir"],
        slug: "silence",
        markdownPath: "/content/stories/silence.md"
    },
    {
        title: "Not Black & White",
        summary: "A musician regains rediscovers his long lost magic the morning before his final symphony",
        tags: ["Fantasy", "Dialog Free"],
        slug: "blackAndWhite",
        markdownPath: "/content/stories/blackAndWhite.md"
    }
]

export function getStory(slug: string) {
    return stories.find((s) => s.slug === slug);
}