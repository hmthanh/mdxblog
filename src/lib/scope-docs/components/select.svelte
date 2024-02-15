<script lang="ts">
  import cn from "clsx"
  import type { SvelteComponent } from "svelte"
  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions, Transition } from "scope-ui"
  // import { CheckIcon } from "scope-docs"
  import { createEventDispatcher } from "svelte"
  import { CheckIcon } from "scope-core/icons"

  interface MenuOption {
    key: string
    name: SvelteComponent | string
  }

  interface MenuProps {
    selected: MenuOption
    onChange: (option: MenuOption) => void
    options: MenuOption[]
    title?: string
    className?: string
  }

  // export let options
  // export let selected

  const dispatch = createEventDispatcher()

  function handleSelect(option) {
    selected = option
    dispatch("change", option)
  }

  let menuOpen = false

  export let options: MenuOption[] | undefined
  export let selected: MenuOption | undefined
  // export let onChange: (option: MenuOption) => void
  // export let title: string | undefined = ''
  let _class
  export { _class as class }

  let open = false
  let active = false
</script>

<!-- <Listbox value={selected} onChange={onChange}>
</Listbox> -->

<button
  aria-pressed="false"
  class={cn(
    "h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400",
    open
      ? "bg-gray-200 text-gray-900 dark:bg-primary-100/10 dark:text-gray-50"
      : "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50",
    _class
  )}
  on:click={() => (menuOpen = !menuOpen)}
>
  {@html selected.name}
</button>

<!-- class:selected={option.key === selected.key} -->
{#if menuOpen}
  <div class="menu">
    {#each options as option}
      <div
        class={cn(
          active ? "bg-primary-50 text-primary-600 dark:bg-primary-500/10" : "text-gray-800 dark:text-gray-100",
          "relative cursor-pointer whitespace-nowrap py-1.5",
          "transition-colors ltr:pl-3 ltr:pr-9 rtl:pr-3 rtl:pl-9"
        )}
        on:click={() => handleSelect(option)}
      >
        {@html option.name}
        {#if option.key === selected.key}
          <span class="absolute inset-y-0 flex items-center ltr:right-3 rtl:left-3">
            <CheckIcon />
          </span>
        {/if}
      </div>
    {/each}
  </div>
{/if}

<!-- <Listbox
  bind:value={selectedPerson}
  class={cn(
    "h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400",
    // open
    //   ? "bg-gray-200 text-gray-900 dark:bg-primary-100/10 dark:text-gray-50"
    //   : "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50",
    _class
  )}
> -->
<!-- {({ open }) => {
  return (<ListboxButton>{selectedPerson.name}</ListboxButton>)
}} -->
<!-- <Transition
    as={Listbox.Options}
    class="z-20 max-h-64 overflow-auto rounded-md ring-1 ring-black/5 bg-white py-1 text-sm shadow-lg dark:ring-white/20 dark:bg-neutral-800"
              leave="transition-opacity"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
    enter="transition duration-100 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
  >
    <ListboxOptions>
      {#each people as person (person.id)}
        <ListboxOption
          value={person}
          disabled={person.unavailable}
          class={({ active }) => (active ? "active" : "")}
          let:selected
        >
          {#if selected}
            <CheckIcon />
          {/if}
          {person.name}
        </ListboxOption>
      {/each}
    </ListboxOptions>
  </Transition>
</Listbox> -->

<!-- <div>Hello</div> -->
