// imports
import path from "node:path"
import slash from "slash"
import title from "title"

// constants
const LOCALE_REGEX = /\.([a-z]{2}(-[A-Z]{2})?)$/

// functions
export function parseFileName(filePath) {
  // Get file name and extension from file path
  const { name, ext } = path.parse(filePath)
  const locale = name.match(LOCALE_REGEX)?.[1] || ""
  return {
    name: locale ? name.replace(LOCALE_REGEX, "") : name,
    locale,
    ext,
  }
}

export function truthy(value) {
  return !!value
}

export function normalizeMeta(meta) {
  return typeof meta === "string" ? { title: meta } : meta
}

export function normalizePageRoute(parentRoute, route) {
  return slash(path.join(parentRoute, route.replace(/^index$/, "")))
}

export function pageTitleFromFilename(fileName) {
  return title(fileName.replaceAll(/[-_]/g, " "))
}

export function sortPages(pages, locale) {
  if (locale === "") {
    locale = undefined
  }
  return pages
    .filter((item) => item.kind === "Folder" || item.locale === locale)
    .map((item) => ({
      name: item.name,
      date: "frontMatter" in item && item.frontMatter?.date,
      title: ("frontMatter" in item && item.frontMatter?.title) || pageTitleFromFilename(item.name),
    }))
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (a.date) {
        return -1 // sort a before b
      }
      if (b.date) {
        return 1 // sort a after b
      }
      return a.title.localeCompare(b.title, locale, { numeric: true })
    })
    .map((item) => [item.name, item.title])
}

export function isSerializable(o) {
  try {
    JSON.stringify(o)
    return true
  } catch {
    return false
  }
}

export function hashFnv32a(str, seed = 0x811c9dc5) {
  let hval = seed

  for (let i = 0; i < str.length; i++) {
    hval ^= str.charCodeAt(i)
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24)
  }

  // Convert to 8 digit hex string
  return ("0000000" + (hval >>> 0).toString(16)).substring(-8)
}

export function getDefault(module) {
  return module.default || module
}
