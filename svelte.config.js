/** @type {import('@sveltejs/kit').Config} */
import adapter from "@sveltejs/adapter-static"
import { mdsvex } from "mdsvex"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

const config = {
  extensions: [".svelte", ".md", ".svelte.md"],
  preprocess: [vitePreprocess({}), mdsvex({ extensions: [".svelte.md", ".md", ".svx"] })],
  kit: {
    adapter: adapter({ precompress: true }),
    alias: {
      $lib: "src/lib",
      $config: "src/lib/config",
      "scope-core": "src/lib/scope-core",
      "scope-docs": "src/lib/scope-docs",
      "scope-seo": "src/lib/scope-seo",
      $components: "src/lib/components",
    },
  },
}

export default config
