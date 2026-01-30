import { Link } from "react-router";

export default function Card(props: {
    to: string;
    title: string;
    summary: string;
    tags?: string[];
}) {
    return (
        <Link to={props.to} className="block rounded-xl border p-4 hover:bg-black/5">
            <div className="font-semibold">
                {props.title}
            </div>
            <div className="mt-1 text-sm opacity-80">
                {props.summary}
            </div>
            {props.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                    {props.tags.map((t) => (
                        <span key={t} className="text-xs rounded-full border px-2 py-1 opacity-80">
                            {t}
                        </span>
                    ))}
                </div>
            ) : null}
        </Link>
    );
}