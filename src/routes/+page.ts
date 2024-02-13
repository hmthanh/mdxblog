import type { IPostMeta } from "$lib/types"
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
  const mdModules = import.meta.glob("../content/blog/**/index.md")

  const posts = await Promise.all(
    Object.keys(mdModules).map(async (path) => {
      const fileMeta = await mdModules[path]()
      const slug = path.split("/").at(-2)
      const meta = fileMeta

      if (fileMeta && typeof fileMeta === "object" && slug) {
        if ("metadata" in fileMeta) {
          const metadata = fileMeta.metadata as IPostMeta
          return { ...metadata, slug }
        }
      }
    })
  )

  return { posts }
}
