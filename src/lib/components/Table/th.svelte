<script>
  import clsx from "clsx"
  export let className = ""
</script>

<th
  class={clsx("m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600", className)}
  {...$$restProps}
/>
