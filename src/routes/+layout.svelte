<script>
  // Lora - supported variants:
  // weights: [400, 500, 600, 700]
  // styles: italic, normal
  // import "@fontsource/lora/400.css";
  // import "@fontsource/lora/600.css";
  // import "@fontsource/lora/700.css";
  // import "@fontsource/lora/700-italic.css";

  // Source Sans Pro - supported variants:
  // weights: [200, 300, 400, 600, 700, 900]
  // styles: italic, normal
  // import "@fontsource/source-sans-pro/400.css";
  // import "@fontsource/source-sans-pro/400-italic.css";

  import "$lib/styles/normalise.css"
  import "$lib/styles/app.css"

  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import PWA from "$lib/components/PWA.svelte"
  import ThemeProvider from "$lib/config/theme"
  import SvelteTheme from "$lib/config/themeStore/SvelteTheme.svelte"
</script>

<PWA />
<SvelteTheme />
<div class="container">
  <Header />
  <!-- <ThemeProvider> -->
  <main class="main-container">
    <slot />
  </main>
  <!-- </ThemeProvider> -->
  <Footer />
</div>

<style lang="css">
</style>
