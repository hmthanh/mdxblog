<script>
  import SvelteSEO from "scope-seo"
  import Card from "$lib/components/Card.svelte"
  import EmailIcon from "scope-core/Icons/Email.svelte"
  import ExternalLink from "$lib/components/ExternalLink.svelte"
  import website from "$lib/config/website"
  const { contactEmail, facebookPageName, telegramUsername, twitterUserId, twitterUsername, wireUsername } = website
  import SEO from "$lib/components/SEO/index.svelte"
  import { CheckIcon } from "$lib/icons"
  import Listbox from "scope-ui/components/listbox/Listbox.svelte"
  import ListboxButton from "scope-ui/components/listbox/ListboxButton.svelte"
  import ListboxLabel from "scope-ui/components/listbox/ListboxLabel.svelte"
  import ListboxOption from "scope-ui/components/listbox/ListboxOption.svelte"
  import ListboxOptions from "scope-ui/components/listbox/ListboxOptions.svelte"

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

  const people = [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
  ]

  let selectedPerson = people[0]
</script>

<!-- <SEO {...seoProps} /> -->

<!-- <SvelteSEO title="Simple page title" description="Simple description about a page" /> -->
<!-- <h1>Contact me</h1>
<p>I would love to hear from you. Please get in touch!</p> -->


<!-- <Listbox bind:value={selectedPerson}>
  <ListboxButton>{selectedPerson.name}</ListboxButton>
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
</Listbox>
 -->


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