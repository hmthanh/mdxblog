import type { ProcessorOptions } from "@mdx-js/mdx"
import type { Heading as MDASTHeading } from "mdast"
import type { GrayMatterFile } from "gray-matter"
import type { Options as RehypePrettyCodeOptions } from "rehype-pretty-code"

export interface IPostMeta {
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

type Theme = string
export type Meta = string | Record<string, any>
export type DynamicMetaItem = Meta | DynamicFolder
export type DynamicMeta = Record<string, DynamicMetaItem>

export type Flexsearch =
  | boolean
  | {
      /**
       * Whether to index code blocks
       * @default true
       */
      codeblocks: boolean
      /**
       * A filter function to filter out files from indexing, and return the
       * index file key, or null to skip indexing.
       * A site can have multiple indexes, by default they're separated by
       * locales as multiple index files.
       */
      indexKey?: (filepath: string, route: string, locale?: string) => null | string
    }

type Transform = (
  result: string,
  options: {
    route: string
  }
) => string | Promise<string>

export interface Folder<FileType = PageMapItem> {
  kind: "Folder"
  name: string
  route: string
  children: FileType[]
}

export type DynamicFolder = {
  type: "folder"
  items: DynamicMeta
  title?: string
}

// <FrontMatterType = FrontMatter>
export type MdxFile = {
  kind: "MdxPage"
  name: string
  route: string
  locale?: string
  frontMatter?: any
}

export type MetaJsonPath = `${string}/${MetaFilename}`
export type MdxPath = `${string}.${MarkdownExtension}`

export type FileMap = {
  [jsonPath: MetaJsonPath]: MetaJsonFile
  [mdxPath: MdxPath]: MdxFile
}

export type MetaJsonFile = {
  kind: "Meta"
  locale?: string
  data: {
    [fileName: string]: Meta
  }
  // The path to the _meta.json file. This is a private property needed by the loader.
  __nextra_src?: string
}

export type PageMapItem = Folder | MdxFile | MetaJsonFile

export type Heading = {
  depth: MDASTHeading["depth"]
  value: string
  id: string
}

export type ReadingTime = {
  text: string
  minutes: number
  time: number
  words: number
}

// <FrontMatterType = FrontMatter>
export type PageOpts = {
  filePath: string
  route: string
  frontMatter: any
  pageMap: PageMapItem[]
  title: string
  headings: Heading[]
  hasJsxInH1?: boolean
  timestamp?: number
  flexsearch?: Flexsearch
  newNextLinkBehavior?: boolean
  readingTime?: ReadingTime
}

export type NextraConfig = {
  theme: Theme
  themeConfig?: string
  defaultShowCopyCode?: boolean
  flexsearch?: Flexsearch
  staticImage?: boolean
  readingTime?: boolean
  latex?: boolean
  codeHighlight?: boolean
  /**
   * A function to modify the code of compiled MDX pages.
   * @experimental
   */
  transform?: Transform
  /**
   * A function to modify the `pageOpts` prop passed to theme layouts.
   * @experimental
   */
  transformPageOpts?: (pageOpts: PageOpts) => PageOpts
  mdxOptions?: Pick<ProcessorOptions, "rehypePlugins" | "remarkPlugins"> & {
    format?: "detect" | "mdx" | "md"
    rehypePrettyCodeOptions?: Partial<RehypePrettyCodeOptions>
  }
}

export type StructurizedData = Record<string, string>

export type SearchData = {
  [route: string]: {
    title: string
    data: StructurizedData
  }
}
