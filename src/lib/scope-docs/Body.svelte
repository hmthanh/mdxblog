<script lang="ts" context="module">
  import type { SvelteComponent } from "svelte"
  interface BodyProps {
    themeContext: any // PageTheme
    breadcrumb: SvelteComponent
    timestamp?: number
    navigation: SvelteComponent
  }
</script>

<script>
  import cn from "clsx"
  import Breadcrumb from "./components/breadcrumb.svelte"
  import NavLinks from "./components/nav-links.svelte"
  import Timestamp from "./Timestamp.svelte"

  export let themeContext = { layout: "full", typesetting: "article" }
  export let breadcrumb
  export let timestamp
  export let navigation
  let flatDocsDirectories
  let activeIndex

  const classes = {
    toc: cn("nextra-toc order-last hidden w-64 shrink-0 xl:block print:hidden"),
    main: cn("w-full break-words"),
  }
</script>

{#if themeContext.layout == "null"}
  <article
    class={cn(
      classes.main,
      "nextra-content min-h-[calc(100vh-var(--nextra-navbar-height))] pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]"
    )}
  >
    <slot />
  </article>
{:else}
  <article
    class={cn(
      classes.main,
      "nextra-content flex min-h-[calc(100vh-var(--nextra-navbar-height))] min-w-0 justify-center pb-8 pr-[calc(env(safe-area-inset-right)-1.5rem)]",
      themeContext.typesetting === "article" && "nextra-body-typesetting-article"
    )}
  >
    <main class="w-full min-w-0 max-w-6xl px-6 pt-4 md:px-12">
      <Breadcrumb />
      <slot />
      <Timestamp />
      <NavLinks flatDirectories={flatDocsDirectories} currentIndex={activeIndex} />
    </main>
  </article>
{/if}
