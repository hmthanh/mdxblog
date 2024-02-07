<script lang="ts">
  import { onMount } from "svelte"

  export let open
  let delayedOpenState = false
  let openState = !!open

  onMount(() => {
    // useEffect(() => {
    //   if (openState) {
    //     setDelayedOpenState(true)
    //   } else {
    //     const timeout = setTimeout(() => setDelayedOpenState(openState), 500)
    //     return () => clearTimeout(timeout)
    //   }
    // }, [openState])
  })

  // const [openState, setOpen] = useState(!!open)
  //     const [summary, restChildren] = findSummary(children)

  //     // To animate the close animation we have to delay the DOM node state here.
  //     const [delayedOpenState, setDelayedOpenState] = useState(openState)
</script>

<details
  class="my-4 rounded border border-gray-200 bg-white p-2 shadow-sm first:mt-0 dark:border-neutral-800 dark:bg-neutral-900"
  {...$$props}
  open={delayedOpenState}
  {...openState && { "data-expanded": true }}
>
  <!-- <DetailsProvider value={setOpen}>{summary}</DetailsProvider> -->
  <!-- <Collapse isOpen={openState}>{restChildren}</Collapse> -->
  <slot />
</details>
