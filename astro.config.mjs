import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cyh.io",
  base: "/",
  outDir: "./build",
  integrations: [sitemap({ filter: (page) => page.endsWith("/") })],
});
