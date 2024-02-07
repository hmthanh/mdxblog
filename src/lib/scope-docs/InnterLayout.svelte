<script lang="ts">
  import cn from "clsx"
  import Head from "./components/head.svelte"
  import Banner from "./components/banner.svelte"
  import Sidebar from "./components/sidebar.svelte"
  import Body from "./Body.svelte"
  import Footer from "./components/footer.svelte"
  import Toc from "./components/toc.svelte"
  import Navbar from "./components/navbar.svelte"
  import SkipNavContent from "./components/skip-nav-content.svelte"
  import { ThemeSwitch } from "scope-docs/components"
  export let filePath
  export let pageMap
  export let frontMatter
  export let headings
  export let timestamp

  const classes = {
    toc: cn("nextra-toc order-last hidden w-64 shrink-0 xl:block print:hidden"),
    main: cn("w-full break-words"),
  }

  // const config = useConfig()
  // const { locale = DEFAULT_LOCALE, defaultLocale } = useRouter()
  // const fsPath = useFSRoute()

  let docsDirectories = []
  let flatDirectories = []
  let directories = []
  let hideSidebar = false
  let topLevelNavbarItems = []
  // const {
  //   activeType,
  //   activeIndex,
  //   activeThemeContext,
  //   activePath,
  //   topLevelNavbarItems,
  //   docsDirectories,
  //   flatDirectories,
  //   flatDocsDirectories,
  //   directories
  // } = useMemo(
  //   () =>
  //     normalizePages({
  //       list: pageMap,
  //       locale,
  //       defaultLocale,
  //       route: fsPath
  //     }),
  //   [pageMap, locale, defaultLocale, fsPath]
  // )
  let themeContext = { layout: "full", typesetting: "article" }

  // const themeContext = { ...activeThemeContext, ...frontMatter }
  // const hideSidebar =
  //   !themeContext.sidebar ||
  //   themeContext.layout === 'raw' ||
  //   activeType === 'page'

  let tocEl = {}
  // const tocEl =
  //   activeType === 'page' ||
  //   !themeContext.toc ||
  //   themeContext.layout !== 'default' ? (
  //     themeContext.layout !== 'full' &&
  //     themeContext.layout !== 'raw' && (
  //       <nav class={classes.toc} aria-label="table of contents" />
  //     )
  //   ) : (
  //     <nav
  //       class={cn(classes.toc, 'px-4')}
  //       aria-label="table of contents"
  //     >
  //       {renderComponent(config.toc.component, {
  //         headings: config.toc.float ? headings : [],
  //         filePath
  //       })}
  //     </nav>
  //   )

  // const localeConfig = config.i18n.find(l => l.locale === locale)
  // const isRTL = localeConfig
  //   ? localeConfig.direction === 'rtl'
  //   : config.direction === 'rtl'

  let direction = "ltr" // const direction = isRTL ? 'rtl' : 'ltr'
</script>

<!-- <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.setAttribute('dir','${direction}')`
      }}
    /> -->
<div dir={direction}>
  <Head />
  <!-- <Banner /> -->
  <Navbar {flatDirectories} items={topLevelNavbarItems} />
  <!-- {themeContext.navbar &&
      renderComponent(config.navbar.component, {
        flatDirectories,
        items: topLevelNavbarItems
      })} -->
  <div class={cn("mx-auto flex", themeContext.layout !== "raw" && "max-w-[90rem]")}>
    <!-- <ActiveAnchorProvider> -->
    <Sidebar
      {docsDirectories}
      {flatDirectories}
      fullDirectories={directories}
      {headings}
      asPopover={hideSidebar}
      includePlaceholder={themeContext.layout === "default"}
    />
    <!-- {tocEl} -->

    <nav class={cn(classes.toc, "px-4")} aria-label="table of contents">
      <Toc />
    </nav>

    <SkipNavContent />
    <!-- activeType !== 'page' && themeContext.breadcrumb ? (<Breadcrumb activePath={activePath} /> ) : null -->
    <!-- activeType !== 'page' && themeContext.pagination ? (<NavLinks flatDirectories={flatDocsDirectories} currentIndex={activeIndex} /> ) : null -->
    <Body {themeContext} breadcrumb={[]} {timestamp} navigation={[]}>
      <!-- <MDXProvider
            components={getComponents({
              isRawLayout: themeContext.layout === 'raw',
              components: config.components
            })}
          > -->
      <slot />
      <!-- </MDXProvider> -->
    </Body>
    <!-- </ActiveAnchorProvider> -->
  </div>
  <Footer menu={hideSidebar} />
  <!-- {themeContext.footer &&
      renderComponent(config.footer.component, { menu: hideSidebar })} -->
</div>
