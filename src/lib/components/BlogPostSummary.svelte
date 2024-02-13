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
  class="container"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:mousedown={handleMouseDown}
>
  <div class="content" data-sveltekit-preload-data="hover">
    <h3>
      <a
        aria-label={`Open ${postTitle} blog post`}
        aria-describedby={idString}
        href={`/${slug}/`}>{postTitle}</a
      >
    </h3>
    <p>{dateString}</p>
    <p>{seoMetaDescription}</p>
    <span id={idString} aria-hidden="true">Read more {H_ELLIPSIS_ENTITY}</span>
  </div>
</div>

<style lang="scss">
  
</style>
