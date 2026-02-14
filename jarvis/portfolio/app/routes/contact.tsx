import { useState } from "react";

import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Fen1x Rising" },
    { name: "description", content: "Get in touch" },
  ];
}

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "success" | "sending" | "error">("idle");
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setError(null);

        const form = new FormData(e.currentTarget);
        const formElement = e.currentTarget as HTMLFormElement;
        const payload = Object.fromEntries(form.entries());
        console.log("Submitting contact form with payload:", payload);
        try {
            const res = await fetch("https://n8n.fen1x.org/webhook/portfolio/contact-form", {
                method:"POST",
                body: form
            });

            if (!res.ok) throw new Error(`Webhook returned ${res.status}`);
            setStatus("success");
            // reset form after successful submission
            formElement.reset();
        } catch (err: any) {
            setStatus("error");
            setError(err?.message ?? "An unknown error occurred");
        }
    }

    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-2xl font-semibold">Contact</h1>
            <p className="mt-2 opacity-80">
                Best way to reach me: {" "}
                <a className="underline" href="mailto:larsenEndeavors@gmail.com">larsenEndeavors@gmail.com</a>
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <form onSubmit={onSubmit} className="rounded-xl border p-4">
                    <div className="font-semibold">Send me a message</div>
                    <label className="mt-4 block text-sm">Name</label>
                    <input name="name" required className="mt-1 w-full rounded-md border px-3 py-2"/>
                    <label className="mt-4 block text-sm">Email</label>
                    <input name="email" type="email" required className="mt-1 w-full rounded-md border px-3 py-2"/>
                    <label className="mt-4 block text-sm">Message</label>
                    <textarea name="message" required className="mt-1 w-full rounded-md border px-3 py-2"/>
                    <button type="submit" disabled={status === "sending"} className="mt-4 rounded bg-black px-4 py-2 text-white hover:bg-black/80 disabled:opacity-50">
                        {status === "sending" ? "Sending..." : "Send"}
                    </button>
                    {status === "error" && <div className="mt-2 text-sm text-red-600">Error: {error}</div>}
                    {status === "success" && <div className="mt-2 text-sm text-green-600">Sent, I'll reply soon.</div>}
                </form>

                <div className="rounded-xl border p-4">
                    <div className="font-semibold">Links</div>
                    <ul className="mt-3 space-y-2 opacity-80">
                        <li><a className="underline" href="https://github.com/larsenEndeavors">GitHub</a></li>
                        <li><a className="underline" href="https://www.linkedin.com/in/larsenendeavors">LinkedIn</a></li>
                        <li><a className="underline" href="https://elementmarketing.solutions">Element Marketing Solutions</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}