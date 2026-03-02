import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  buildDirectory: "build",
  prerender: true,
} satisfies Config;