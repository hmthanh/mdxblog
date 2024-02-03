// imports
import { META_FILENAME } from "./constants.js"

// utils
import { truthy } from "./utils.js"

export default function filterRouteLocale(pageMap, locale, defaultLocale) {
  const isDefaultLocale = !locale || locale === defaultLocale

  const filteredPageMap = []

  const fallbackPages = {}

  for (const page of pageMap) {
    if (page.kind === "Folder") {
      filteredPageMap.push({
        ...page,
        children: filterRouteLocale(page.children, locale, defaultLocale),
      })
      continue
    }
    const localDoesMatch = (!page.locale && isDefaultLocale) || page.locale === locale
    const name = page.kind === "Meta" ? META_FILENAME : page.name
    if (localDoesMatch) {
      fallbackPages[name] = null
      filteredPageMap.push(page)
    } else if (fallbackPages[name] !== null && (!page.locale || page.locale === defaultLocale)) {
      fallbackPages[name] = page
    }
  }

  // concatenate results
  return [...filteredPageMap, ...Object.values(fallbackPages).filter(truthy)]
}
