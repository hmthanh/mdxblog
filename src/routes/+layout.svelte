<script lang="ts">
  import SvelteSEO from "scope-seo"
  import "$lib/styles/normalise.css"
  import "$lib/styles/app.css"

  import "katex/dist/katex.min.css"

  import PWA from "$lib/components/PWA.svelte"
  // import "scope-ui/listbox"
  // import "scope-docs/components/theme-switch.svelte";
  // import { ThemeProvider } from '$lib/config/store/theme';
  // import ThemeProvider from "$lib/config/theme"
  // import SvelteTheme from "$lib/config/themeStore/SvelteTheme.svelte"
  // import Listbox from "scope-ui/components/listbox/Listbox.svelte"
  // import ListboxButton from "scope-ui/components/listbox/ListboxButton.svelte"
  // import ListboxLabel from "scope-ui/components/listbox/ListboxLabel.svelte"
  // import ListboxOption from "scope-ui/components/listbox/ListboxOption.svelte"
  // import ListboxOptions from "scope-ui/components/listbox/ListboxOptions.svelte"
  import { InnterLayout } from "scope-docs"
</script>

<PWA />
<!-- <SvelteTheme /> -->

<InnterLayout>
  <!-- <ThemeSwitch/> -->
  <slot />
</InnterLayout>

<style lang="css">
</style>
