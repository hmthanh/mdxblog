<script>
  import { GlobeIcon } from "svelte-icons/fa"

  export let lite = false
  export let className = ""

  const { locale, pathname } = window.location

  const options = [
    { locale: "en", text: "English" },
    { locale: "es", text: "Español" },
  ]

  let selected = options.find((o) => o.locale === locale)
</script>

<select
  on:change={(e) => {
    const date = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    document.cookie = `NEXT_LOCALE=${e.target.value}; expires=${date.toUTCString()}; path=/`
    window.location.href = pathname
  }}
>
  {#each options as option}
    <option value={option.locale} selected={option.locale === selected.locale}>
      {#if lite}
        {option.locale}
      {:else}
        <span class="flex items-center gap-2">
          <GlobeIcon />
          {option.text}
        </span>
      {/if}
    </option>
  {/each}
</select>

<style>
  /* styles */
</style>
