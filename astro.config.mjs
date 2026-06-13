import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

export default defineConfig({
  site: isGitHubPages ? "https://cherihung.github.io" : "https://cyh.io",
  base: isGitHubPages ? "/cyh.io" : "/",
  outDir: "./build",
  integrations: [sitemap({ filter: (page) => page.endsWith("/") })],
});
