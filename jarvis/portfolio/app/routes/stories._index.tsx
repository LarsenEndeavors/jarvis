import Card from "~/components/Card";
import { stories } from "~/content/stories";

export default function StoryIndex() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-2xl font-semibold">Stories</h1>
            <p className="mt-2 opacity-80">A Selection of Short Stories (WIP)</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {stories.map(s => (
                    <Card key={s.slug} 
                          to={`/stories/${s.slug}`} 
                          title={s.title}
                          summary={s.summary}
                    />
                ))}
            </div>
        </div>
    );
}