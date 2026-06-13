import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cyh.io",
  outDir: "./build",
  integrations: [sitemap()],
});
