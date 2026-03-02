import { projects } from "./content/projects";
import { stories } from "./content/stories";
import { blogs } from "./content/blogs";

export async function prerender() {
  return [
    "/", "/work", "/stories", "/blog", "/lab", "/contact",
    ...projects.map(p => `/work/${p.slug}`),
    ...stories.map(s => `/stories/${s.slug}`),
    ...blogs.map(b => `/blog/${b.slug}`),
  ];
}