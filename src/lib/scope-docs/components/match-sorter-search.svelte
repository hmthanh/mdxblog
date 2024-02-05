<script lang="ts">
  import { matchSorter } from "match-sorter"
  // import type { Item as NormalItem } from 'nextra/normalize-pages'
  // import type { ReactElement } from 'react'
  // import { useMemo, useState } from 'react'
  // import type { SearchResult } from '../types'
  // import { HighlightMatches } from './highlight-matches'
  // import { Search } from './search'
  let _class
  export { _class as class }
  export let directories

  //     const [search, setSearch] = useState('')
  //   const results = useMemo<SearchResult[]>(
  //     () =>
  //       // Will need to scrape all the headers from each page and search through them here
  //       // (similar to what we already do to render the hash links in sidebar)
  //       // We could also try to search the entire string text from each page
  //       search
  //         ? matchSorter(directories, search, { keys: ['title'] }).map(
  //             ({ route, title }) => ({
  //               id: route + title,
  //               route,
  //               children: <HighlightMatches value={title} match={search} />
  //             })
  //           )
  //         : [],
  //     [search, directories]
  //   )
</script>

<!-- <Search value={search} onChange={setSearch} {className} overlayClassName="nx-w-full" {results} /> -->
