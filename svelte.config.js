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
      $core: "src/lib/core",
      "svelte-docs": "src/lib/svelte-docs",
      $components: "src/lib/components",
    },
  },
}

export default config
