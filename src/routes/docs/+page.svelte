<script lang="ts">
  import SvelteSEO from "scope-seo"
  import Card from "$lib/components/Card.svelte"
  import EmailIcon from "$lib/scope-core/icons/Email.svelte"
  import ExternalLink from "$lib/components/ExternalLink.svelte"
  import website from "$lib/config/website"
  const { contactEmail, facebookPageName, telegramUsername, twitterUserId, twitterUsername, wireUsername } = website
  import SEO from "$lib/components/SEO/index.svelte"
  import { fade } from "svelte/transition"

  import cn from "clsx"
  // import { Transition } from "scope-ui/components/transitions"
  import { Select, ThemeSwitch } from "scope-docs"
  import { Listbox, ListboxOption, ListboxOptions, ListboxButton, Transition } from "scope-ui"

  let title = "Contact"
  let metadescription = "Get in touch with Rodneylab, the developer of Climate SvelteKit Starter."
  const breadcrumbs = [
    {
      name: "Home",
      slug: "",
    },
    {
      name: "Contact Us",
      slug: "contact",
    },
  ]
  const seoProps = {
    breadcrumbs,
    title,
    metadescription,
    slug: "contact",
    datePublished: "2021-07-07T14:19:33.000+0100",
    lastUpdated: "2021-07-07T14:19:33.000+0100",
  }

  // prettier-ignore
  const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
  ];

  let selectedPerson = people[0]
</script>

<!-- <SEO {...seoProps} /> -->
<!-- <Select options={people} selected={selectedPerson} /> -->
<!-- <ThemeSwitch /> -->

<!-- <SvelteSEO title="Simple page title" description="Simple description about a page" /> -->
<!-- <h1>Contact me</h1>
<p>I would love to hear from you. Please get in touch!</p> -->

<!-- <Listbox value={selected} onChange={onChange}>
  {({ open }) => (
    <Listbox.Button
      ref={trigger}
      title={title}
      className={cn(
        'nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400',
        open
          ? 'nx-bg-gray-200 nx-text-gray-900 dark:nx-bg-primary-100/10 dark:nx-text-gray-50'
          : 'hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50',
        className
      )}
    >
      {selected.name}
      <Portal>
        <Transition
          ref={container}
          show={open}
          as={Listbox.Options}
          className="nx-z-20 nx-max-h-64 nx-overflow-auto nx-rounded-md nx-ring-1 nx-ring-black/5 nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-ring-white/20 dark:nx-bg-neutral-800"
          leave="nx-transition-opacity"
          leaveFrom="nx-opacity-100"
          leaveTo="nx-opacity-0"
        >
          {options.map(option => (
            <Listbox.Option
              key={option.key}
              value={option}
              className={({ active }) =>
                cn(
                  active
                    ? 'nx-bg-primary-50 nx-text-primary-600 dark:nx-bg-primary-500/10'
                    : 'nx-text-gray-800 dark:nx-text-gray-100',
                  'nx-relative nx-cursor-pointer nx-whitespace-nowrap nx-py-1.5',
                  'nx-transition-colors ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9'
                )
              }
            >
              {option.name}
              {option.key === selected.key && (
                <span className="nx-absolute nx-inset-y-0 nx-flex nx-items-center ltr:nx-right-3 rtl:nx-left-3">
                  <CheckIcon />
                </span>
              )}
            </Listbox.Option>
          ))}
        </Transition>
      </Portal>
    </Listbox.Button>
  )}
</Listbox> -->
<!-- <div class="flex w-full flex-col items-center justify-center">
  <div class="fixed top-16 w-72">
    <div class="relative mt-1">
      <button
        use:listbox.button
        on:select={onSelect}
        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm"
      >
        <span class="block truncate">{$listbox.selected.name}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <Selector class="h-5 w-5 text-gray-400" />
        </span>
      </button>

      <Transition
        show={$listbox.expanded}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul
          use:listbox.items
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {#each people as value, i}
            {@const active = $listbox.active === value}
            {@const selected = $listbox.selected === value}
            <li
              class="relative cursor-default select-none py-2 pl-10 pr-4 {active
                ? 'bg-amber-100 text-amber-900'
                : 'text-gray-900'}"
              use:listbox.item={{ value }}
            >
              <span class="block truncate {selected ? 'font-medium' : 'font-normal'}">{value.name}</span>
              {#if selected}
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                  <Check class="h-5 w-5" />
                </span>
              {/if}
            </li>
          {/each}
        </ul>
      </Transition>
    </div>
  </div>
</div> -->

<Listbox bind:value={selectedPerson} let:open>
  <ListboxButton>{selectedPerson.name}</ListboxButton>
  {#if open}
    <div transition:fade>
      <!-- When controlling the transition manually, make sure to use `static` -->
      <ListboxOptions static>
        {#each people as person (person.id)}
          <ListboxOption value={person}>
            {person.name}
          </ListboxOption>
        {/each}
      </ListboxOptions>
    </div>
  {/if}
</Listbox>
