<script>
  import website from "$lib/config/website"
  const { contactEmail, facebookPageName, telegramUsername, twitterUserId, twitterUsername, wireUsername } = website
  import SEO from "$lib/components/SEO/index.svelte"
  import { Sidebar, NavToc, BreadCrumb, NavLinks } from "scope-docs"

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
</script>

<SEO {...seoProps} />

<div class="mx-auto flex max-w-[90rem]">
  <div class="motion-reduce:transition-none [transition:background-color_1.5s_ease] bg-transparent"></div>

  <Sidebar />
  <NavToc />

  <div id="reach-skip-nav"></div>
  <article
    class="w-full break-words nextra-content flex min-h-[calc(100vh-var(--nextra-navbar-height))] min-w-0 justify-center pb-8 pr-[calc(env(safe-area-inset-right)-1.5rem)]"
  >
    <main class="w-full min-w-0 max-w-6xl px-6 pt-4 md:px-12">
      <BreadCrumb />

      <h1 class="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Docs Theme</h1>
      <p class="mt-6 leading-7 first:mt-0">
        Nextra Docs Theme is a theme that includes almost everything you need to build a modern documentation website.
        It includes a top navigation bar, a search bar, a pages sidebar, a TOC sidebar, and other built-in components.
      </p>
      <p class="mt-6 leading-7 first:mt-0">This website itself is built with the Nextra Docs Theme.</p>
      <h2
        class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400"
      >
        Quick Start from Template<a
          href="/"
          id="quick-start-from-template"
          class="subheading-anchor"
          aria-label="Permalink for this section"
        >
        </a>
      </h2>
      <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
        Deploy to Vercel<a
          href="/"
          id="deploy-to-vercel"
          class="subheading-anchor"
          aria-label="Permalink for this section"
        >
        </a>
      </h3>
      <p class="mt-6 leading-7 first:mt-0">
        You can start by creating your own Nextra site and deploying to Vercel by clicking the link:
      </p>
      <a
        class="mt-3 inline-flex"
        target="_blank"
        href="https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fshuding%2Fnextra-docs-template&amp;showOptionalTeamCreation=false"
      >
        <p class="mt-6 leading-7 first:mt-0">
          <img src="https://vercel.com/button" alt="" />
        </p>
      </a>
      <p class="mt-6 leading-7 first:mt-0">
        Vercel will fork the
        <a
          href="https://github.com/shuding/nextra-docs-template"
          target="_blank"
          rel="noreferrer"
          class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
          >Nextra Docs template<span class="sr-only select-none"> (opens in a new tab)</span>
        </a> and deploy the site for you. Once done, every commit in the repository will be deployed automatically.
      </p>
      <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
        Fork the Template<a
          href="#fork-the-template"
          id="fork-the-template"
          class="subheading-anchor"
          aria-label="Permalink for this section"
        >
        </a>
      </h3>
      <p class="mt-6 leading-7 first:mt-0">
        You can also manually fork the
        <a
          href="https://github.com/shuding/nextra-docs-template"
          target="_blank"
          rel="noreferrer"
          class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
          >template repository<span class="sr-only select-none"> (opens in a new tab)</span>
        </a>.
      </p>
      <h2
        class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400"
      >
        Start as New Project<a
          href="#start-as-new-project"
          id="start-as-new-project"
          class="subheading-anchor"
          aria-label="Permalink for this section"
        >
        </a>
      </h2>
      <div class="nextra-steps ml-4 mb-12 border-l border-gray-200 pl-6 dark:border-neutral-800 [counter-reset:step]">
        <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
          Install<a href="#install" id="install" class="subheading-anchor" aria-label="Permalink for this section"> </a>
        </h3>
        <p class="mt-6 leading-7 first:mt-0">
          To create a Nextra Docs site manually, you have to install <strong>Next.js</strong>,
          <strong>React</strong>, <strong>Nextra</strong>, and <strong>Nextra Docs Theme</strong>. In your project
          directory, run the following command to install the dependencies:
        </p>
        <div class="nextra-scrollbar overflow-x-auto overflow-y-hidden overscroll-x-contain">
          <div
            class="mt-4 flex w-max min-w-full border-b border-gray-200 pb-px dark:border-neutral-800"
            role="tablist"
            aria-orientation="horizontal"
          >
            <button
              class="mr-2 rounded-t p-2 font-medium leading-5 transition-colors -mb-0.5 select-none border-b-2 border-primary-500 text-primary-600"
              id="headlessui-tabs-tab-:r0:"
              role="tab"
              type="button"
              aria-selected="true"
              tabindex="0"
              data-headlessui-state="selected"
              aria-controls="headlessui-tabs-panel-:r4:">npm</button
            >
            <button
              class="mr-2 rounded-t p-2 font-medium leading-5 transition-colors -mb-0.5 select-none border-b-2 border-transparent text-gray-600 hover:border-gray-200 hover:text-black dark:text-gray-200 dark:hover:border-neutral-800 dark:hover:text-white"
              id="headlessui-tabs-tab-:r1:"
              role="tab"
              type="button"
              aria-selected="false"
              tabindex="-1"
              data-headlessui-state=""
              aria-controls="headlessui-tabs-panel-:r5:">pnpm</button
            >
            <button
              class="mr-2 rounded-t p-2 font-medium leading-5 transition-colors -mb-0.5 select-none border-b-2 border-transparent text-gray-600 hover:border-gray-200 hover:text-black dark:text-gray-200 dark:hover:border-neutral-800 dark:hover:text-white"
              id="headlessui-tabs-tab-:r2:"
              role="tab"
              type="button"
              aria-selected="false"
              tabindex="-1"
              data-headlessui-state=""
              aria-controls="headlessui-tabs-panel-:r6:">yarn</button
            >
            <button
              class="mr-2 rounded-t p-2 font-medium leading-5 transition-colors -mb-0.5 select-none border-b-2 border-transparent text-gray-600 hover:border-gray-200 hover:text-black dark:text-gray-200 dark:hover:border-neutral-800 dark:hover:text-white"
              id="headlessui-tabs-tab-:r3:"
              role="tab"
              type="button"
              aria-selected="false"
              tabindex="-1"
              data-headlessui-state=""
              aria-controls="headlessui-tabs-panel-:r7:">bun</button
            >
          </div>
        </div>
        <div>
          <div
            class="rounded pt-6"
            id="headlessui-tabs-panel-:r4:"
            role="tabpanel"
            tabindex="0"
            data-headlessui-state="selected"
            aria-labelledby="headlessui-tabs-tab-:r0:"
          >
            <div class="nextra-code-block relative mt-6 first:mt-0">
              <pre
                class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 py-4"
                data-language="sh"
                data-theme="default"></pre>
              <div
                class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-0"
              >
                <button
                  class="nextra-button transition-all active :opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden"
                  title="Toggle word wrap"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
                    ></path>
                  </svg>
                </button>
                <button
                  class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50"
                  title="Copy code"
                  tabindex="0"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="nextra-copy-icon pointer-events-none h-4 w-4"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></rect>
                    <path
                      d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <span
            id="headlessui-tabs-panel-:r5:"
            role="tabpanel"
            tabindex="-1"
            style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
            aria-labelledby="headlessui-tabs-tab-:r1:"
          >
          </span>
          <span
            id="headlessui-tabs-panel-:r6:"
            role="tabpanel"
            tabindex="-1"
            style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
            aria-labelledby="headlessui-tabs-tab-:r2:"
          >
          </span>
          <span
            id="headlessui-tabs-panel-:r7:"
            role="tabpanel"
            tabindex="-1"
            style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
            aria-labelledby="headlessui-tabs-tab-:r3:"
          >
          </span>
        </div>
        <div
          class="nextra-callout overflow-x-auto mt-6 flex rounded-lg border py-2 ltr:pr-4 rtl:pl-4 contrast-more:border-current contrast-more:dark:border-current border-orange-100 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300"
        >
          <div
            class="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2"
            style="font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';"
          >
            💡
          </div>
          <div class="w-full min-w-0 leading-7">
            <p class="mt-6 leading-7 first:mt-0">
              If you already have Next.js installed in your project, you only need to install <code
                class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
                dir="ltr">nextra</code
              >
              and
              <code
                class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
                dir="ltr">nextra-theme-docs</code
              > as the add-ons.
            </p>
          </div>
        </div>
        <p class="mt-6 leading-7 first:mt-0">
          Add the following scripts in <code
            class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
            dir="ltr">package.json</code
          >:
        </p>
        <div class="nextra-code-block relative mt-6 first:mt-0">
          <div
            class="absolute top-0 z-[1] w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200"
          >
            package.json
          </div>
          <pre
            class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 pt-12 pb-4"
            data-language="json"
            data-theme="default"></pre>
          <div
            class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-8"
          >
            <button
              class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden"
              title="Toggle word wrap"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
                <path
                  fill="currentColor"
                  d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
                ></path>
              </svg>
            </button>
            <button
              class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50"
              title="Copy code"
              tabindex="0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                class="nextra-copy-icon pointer-events-none h-4 w-4"
              >
                <rect
                  x="9"
                  y="9"
                  width="13"
                  height="13"
                  rx="2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <path
                  d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <p class="mt-6 leading-7 first:mt-0">
          You can either start the server with, for example if you use npm, <code
            class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
            dir="ltr">npm run dev</code
          >, which will run in development mode or
          <code
            class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
            dir="ltr">npm run build &amp;&amp; npm run start</code
          > for production mode.
        </p>
        <div
          class="nextra-callout overflow-x-auto mt-6 flex rounded-lg border py-2 ltr:pr-4 rtl:pl-4 contrast-more:border-current contrast-more:dark:border-current border-orange-100 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300"
        >
          <div
            class="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2"
            style="font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';"
          >
            💡
          </div>
          <div class="w-full min-w-0 leading-7">
            <p class="mt-6 leading-7 first:mt-0">
              If you're not familiar with Next.js, note that development mode is significantly slower since Next.js
              compiles every page you navigate to.
            </p>
          </div>
        </div>
        <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
          Add Next.js Config<a
            href="#add-nextjs-config"
            id="add-nextjs-config"
            class="subheading-anchor"
            aria-label="Permalink for this section"
          >
          </a>
        </h3>
        <p class="mt-6 leading-7 first:mt-0">
          Create the following <code
            class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
            dir="ltr">next.config.js</code
          > file in your project’s root directory:
        </p>
        <div class="nextra-code-block relative mt-6 first:mt-0">
          <div
            class="absolute top-0 z-[1] w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200"
          >
            next.config.js
          </div>
          <pre
            class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 pt-12 pb-4"
            data-language="js"
            data-theme="default"></pre>
          <div
            class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-8"
          >
            <button
              class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden"
              title="Toggle word wrap"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
                <path
                  fill="currentColor"
                  d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
                ></path>
              </svg>
            </button>
            <button
              class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50"
              title="Copy code"
              tabindex="0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                class="nextra-copy-icon pointer-events-none h-4 w-4"
              >
                <rect
                  x="9"
                  y="9"
                  width="13"
                  height="13"
                  rx="2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <path
                  d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <p class="mt-6 leading-7 first:mt-0">
          With the above configuration, Nextra can handle Markdown files in your Next.js project, with the specified
          theme. Other Nextra configurations can be found in
          <a class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]" href="/docs/"
            >Guide</a
          >.
        </p>
        <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
          Create Docs Theme Config<a
            href="#create-docs-theme-config"
            id="create-docs-theme-config"
            class="subheading-anchor"
            aria-label="Permalink for this section"
          >
          </a>
        </h3>
        <p class="mt-6 leading-7 first:mt-0">
          Lastly, create the corresponding <code
            class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
            dir="ltr">theme.config.jsx</code
          > file in your project’s root directory. This will be used to configure the Nextra Docs theme:
        </p>
        <div class="nextra-code-block relative mt-6 first:mt-0">
          <div
            class="absolute top-0 z-[1] w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200"
          >
            theme.config.jsx
          </div>
          <pre
            class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 pt-12 pb-4"
            data-language="jsx"
            data-theme="default"></pre>
          <div
            class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-8"
          >
            <button
              class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden"
              title="Toggle word wrap"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
                <path
                  fill="currentColor"
                  d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
                ></path>
              </svg>
            </button>
            <button
              class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50"
              title="Copy code"
              tabindex="0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                class="nextra-copy-icon pointer-events-none h-4 w-4"
              >
                <rect
                  x="9"
                  y="9"
                  width="13"
                  height="13"
                  rx="2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <path
                  d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <p class="mt-6 leading-7 first:mt-0">
          Full theme configurations can be found
          <a class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]" href="/docs/"
            >here</a
          >.
        </p>
        <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
          Ready to Go!<a
            href="#ready-to-go"
            id="ready-to-go"
            class="subheading-anchor"
            aria-label="Permalink for this section"
          >
          </a>
        </h3>
        <p class="mt-6 leading-7 first:mt-0">
          Now, you can create your first MDX page as <code
            class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
            dir="ltr">pages/index.mdx</code
          >:
        </p>
        <div class="nextra-code-block relative mt-6 first:mt-0">
          <div
            class="absolute top-0 z-[1] w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200"
          >
            pages/index.mdx
          </div>
          <pre
            class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 pt-12 pb-4"
            data-language="mdx"
            data-theme="default"></pre>
          <div
            class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-8"
          >
            <button
              class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden"
              title="Toggle word wrap"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
                <path
                  fill="currentColor"
                  d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
                ></path>
              </svg>
            </button>
            <button
              class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50"
              title="Copy code"
              tabindex="0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                class="nextra-copy-icon pointer-events-none h-4 w-4"
              >
                <rect
                  x="9"
                  y="9"
                  width="13"
                  height="13"
                  rx="2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <path
                  d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <p class="mt-6 leading-7 first:mt-0">
          And run the <code
            class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
            dir="ltr">next</code
          >
          or
          <code
            class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
            dir="ltr">next dev</code
          >
          command specified in
          <code
            class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
            dir="ltr">package.json</code
          >to start developing the project! 🎉
        </p>
      </div>
      <p class="mt-6 leading-7 first:mt-0">
        Next, check out the next section to learn about organizing the documentation structure and configuring the
        website theme:
      </p>
      <div class="nextra-cards mt-4 gap-4 grid not-prose" style="--rows: 3;">
        <a
          class="nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 text-current no-underline dark:shadow-none hover:shadow-gray-100 dark:hover:shadow-none shadow-gray-100 active:shadow-sm active:shadow-gray-200 transition-all duration-200 hover:border-gray-300 bg-transparent shadow-sm dark:border-neutral-800 hover:bg-slate-50 hover:shadow-md dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
          href="/docs/"
        >
          <span
            class="flex font-semibold items-start gap-2 p-4 text-gray-700 hover:text-gray-900 dark:text-neutral-200 dark:hover:text-neutral-50 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75z"
              ></path>
            </svg>
            Page Structure
          </span>
        </a>
        <a
          class="nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 text-current no-underline dark:shadow-none hover:shadow-gray-100 dark:hover:shadow-none shadow-gray-100 active:shadow-sm active:shadow-gray-200 transition-all duration-200 hover:border-gray-300 bg-transparent shadow-sm dark:border-neutral-800 hover:bg-slate-50 hover:shadow-md dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
          href="/docs/"
        >
          <span
            class="flex font-semibold items-start gap-2 p-4 text-gray-700 hover:text-gray-900 dark:text-neutral-200 dark:hover:text-neutral-50 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              ></path>
            </svg>
            Theme Configuration
          </span>
        </a>
        <a
          class="nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 text-current no-underline dark:shadow-none hover:shadow-gray-100 dark:hover:shadow-none shadow-gray-100 active:shadow-sm active:shadow-gray-200 transition-all duration-200 hover:border-gray-300 bg-transparent shadow-sm dark:border-neutral-800 hover:bg-slate-50 hover:shadow-md dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
          href="/docs/"
        >
          <span
            class="flex font-semibold items-start gap-2 p-4 text-gray-700 hover:text-gray-900 dark:text-neutral-200 dark:hover:text-neutral-50 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              ></path>
            </svg>
            Built-in Components
          </span>
        </a>
      </div>
      <div class="mt-12 mb-8 block text-xs text-gray-500 ltr:text-right rtl:text-left dark:text-gray-400">
        Last updated on <time datetime="2023-10-25T14:01:42.000Z">October 25, 2023</time>
      </div>

      <NavLinks />
    </main>
  </article>
</div>

<style lang="css"></style>
