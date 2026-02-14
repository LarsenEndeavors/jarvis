import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Nav from "~/components/Nav";
import MatrixBackground from "~/components/MatrixBackground";
import "./app.css";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Links />
        <Meta  />
      </head>
      <body className="bg-black text-slate-100 overflow-x-hidden">
        <MatrixBackground />
        <Nav/>

        <div className="relative z-10 min-h-dvh md:pl-64 flex flex-col">
          <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:px-8">
            <main className="flex-1 flex flex-col">
              <div className="rounded-2xl bg-black/90 backdroup-blur border border-white/10 p-6 md:p-10">
                <Outlet />
              </div>
            </main>
          </div>
          <footer className="w-full border-t border-white/10 bg-black/25 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm opacity-80">
              © {new Date().getFullYear()} Nicholas Larsen - Architect &amp; Storyteller
            </div>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
