import { z } from "zod"

// import { ERROR_ROUTES } from "./constants.js"

const pageThemeSchema = z.strictObject({
  breadcrumb: z.boolean(),
  collapsed: z.boolean(),
  footer: z.boolean(),
  layout: z.enum(["default", "full", "raw"]),
  navbar: z.boolean(),
  pagination: z.boolean(),
  sidebar: z.boolean(),
  timestamp: z.boolean(),
  toc: z.boolean(),
  typesetting: z.enum(["default", "article"]),
})

export type PageTheme = z.infer<typeof pageThemeSchema>

const DEFAULT_PAGE_THEME: PageTheme = {
  breadcrumb: true,
  collapsed: false,
  footer: true,
  layout: "default",
  navbar: true,
  pagination: true,
  sidebar: true,
  timestamp: true,
  toc: true,
  typesetting: "default",
}

/**
 * An option to control how an item should be displayed in the sidebar:
 * - `normal`: the default behavior, item will be displayed
 * - `hidden`: the item will not be displayed in the sidebar entirely
 * - `children`: if the item is a folder, itself will be hidden but all its children will still be processed
 */
const displaySchema = z.enum(["normal", "hidden", "children"])
const titleSchema = z.string()

const itemSchema = z.object({
  href: z.string(),
  newWindow: z.boolean(),
  title: titleSchema,
})

