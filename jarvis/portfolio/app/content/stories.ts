export type Story = {
    title: string;
    summary: string;
    tags: string[];
    slug: string;
};

export const stories: Story[] = [
    {
        title: "Silence",
        summary: "An assassin finds his pulse in a cyberpunk dystopia",
        tags: ["Fantasy", "Cyberpunk", "Noir"],
        slug: "silence" 
    },
    {
        title: "Not Black & White",
        summary: "A musician regains rediscovers his long lost magic the morning before his final symphony",
        tags: ["Fantasy", "Dialog Free"],
        slug: "blackAndWhite"
    }
]