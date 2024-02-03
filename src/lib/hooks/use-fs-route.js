// imports
import { readonly } from "svelte/store"
import { router } from "./stores"

// constants
const DEFAULT_LOCALE = "en-US"
const ERROR_ROUTES = new Set(["/404", "/500"])

// router store
export const router = readonly({
  locale: DEFAULT_LOCALE,
  route: {},
  asPath: "/",
})

// template
const template = "https://nextra.vercel.app"

// hook
export function useFSRoute() {
  // derive cleaned path
  $: pathname = $router.asPath

  $: cleanedPath =
    $pathname
      .replace(/\.html$/, "")
      .replace(/\/index(\/|$)/, "$1")
      .replace(/\/$/, "") || "/"

  return cleanedPath
}
