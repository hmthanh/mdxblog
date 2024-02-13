interface IPostMeta {
  postTitle: string
  focusKeyphrase: string | undefined
  datePublished: string | undefined
  lastUpdated: string | undefined
  seoMetaDescription: string | undefined
  featuredImage: string | undefined
  featuredImageAlt: string | undefined
  ogImage: string | undefined
  ogSquareImage: string | undefined
  twitterImage: string | undefined
  categories: string[] | undefined
  tags: string[]
}

export type { IPostMeta }
