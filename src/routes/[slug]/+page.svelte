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
