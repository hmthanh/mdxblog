<script>
  import { browser } from "$app/environment"
  import BlogPost from "$lib/components/BlogPost.svelte"
  import lazyload from "vanilla-lazyload"
  import { ArrowRightIcon } from "scope-docs"

  /** @type {import('./$types').PageData} */
  export let data

  const { page, post, imageData } = data

  if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload()
  }
</script>

<BlogPost {post} />

<svelte:component this={page} />

<style lang="css">
  h1 {
    @apply bg-blue-500 text-blue-500
  }

  h2 {
    @apply bg-blue-500 text-blue-500
  }
  h3 {
    @apply bg-blue-500 text-blue-500
  }
</style>
