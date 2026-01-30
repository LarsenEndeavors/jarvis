import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    
    ...prefix("work", [
        index("./routes/work_index.tsx"),
        route(":slug", "./routes/work.$slug.tsx"),
    ]),

    ...prefix("stories", [
        index("./routes/stories_index.tsx"),
        route(":slug", "./routes/stories.$slug.tsx"),
    ]),

    ...prefix("blog", [
        index("./routes/blog_index.tsx"),
        route(":slug", "./routes/blog.$slug.tsx"),
    ]),

    route("lab", "./routes/lab.tsx"),
    route("contact","./routes/contact.tsx"),

    // Catchall
    route("*", "./routes/$.tsx")
] satisfies RouteConfig;