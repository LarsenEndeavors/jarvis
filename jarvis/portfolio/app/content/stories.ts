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
        summary: "A woman returns to her life and realizes she has a lot of work to do to save the universe.",
        tags: ["Fantasy", "Cyberpunk", "Noir"],
        slug: "blackAndWhite",
        markdownPath: "/content/stories/blackAndWhite.md"
    },
    {
        title: "The Notes You Don't Play",
        summary: "A retiring dragonborn musician discovers his magic on the last night of his career.",
        tags: ["Fantasy", "Magic", "Music"],
        slug: "notesYouDontPlay",
        markdownPath: "/content/stories/thenotesyoudontplay.md"
    },
    {
        title: "The Screw",
        summary: "A screw lies on a workbench",
        tags: ["Absurdist", "Existential"],
        slug: "theScrew",
        markdownPath: "/content/stories/theScrew.md"
    },
    {
        title: "The Heap",
        summary: "Rez falls into hell, and it is scared of her",
        tags: ["Fantasy", "Cyberpunk", "Doom"],
        slug: "theHeap",
        markdownPath: "/content/stories/theHeap.md"
    },
    {
        title: "The Forest in the Stars",
        summary: "A painter sees his place in the cosmos",
        tags: ["Fantasy", "Existential", "Artistic"],
        slug: "forestInTheStars",
        markdownPath: "/content/stories/theForestInTheStars.md"
    },
]

export function getStory(slug: string) {
    return stories.find((s) => s.slug === slug);
}