<script>
  import ogSquareImageSrc from "$lib/assets/home/home-open-graph-square.jpg"
  import ogImageSrc from "$lib/assets/home/home-open-graph.jpg"
  import twitterImageSrc from "$lib/assets/home/home-twitter.jpg"
  import featuredImageSrc from "$lib/assets/home/home.jpg"
  import BlogRoll from "$lib/components/BlogRoll.svelte"
  import Card from "$lib/components/Card.svelte"
  import SEO from "$lib/components/SEO/index.svelte"
  import website from "$lib/config/website"

  /** @type {import('./$types').PageData} */
  export let data
  const { posts } = data

  const { author, siteUrl } = website

  let title = "Home"
  const breadcrumbs = [
    {
      name: "Home",
      slug: "",
    },
  ]
  let metadescription =
    "SvelteKit MDsvex Blog Starter - starter code by Mdx Blog to help you get going on your next blog site"
  const featuredImageAlt =
    "picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera"
  const featuredImage = {
    url: featuredImageSrc,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: "Home page",
  }
  const ogImage = {
    url: ogImageSrc,
    alt: featuredImageAlt,
  }
  const ogSquareImage = {
    url: ogSquareImageSrc,
    alt: featuredImageAlt,
  }

  const twitterImage = {
    url: twitterImageSrc,
    alt: featuredImageAlt,
  }
  const entityMeta = {
    url: `${siteUrl}/`,
    faviconWidth: 512,
    faviconHeight: 512,
    caption: author,
  }
  const seoProps = {
    title,
    slug: "",
    entityMeta,
    datePublished: "2021-07-07T14:19:33.000+0100",
    lastUpdated: "2021-07-07T14:19:33.000+0100",
    breadcrumbs,
    metadescription,
    featuredImage,
    ogImage,
    ogSquareImage,
    twitterImage,
  }
</script>

<SEO {...seoProps} />
<!-- <header>
  <h1>Climate &mdash; Sveltekit Starter</h1>
  <h2>SvelteKit MDsveX (Markdown for Svelte) Blog</h2>
</header> -->
<!-- <Card>
  <h2>
    <span>About me</span>
  </h2>
  <p>
    I live and breathe analogue photography. I show you my favourite analogue
    film cameras on this site. Hopefully, if you are not into analogue
    photography yet, some of my enthusiasm will rub off onto you.
  </p>
</Card>
 -->

<main class="w-full min-w-0 max-w-6xl px-6 pt-4 md:px-12">
  <h1 class="text-center text-4xl tracking-tighter font-extrabold md:text-5xl mt-8">Pithagon</h1>
  <!-- <div class="nextra-bleed relative -mx-6 mt-6 md:-mx-8 2xl:-mx-24">
    <div class="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <p class="text-lg mb-2 text-gray-600 md:!text-2xl">Wonderful science in your hand</p>
      <div class="grid grid-cols-4 gap-x-4 gap-y-8 my-10">
        <div class="items-center inline-flex">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"> </path>
            <line x1="16" y1="8" x2="2" y2="22"> </line>
            <line x1="17.5" y1="15" x2="9" y2="15"> </line>
          </svg>
          <h4 class="ml-2 font-bold text-lg whitespace-nowrap">Lightweight</h4>
        </div>
        <div class="items-center inline-flex">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            shape-rendering="geometricPrecision"
            viewBox="0 0 24 24"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"> </path>
          </svg>
          <h4 class="ml-2 font-bold text-lg whitespace-nowrap">Realtime</h4>
        </div>
        <div class="items-center inline-flex">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"> </circle>
            <line x1="10" y1="15" x2="10" y2="9"> </line>
            <line x1="14" y1="15" x2="14" y2="9"> </line>
          </svg>
          <h4 class="ml-2 font-bold text-lg whitespace-nowrap">Suspense</h4>
        </div>
        <div class="items-center inline-flex">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="1"> </circle>
            <circle cx="12" cy="5" r="1"> </circle>
            <circle cx="12" cy="19" r="1"> </circle>
          </svg>
          <h4 class="ml-2 font-bold text-lg whitespace-nowrap">Pagination</h4>
        </div>
        <div class="items-center inline-flex">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            shape-rendering="geometricPrecision"
          >
            <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"> </path>
            <path d="M8 16h.01"> </path>
            <path d="M8 20h.01"> </path>
            <path d="M12 18h.01"> </path>
            <path d="M12 22h.01"> </path>
            <path d="M16 16h.01"> </path>
            <path d="M16 20h.01"> </path>
          </svg>
          <h4 class="ml-2 font-bold text-lg whitespace-nowrap">Backend Agnostic</h4>
        </div>
        <div class="items-center inline-flex">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            shape-rendering="geometricPrecision"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"> </path>
          </svg>
          <h4 class="ml-2 font-bold text-lg whitespace-nowrap">SSR / SSG Ready</h4>
        </div>
        <div class="items-center inline-flex">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            shape-rendering="geometricPrecision"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
            >
            </path>
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"> </path>
          </svg>
          <h4 class="ml-2 font-bold text-lg whitespace-nowrap">TypeScript Ready</h4>
        </div>
        <div class="items-center inline-flex">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            shape-rendering="geometricPrecision"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="2"> </circle>
            <path
              d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"
            >
            </path>
          </svg>
          <h4 class="ml-2 font-bold text-lg whitespace-nowrap">Remote + Local</h4>
        </div>
      </div>
    </div>
  </div> -->
  <BlogRoll {posts} />
  <p class="mt-6 leading-7 first:mt-0">
    The name “Pithagon” is derived from <code
      class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
      dir="ltr">stale-while-revalidate</code
    >, a HTTP cache invalidation strategy popularized by
    <a
      href="https://tools.ietf.org/html/rfc5861"
      target="_blank"
      rel="noreferrer"
      class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
      >HTTP RFC 5861<span class="sr-only select-none"> (opens in a new tab)</span>
    </a>. Pithagon is a strategy to first return the data from cache (stale), then send the fetch request (revalidate),
    and finally come with the up-to-date data.
  </p>
  <div
    class="nextra-callout overflow-x-auto mt-6 flex rounded-lg border py-2 ltr:pr-4 rtl:pl-4 contrast-more:border-current contrast-more:dark:border-current border-orange-100 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300"
  >
    <div
      class="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2"
      style="font-family:&quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;"
    >
      ✅
    </div>
    <div class="w-full min-w-0 leading-7">
      <p class="mt-6 leading-7 first:mt-0">
        With Pithagon, components will get a stream of data updates <strong>constantly</strong> and
        <strong>automatically</strong>.<br />
        And the UI will be always <strong>fast</strong> and <strong>reactive</strong>.
      </p>
    </div>
  </div>
  <div class="mt-16 mb-20 text-center">
    <p class="mt-6 leading-7 first:mt-0">
      <a class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]" href="/docs/"
        >Get Started</a
      >
      ·
      <a class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]" href="/"
        >Examples</a
      >
      ·
      <a class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]" href="/"
        >Blog</a
      >
      ·
      <a
        href="https://github.com/pithagon/pithagon.github.io"
        target="_blank"
        rel="noreferrer"
        class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
        >GitHub Repository<span class="sr-only select-none"> (opens in a new tab)</span>
      </a>
    </p>
  </div>
  <h2
    class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400"
  >
    Overview<a href="#overview" id="overview" class="subheading-anchor" aria-label="Permalink for this section"> </a>
  </h2>
  <div class="nextra-code-block relative mt-6 first:mt-0">
    <pre
      class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 py-4"
      data-language="jsx"
      data-theme="default">
    <!-- <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr" data-language="jsx" data-theme="default">
    <span class="line">
    <span style="color:var(--shiki-token-keyword)">import</span>
    <span style="color:var(--shiki-color-text)"> usePithagon </span>
    <span style="color:var(--shiki-token-keyword)">from</span>
    <span style="color:var(--shiki-color-text)"> </span>
    <span style="color:var(--shiki-token-string-expression)">'swr'</span>
  </span>
  <span class="line"> </span>
  <span class="line">
    <span style="color:var(--shiki-token-keyword)">function</span>
  <span style="color:var(--shiki-color-text)"> </span>
  <span style="color:var(--shiki-token-function)">Profile</span>
  <span style="color:var(--shiki-color-text)">() {</span>
  </span>
  <span class="line">
    <span style="color:var(--shiki-color-text)">  </span>
  <span style="color:var(--shiki-token-keyword)">const</span>
  <span style="color:var(--shiki-color-text)"> { </span>
    <span style="color:var(--shiki-token-constant)">data</span>
  <span style="color:var(--shiki-token-punctuation)">,</span>
  <span style="color:var(--shiki-color-text)"> </span>
  <span style="color:var(--shiki-token-constant)">error</span>
  <span style="color:var(--shiki-token-punctuation)">,</span>
  <span style="color:var(--shiki-color-text)"> </span>
  <span style="color:var(--shiki-token-constant)">isLoading</span>
  <span style="color:var(--shiki-color-text)"> } </span>
  <span style="color:var(--shiki-token-keyword)">=</span>
  <span style="color:var(--shiki-color-text)"> </span>
  <span style="color:var(--shiki-token-function)">usePithagon</span>
  <span style="color:var(--shiki-color-text)">(</span>
  <span style="color:var(--shiki-token-string-expression)">'/api/user'</span>
  <span style="color:var(--shiki-token-punctuation)">,</span>
  <span style="color:var(--shiki-color-text)"> fetcher)</span>
  </span>
  <span class="line"> </span>
  <span class="line">
    <span style="color:var(--shiki-color-text)">  </span>
  <span style="color:var(--shiki-token-keyword)">if</span>
  <span style="color:var(--shiki-color-text)"> (error) </span>
  <span style="color:var(--shiki-token-keyword)">return</span>
  <span style="color:var(--shiki-color-text)"> &lt;</span>
  <span style="color:var(--shiki-token-string-expression)">div</span>
  <span style="color:var(--shiki-color-text)">&gt;failed to load&lt;/</span>
  <span style="color:var(--shiki-token-string-expression)">div</span>
  <span style="color:var(--shiki-color-text)">&gt;</span>
  </span>
  <span class="line">
    <span style="color:var(--shiki-color-text)">  </span>
  <span style="color:var(--shiki-token-keyword)">if</span>
  <span style="color:var(--shiki-color-text)"> (isLoading) </span>
  <span style="color:var(--shiki-token-keyword)">return</span>
  <span style="color:var(--shiki-color-text)"> &lt;</span>
  <span style="color:var(--shiki-token-string-expression)">div</span>
  <span style="color:var(--shiki-color-text)">&gt;loading...&lt;/</span>
  <span style="color:var(--shiki-token-string-expression)">div</span>
  <span style="color:var(--shiki-color-text)">&gt;</span>
  </span>
  <span class="line">
    <span style="color:var(--shiki-color-text)">  </span>
  <span style="color:var(--shiki-token-keyword)">return</span>
  <span style="color:var(--shiki-color-text)"> &lt;</span>
  <span style="color:var(--shiki-token-string-expression)">div</span>
  <span style="color:var(--shiki-color-text)">&gt;hello {</span>
    <span style="color:var(--shiki-token-constant)">data</span>
  <span style="color:var(--shiki-color-text)">.name}!&lt;/</span>
  <span style="color:var(--shiki-token-string-expression)">div</span>
  <span style="color:var(--shiki-color-text)">&gt;</span>
  </span>
  <span class="line">
    <span style="color:var(--shiki-color-text)">}</span>
  </span>
  </code> -->
  </pre>
    <div
      class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-0"
    >
      <button
        class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden"
        title="Toggle word wrap"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
          <path
            fill="currentColor"
            d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
          >
          </path>
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
          >
          </rect>
          <path
            d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          </path>
        </svg>
      </button>
    </div>
  </div>
  <p class="mt-6 leading-7 first:mt-0">
    In this example, the <code
      class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
      dir="ltr">usePithagon</code
    >
    hook accepts a
    <code
      class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
      dir="ltr">key</code
    >
    string and a
    <code
      class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
      dir="ltr">fetcher</code
    >
    function.
    <code
      class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
      dir="ltr">key</code
    >
    is a unique identifier of the data (normally the API URL) and will be passed to
    <code
      class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
      dir="ltr">fetcher</code
    >.
    <code
      class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
      dir="ltr">fetcher</code
    > can be any asynchronous function which returns the data, you can use the native fetch or tools like Axios.
  </p>
  <p class="mt-6 leading-7 first:mt-0">
    The hook returns 3 values: <code
      class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
      dir="ltr">data</code
    >,
    <code
      class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
      dir="ltr">isLoading</code
    >
    and
    <code
      class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10"
      dir="ltr">error</code
    >, based on the status of the request.
  </p>
  <h2
    class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400"
  >
    Features<a href="#features" id="features" class="subheading-anchor" aria-label="Permalink for this section"> </a>
  </h2>
  <p class="mt-6 leading-7 first:mt-0">
    With just one single line of code, you can simplify the logic of data fetching in your project, and also have all
    these amazing features out-of-the-box:
  </p>
  <ul class="mt-6 list-disc first:mt-0 ltr:ml-6 rtl:mr-6">
    <li class="my-2">
      <strong>Fast</strong>, <strong>lightweight</strong> and <strong>reusable</strong> data fetching
    </li>
    <li class="my-2">Built-in <strong>cache</strong> and request deduplication</li>
    <li class="my-2">
      <strong>Real-time</strong> experience
    </li>
    <li class="my-2">Transport and protocol agnostic</li>
    <li class="my-2">SSR / ISR / SSG support</li>
    <li class="my-2">TypeScript ready</li>
    <li class="my-2">React Native</li>
  </ul>
  <p class="mt-6 leading-7 first:mt-0">
    Pithagon has you covered in all aspects of speed, correctness, and stability to help you build better experiences:
  </p>
  <ul class="mt-6 list-disc first:mt-0 ltr:ml-6 rtl:mr-6">
    <li class="my-2">Fast page navigation</li>
    <li class="my-2">Polling on interval</li>
    <li class="my-2">Data dependency</li>
    <li class="my-2">Revalidation on focus</li>
    <li class="my-2">Revalidation on network recovery</li>
    <li class="my-2">Local mutation (Optimistic UI)</li>
    <li class="my-2">Smart error retry</li>
    <li class="my-2">Pagination and scroll position recovery</li>
    <li class="my-2">React Suspense</li>
  </ul>
  <p class="mt-6 leading-7 first:mt-0">
    And a lot <a
      class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
      href="/docs/">more</a
    >.
  </p>
  <h2
    class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400"
  >
    Community<a href="#community" id="community" class="subheading-anchor" aria-label="Permalink for this section"> </a>
  </h2>
  <p class="flex h-6 mt-4 gap-2">
    <img alt="stars" src="https://badgen.net/github/stars/vercel/swr" />
    <img alt="downloads" src="https://badgen.net/npm/dt/swr" />
    <img alt="license" src="https://badgen.net/npm/license/swr" />
  </p>
  <p class="mt-6 leading-7 first:mt-0">
    Pithagon is created by the same team behind <a
      href="https://nextjs.org"
      target="_blank"
      rel="noreferrer"
      class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
      >Next.js<span class="sr-only select-none"> (opens in a new tab)</span>
    </a>, the React framework. Follow
    <a
      href="https://twitter.com/vercel"
      target="_blank"
      rel="noreferrer"
      class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
      >@vercel<span class="sr-only select-none"> (opens in a new tab)</span>
    </a> on Twitter for future project updates.
  </p>
  <p class="mt-6 leading-7 first:mt-0">
    Feel free to join the <a
      href="https://github.com/pithagon/pithagon.github.io/discussions"
      target="_blank"
      rel="noreferrer"
      class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
      >discussions on GitHub<span class="sr-only select-none"> (opens in a new tab)</span>
    </a>!
  </p>
</main>

<style lang="css">
</style>
