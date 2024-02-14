<script lang="ts">
	import cn from 'clsx';
  let _class
  export {_class as class}

  import FolderMenu from "./folder.svelte"
  import FileMenu from "./file.svelte"
  export let directories
  export let anchors
  export let onlyCurrentDocs
  let _class
  export { _class as class }
</script>

<ul
  class={cn(
    "flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word]",
    "cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border",
    _class
  )}
>
  {#each directories as item}
    {#if !onlyCurrentDocs || item.isUnderCurrentDocsTree}
      {#if item.type === "menu" || (item.children && (item.children.length || !item.withIndexPage))}
        <FolderMenu key={item.name} {item} {anchors} />
      {:else}
        <FileMenu key={item.name} {item} {anchors} />
      {/if}
    {/if}
  {/each}
</ul>
