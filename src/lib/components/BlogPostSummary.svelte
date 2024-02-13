<script>
  import dayjs from "dayjs";
  import { H_ELLIPSIS_ENTITY } from "$lib/constants/entities";
  import { goto } from "$app/navigation";

  export let postTitle;
  export let datePublished = "";
  export let seoMetaDescription;
  export let slug;

  /**
   * @param event {MouseEvent} - click
   */
  const handleMouseEnter = (event) => {
    let element = /** @type {HTMLElement} */ (event.target);
    element.style.cursor = "pointer";
  };

  /**
   * @param event {MouseEvent} - click
   */
  const handleMouseLeave = (event) => {
    let element = /** @type {HTMLElement} */ (event.target);
    element.style.cursor = "default";
  };

  const handleMouseDown = async () => {
    goto(`/${slug}`);
  };

  const date = dayjs(datePublished);
  const dateString = `${date.format("D")} ${date.format("MMM")}`;
  const idString = `blog-post-summary-${slug}`;
</script>

<div
  role="presentation"
  class="container nextra-cards mt-4 grid not-prose"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:mousedown={handleMouseDown}
>
  <div class="content nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 text-current no-underline dark:shadow-none hover:shadow-gray-100 dark:hover:shadow-none shadow-gray-100 active:shadow-sm active:shadow-gray-200 transition-all duration-200 hover:border-gray-300 bg-transparent shadow-sm dark:border-neutral-800 hover:bg-slate-50 hover:shadow-md dark:hover:border-neutral-700 dark:hover:bg-neutral-900 font-semibold p-4 text-gray-700 hover:text-gray-900 dark:text-neutral-200 dark:hover:text-neutral-50" data-sveltekit-preload-data="hover">
    <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-2xl">
      <a
        aria-label={`Open ${postTitle} blog post`}
        aria-describedby={idString}
        href={`/${slug}/`}>{postTitle}</a
      >
    </h3>
    <span class="text-sm">{dateString}</span>
    <p class="">{seoMetaDescription}</p>
    <a id={idString} aria-hidden="true" class="pt-4 text-base text-gray-600">Read more {H_ELLIPSIS_ENTITY}</a>
  </div>
</div>

<style lang="scss">
  
</style>
