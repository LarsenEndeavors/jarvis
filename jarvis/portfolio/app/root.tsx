import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Nav from "~/components/Nav";
import "./app.css";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="manifest" href="site.webmanifest" />
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
