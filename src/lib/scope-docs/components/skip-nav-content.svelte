<script lang="ts">
  const DEFAULT_ID = "reach-skip-nav"
  const DEFAULT_LABEL = "Skip to content"

  export let id = undefined
</script>

<div {...$$props} id={id || DEFAULT_ID} />
