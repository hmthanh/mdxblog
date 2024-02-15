/** @type {import('@sveltejs/kit').Config} */
import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { escapeSvelte, mdsvex } from "mdsvex"
import { getHighlighter } from "shiki"
import remarkToc from "remark-toc"
import rehypeKatex from "rehype-katex"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import remarkReadingTime from "remark-reading-time"
import remarkUnwrapImages from "remark-unwrap-images"
// import rehypeRaw from "rehype-raw"
// import theme from "./theme.json"
import { theme } from "./theme.js"

export const CODE_BLOCK_FILENAME_REGEX = /filename="([^"]+)"/

const DEFAULT_REHYPE_PRETTY_CODE_OPTIONS = {
  theme,
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted")
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["highlighted"]
  },
  filterMetaString: (meta) => meta.replace(CODE_BLOCK_FILENAME_REGEX, ""),
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".svelte.md", ".md", ".svx"],
  highlight: {
    highlighter: async (code, lang = "text") => {
      const langs = ["javascript", "typescript", "js", "bash", "text", "json", "sh"]

      // const highlighter = await getHighlighter({ themes: "poimandres" })
      const highlighter = await getHighlighter({
        themes: ["poimandres"],
        langs: ["javascript", "typescript", "js", "bash", "text", "json", "sh", "md"],
      })
      await highlighter.loadLanguage("javascript", "typescript", "js", "bash", "text", "json", "sh", "md")

      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: "poimandres" }))
      // return `{@html \`${html}\`}` // html
      return `{@html \`${html}\` }`
    },
  },
  remarkPlugins: [remarkReadingTime, remarkUnwrapImages, remarkGfm, [remarkToc, { tight: true }]],
  rehypePlugins: [remarkMath, rehypeKatex, rehypeSlug, [rehypePrettyCode, { ...DEFAULT_REHYPE_PRETTY_CODE_OPTIONS }]],
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
