import type { IPostMeta } from "$lib/types"
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
  const mdModules = import.meta.glob("../content/blog/**/index.md")
  const posts = await Promise.all(
    Object.keys(mdModules).map(async (path) => {
      const file = mdModules[path]
      const slug = path.split("/").at(-2)

      if (file && slug) {
        if ("metadata" in file) {
          const metadata = file.metadata as IPostMeta
          return { ...metadata, slug }
        }
      }
    })
  )
  return { posts }
}
