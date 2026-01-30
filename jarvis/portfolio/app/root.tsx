import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Nav from "~/components/Nav";
import "./app.css";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
      </head>
      <body>
        <div className="min-h-dvh flex flex-col">
          <Nav />
          <main className="flex-1">
            <Outlet />
          </main>
          <footer className="border-t">
            <div className="mx-auto max-w-5xl px-4 py-6 text-sm opacity-80">
              © {new Date().getFullYear()} Nicholas Larsen - Architect &amp;
              Storyteller
            </div>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
