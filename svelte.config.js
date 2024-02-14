/** @type {import('@sveltejs/kit').Config} */
import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { escapeSvelte, mdsvex } from "mdsvex"
import { getHighlighter } from "shiki"
import remarkToc from "remark-toc"
import rehypeKatex from "rehype-katex"
import rehypeSlug from "rehype-slug"
import remarkUnwrapImages from "remark-unwrap-images"

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".svelte.md", ".md", ".svx"],
  highlight: {
    highlighter: async (code, lang = "text") => {
      // const highlighter = await getHighlighter({ themes: "poimandres" })
      const highlighter = await getHighlighter({
        themes: ["poimandres"],
        langs: ["javascript"],
      })
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang: "text", theme: "poimandres" }))
      // return `{@html \`${html}\`}` // html
      return `{@html \`${html}\` }`
    },
  },
  remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
  rehypePlugins: [rehypeKatex, rehypeSlug],
  layout: {
    blog: "./src/lib/layout/blog.svelte",
  },
}

const config = {
  extensions: [".svelte", ".md", ".svelte.md"],
  preprocess: [vitePreprocess({}), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter({ precompress: true }),
    alias: {
      $lib: "src/lib",
      $config: "src/lib/config",
      $components: "src/lib/components",
      "scope-core": "src/lib/scope-core",
      "scope-docs": "src/lib/scope-docs",
      "scope-seo": "src/lib/scope-seo",
      "scope-ui": "src/lib/scope-ui",
    },
  },
}

export default config
