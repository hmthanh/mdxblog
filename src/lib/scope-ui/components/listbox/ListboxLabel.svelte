<script lang="ts" context="module">
  type TListboxLabelProps<TSlotProps extends {}, TAsProp extends SupportedAs> = TPassThroughProps<
    TSlotProps,
    TAsProp,
    "label"
  > & {}
</script>

<script lang="ts">
  import { ListboxStates, useListboxContext } from "./Listbox.svelte"
  import { useId } from "scope-ui/hooks/use-id"
  import Render from "scope-ui/utils/Render.svelte"
  // import { forwardEventsBuilder } from "scope-ui/internal/forwardEventsBuilder";
  import type { SupportedAs } from "scope-ui/internal/elements"
  import type { HTMLActionArray } from "scope-ui/hooks/use-actions"
  // import { get_current_component } from "svelte/internal";
  import type { TPassThroughProps } from "scope-ui/types"

  /***** Props *****/
  type TAsProp = $$Generic<SupportedAs>
  type $$Props = TListboxLabelProps<typeof slotProps, TAsProp>

  export let as: SupportedAs = "label"
  export let use: HTMLActionArray = []

  /***** Events *****/
  // const forwardEvents = forwardEventsBuilder(get_current_component());

  /***** Component *****/
  let id = `headlessui-listbox-label-${useId()}`
  let api = useListboxContext("ListboxLabel")

  let labelRef = $api.labelRef
  let buttonRef = $api.buttonRef

  function handleClick(): void {
    $buttonRef?.focus({ preventScroll: true })
  }

  $: slotProps = {
    open: $api.listboxState === ListboxStates.Open,
    disabled: $api.disabled,
  }
</script>

<Render
  {...$$restProps}
  {id}
  {as}
  {slotProps}
  use={[...use]}
  name={"ListboxLabel"}
  bind:el={$labelRef}
  on:click={handleClick}
>
  <slot {...slotProps} />
</Render>
<!-- {id} -->
