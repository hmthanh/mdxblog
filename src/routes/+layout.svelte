<script>
  import SvelteSEO from "scope-seo"
  import "$lib/styles/normalise.css"
  import "$lib/styles/app.css"

  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import PWA from "$lib/components/PWA.svelte"
  import Anchor from "scope-docs/components/anchor.svelte"

  import Navbar from "scope-docs/components/navbar.svelte"
  import "scope-core/normalize-pages"
  // import "scope-ui/listbox"
  // import "scope-docs/components/theme-switch.svelte";
  // import { ThemeProvider } from '$lib/config/store/theme';
  // import ThemeProvider from "$lib/config/theme"
  // import SvelteTheme from "$lib/config/themeStore/SvelteTheme.svelte"
  import Render from "scope-ui/utils/Render.svelte"
  import Listbox from "scope-ui/components/listbox/Listbox.svelte"
  import ListboxButton from "scope-ui/components/listbox/ListboxButton.svelte"
  import ListboxLabel from "scope-ui/components/listbox/ListboxLabel.svelte"
  import ListboxOption from "scope-ui/components/listbox/ListboxOption.svelte"
  import ListboxOptions from "scope-ui/components/listbox/ListboxOptions.svelte"
  import { CheckIcon, InnterLayout } from "scope-docs"
  // import ""
</script>

<PWA />
<!-- <SvelteTheme /> -->

<!-- <InnterLayout> -->
  <slot />
<!-- </InnterLayout> -->

<!-- <div class="container">
  <Header />

    
  <Footer />
</div> -->

<style lang="css">
</style>
