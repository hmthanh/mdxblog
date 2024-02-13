<script>
  import { browser } from "$app/environment"
  import BlogPost from "$lib/components/BlogPost.svelte"
  import lazyload from "vanilla-lazyload"
  import { ArrowRightIcon } from "scope-docs"

  /** @type {import('./$types').PageData} */
  export let data

  // {imageData}
  const { page, post } = data

  if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload()
  }
</script>

<!-- {imageData} -->
<!-- <BlogPost {post} /> -->

<svelte:component this={page} />
<!-- <div>222</div> -->
