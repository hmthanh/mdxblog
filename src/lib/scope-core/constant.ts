// import path from 'node:path'
// import type { NextraConfig } from './types'

import { dev } from "$app/environment"

// imports
// import path from "path"

// constants
export const MARKDOWN_EXTENSIONS = ["md", "mdx"]

export const META_FILENAME = "_meta.json"

export const DYNAMIC_META_FILENAME = "_meta.js"

// export const CWD = process.cwd()

// export const PUBLIC_DIR = path.join(CWD, "public")

export const NEXTRA_INTERNAL = Symbol("nextra_internal")

export const DEFAULT_LOCALES = [""]

export const ERROR_ROUTES = new Set(["/404", "/500"])

// regex
export const MARKDOWN_EXTENSION_REGEX = /\.mdx?$/

export const MARKDOWN_URL_EXTENSION_REGEX = /\.mdx?(?:(?=\[#?\])|$)/

export const LOCALE_REGEX = /\.([a-z]{2}(-[A-Z]{2})?)$/

export const EXTERNAL_URL_REGEX = /^https?:\/\//

export const CODE_BLOCK_FILENAME_REGEX = /filename="([^"]+)"/

// config
export let isProduction = false

export let IS_PRODUCTION = dev ? false : true

export let defaultLocale = "en-US"

export let defaultConfig = {
  staticImage: true,
  flexsearch: {
    codeblocks: true,
  },
  codeHighlight: true,
}

export let officialThemes = ["nextra-theme-docs", "nextra-theme-blog"]
