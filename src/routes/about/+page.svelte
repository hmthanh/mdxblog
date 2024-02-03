<script>
  import Card from "$lib/components/Card.svelte"
  import EmailIcon from "$lib/core/Icons/Email.svelte"
  import ExternalLink from "$lib/components/ExternalLink.svelte"
  import FacebookIcon from "$lib/core/Icons/Facebook.svelte"
  import WireIcon from "$lib/core/Icons/Wire.svelte"
  import TelegramIcon from "$lib/core/Icons/Telegram.svelte"
  import TwitterIcon from "$lib/core/Icons/Twitter.svelte"
  import website from "$lib/config/website"
  const { contactEmail, facebookPageName, telegramUsername, twitterUserId, twitterUsername, wireUsername } = website
  import SEO from "$lib/components/SEO/index.svelte"

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
   <aside class="nextra-sidebar-container flex flex-col md:top-16 md:shrink-0 motion-reduce:transform-none transform-gpu transition-all ease-in-out print:hidden md:w-64 md:sticky md:self-start max-md:[transform:translate3d(0,-100%,0)]">
      <div class="px-4 pt-4 md:hidden">
         <div class="nextra-search relative md:w-64">
            <div class="relative flex items-center text-gray-900 contrast-more:text-gray-800 dark:text-gray-300 contrast-more:dark:text-gray-300">
               <input spellcheck="false" class="block w-full appearance-none rounded-lg px-3 py-2 transition-colors text-base leading-tight md:text-sm bg-black/[.05] dark:bg-gray-50/10 focus:bg-white dark:focus:bg-dark placeholder:text-gray-500 dark:placeholder:text-gray-400 contrast-more:border contrast-more:border-current" type="search" placeholder="Search documentation…" value="">
               <kbd class="absolute my-1.5 select-none ltr:right-1.5 rtl:left-1.5 h-5 rounded bg-white px-1.5 font-mono text-[10px] font-medium text-gray-500 border dark:border-gray-100/20 dark:bg-dark/50 contrast-more:border-current contrast-more:text-current contrast-more:dark:border-current items-center gap-1 pointer-events-none hidden sm:flex opacity-0">CTRL K</kbd>
            </div>
         </div>
      </div>
      <div class="overflow-y-auto overflow-x-hidden p-4 grow md:h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))] nextra-scrollbar">
         <div class="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none">
            <div class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-100">
               <ul class="flex flex-col gap-1 nextra-menu-desktop max-md:hidden">
                  <li class="flex flex-col gap-1">
                     <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs">Introduction</a>
                  </li>
                  <li class="">
                     <a class="items-center justify-between gap-2 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">
                        Guide
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="origin-center transition-transform rtl:-rotate-180"></path>
                        </svg>
                     </a>
                     <div class="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none" style="height: 0px;">
                        <div class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-0 ltr:pr-0 rtl:pl-0 pt-1">
                           <ul class="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-['] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3">
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Organize Files</a>
                              </li>
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Markdown</a>
                              </li>
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Syntax Highlighting</a>
                              </li>
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Next.js Link</a>
                              </li>
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Next.js Image</a>
                              </li>
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Next.js SSG</a>
                              </li>
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Next.js I18n</a>
                              </li>
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Custom CSS</a>
                              </li>
                              <li class="">
                                 <a class="items-center justify-between gap-2 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">
                                    Advanced
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="origin-center transition-transform rtl:-rotate-180"></path>
                                    </svg>
                                 </a>
                                 <div class="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none" style="height: 0px;">
                                    <div class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-0 ltr:pr-0 rtl:pl-0 pt-1">
                                       <ul class="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-['] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3">
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Npm2Yarn</a>
                                          </li>
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Mermaid</a>
                                          </li>
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Tailwind CSS</a>
                                          </li>
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">LaTeX</a>
                                          </li>
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Rendering Tables</a>
                                          </li>
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">TypeScript</a>
                                          </li>
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Remote Content</a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </li>
                              <li class="">
                                 <a class="items-center justify-between gap-2 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">
                                    Built-ins
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="origin-center transition-transform rtl:-rotate-180"></path>
                                    </svg>
                                 </a>
                                 <div class="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none" style="height: 0px;">
                                    <div class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-0 ltr:pr-0 rtl:pl-0 pt-1">
                                       <ul class="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-['] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3">
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Callout</a>
                                          </li>
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Tabs</a>
                                          </li>
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Cards</a>
                                          </li>
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Steps</a>
                                          </li>
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">FileTree</a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li class="[word-break:break-word] mt-5 mb-2 px-2 py-1.5 text-sm font-semibold text-gray-900 first:mt-0 dark:text-gray-100">
                     <span class="cursor-default">Themes</span>
                  </li>
                  <li class="open">
                     <a class="items-center justify-between gap-2 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">
                        Docs Theme
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="origin-center transition-transform rtl:-rotate-180 ltr:rotate-90 rtl:rotate-[-270deg]"></path>
                        </svg>
                     </a>
                     <div class="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none duration-300">
                        <div class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-100 ltr:pr-0 rtl:pl-0 pt-1">
                           <ul class="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-['] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3">
                              <li class="flex flex-col gap-1 active">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border bg-primary-100 font-semibold text-primary-800 dark:bg-primary-400/10 dark:text-primary-600 contrast-more:border-primary-500 contrast-more:dark:border-primary-500" href="/docs/">Get Started</a>
                              </li>
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Page Configuration</a>
                              </li>
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Theme Configuration</a>
                              </li>
                              <li class="">
                                 <a class="items-center justify-between gap-2 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">
                                    Built-ins
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="origin-center transition-transform rtl:-rotate-180"></path>
                                    </svg>
                                 </a>
                                 <div class="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none" style="height: 0px;">
                                    <div class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-0 ltr:pr-0 rtl:pl-0 pt-1">
                                       <ul class="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-['] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3">
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Bleed</a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </li>
                              <li class="">
                                 <button class="items-center justify-between gap-2 text-left w-full flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50">
                                    API
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="origin-center transition-transform rtl:-rotate-180"></path>
                                    </svg>
                                 </button>
                                 <div class="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none" style="height: 0px;">
                                    <div class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-0 ltr:pr-0 rtl:pl-0 pt-1">
                                       <ul class="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-['] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3">
                                          <li class="flex flex-col gap-1">
                                             <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">useConfig</a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li class="">
                     <a class="items-center justify-between gap-2 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">
                        Blog Theme
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-[18px] min-w-[18px] rounded-sm p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="origin-center transition-transform rtl:-rotate-180"></path>
                        </svg>
                     </a>
                     <div class="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none" style="height: 0px;">
                        <div class="transition-opacity duration-500 ease-in-out motion-reduce:transition-none opacity-0 ltr:pr-0 rtl:pl-0 pt-1">
                           <ul class="flex flex-col gap-1 relative before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-['] dark:before:bg-neutral-800 ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3">
                              <li class="flex flex-col gap-1">
                                 <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Get Started</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li class="flex flex-col gap-1">
                     <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/docs/">Custom Theme</a>
                  </li>
                  <li class="[word-break:break-word] mt-5 mb-2 px-2 py-1.5 text-sm font-semibold text-gray-900 first:mt-0 dark:text-gray-100">
                     <span class="cursor-default">More</span>
                  </li>
                  <li class="flex flex-col gap-1">
                     <a class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50" href="/about">About Nextra</a>
                  </li>
                  <li class="flex flex-col gap-1">
                     <a href="https://nextjs.org?utm_source=nextra.site&amp;utm_medium=referral&amp;utm_campaign=sidebar" target="_blank" rel="noreferrer" class="flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50">Next.js Docs ↗<span class="sr-only select-none"> (opens in a new tab)</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div class="sticky bottom-0 bg-white dark:bg-dark mx-4 py-4 shadow-[0_-12px_16px_#fff] flex items-center gap-2 dark:border-neutral-800 dark:shadow-[0_-12px_16px_#111] contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:shadow-none border-t" data-toggle-animation="off">
         <div class="grow flex flex-col">
            <button title="Change theme" class="h-7 rounded-md px-2 text-left text-xs font-medium text-gray-600 transition-colors dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50" id="headlessui-listbox-button-:Rlsr6:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
               <div class="flex items-center gap-2 capitalize">
                  <svg fill="none" viewBox="3 3 18 18" width="12" height="12" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="currentColor" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  <span class="">System</span>
               </div>
            </button>
         </div>
         <button title="Hide sidebar" class="max-md:hidden h-7 rounded-md transition-colors text-gray-600 dark:text-gray-400 px-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50">
            <svg height="12" width="12" viewBox="0 0 16 16" fill="currentColor">
               <path fill-rule="evenodd" d="M4.177 7.823l2.396-2.396A.25.25 0 017 5.604v4.792a.25.25 0 01-.427.177L4.177 8.177a.25.25 0 010-.354z" class=""></path>
               <path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25H9.5v-13H1.75zm12.5 13H11v-13h3.25a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25z"></path>
            </svg>
         </button>
      </div>
   </aside>
   <nav class="nextra-toc order-last hidden w-64 shrink-0 xl:block print:hidden px-4" aria-label="table of contents">
      <div class="nextra-scrollbar sticky top-16 overflow-y-auto pr-4 pt-6 text-sm [hyphens:auto] max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:-mr-4 rtl:-ml-4">
         <p class="mb-4 font-semibold tracking-tight">On This Page</p>
         <ul>
            <li class="my-2 scroll-my-6 scroll-py-6">
               <a href="#quick-start-from-template" class="font-semibold inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Quick Start from Template</a>
            </li>
            <li class="my-2 scroll-my-6 scroll-py-6">
               <a href="#deploy-to-vercel" class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Deploy to Vercel</a>
            </li>
            <li class="my-2 scroll-my-6 scroll-py-6">
               <a href="#fork-the-template" class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Fork the Template</a>
            </li>
            <li class="my-2 scroll-my-6 scroll-py-6">
               <a href="#start-as-new-project" class="font-semibold inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Start as New Project</a>
            </li>
            <li class="my-2 scroll-my-6 scroll-py-6">
               <a href="#install" class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Install</a>
            </li>
            <li class="my-2 scroll-my-6 scroll-py-6">
               <a href="#add-nextjs-config" class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Add Next.js Config</a>
            </li>
            <li class="my-2 scroll-my-6 scroll-py-6">
               <a href="#create-docs-theme-config" class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Create Docs Theme Config</a>
            </li>
            <li class="my-2 scroll-my-6 scroll-py-6">
               <a href="#ready-to-go" class="ltr:pl-4 rtl:pr-4 inline-block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words">Ready to Go!</a>
            </li>
         </ul>
         <div class="mt-8 border-t bg-white pt-8 shadow-[0_-12px_16px_white] dark:bg-dark dark:shadow-[0_-12px_16px_#111] sticky bottom-0 flex flex-col items-start gap-2 pb-8 dark:border-neutral-800 contrast-more:border-t contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:border-neutral-400">
            <a href="https://github.com/shuding/nextra/issues/new?title=Feedback%20for%20%E2%80%9CDocs%20Theme%E2%80%9D&amp;labels=feedback" target="_blank" rel="noreferrer" class="text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50">Question? Give us feedback →<span class="sr-only select-none"> (opens in a new tab)</span>
            </a>
            <a class="text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50" href="https://github.com/shuding/nextra/tree/main/docs/pages/docs/docs-theme/start.mdx">Edit this page on GitHub →</a>
            <button aria-hidden="true" class="flex items-center gap-1.5 transition text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 contrast-more:text-gray-800 contrast-more:dark:text-gray-50 opacity-0">
               Scroll to top
               <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="-rotate-90 w-3.5 h-3.5 border rounded-full border-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
               </svg>
            </button>
         </div>
      </div>
   </nav>
   <div id="reach-skip-nav"></div>
   <article class="w-full break-words nextra-content flex min-h-[calc(100vh-var(--nextra-navbar-height))] min-w-0 justify-center pb-8 pr-[calc(env(safe-area-inset-right)-1.5rem)]">
      <main class="w-full min-w-0 max-w-6xl px-6 pt-4 md:px-12">
         <div class="nextra-breadcrumb mt-1.5 flex items-center gap-1 overflow-hidden text-sm text-gray-500 dark:text-gray-400 contrast-more:text-current">
            <div class="whitespace-nowrap transition-colors min-w-[24px] overflow-hidden text-ellipsis" title="Documentation">Documentation</div>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3.5 shrink-0">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <div class="whitespace-nowrap transition-colors min-w-[24px] overflow-hidden text-ellipsis hover:text-gray-900 dark:hover:text-gray-100" title="Docs Theme">
               <a href="/docs/">Docs Theme</a>
            </div>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3.5 shrink-0">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <div class="whitespace-nowrap transition-colors font-medium text-gray-700 contrast-more:font-bold contrast-more:text-current dark:text-gray-100 contrast-more:dark:text-current" title="Get Started">Get Started</div>
         </div>
         <h1 class="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Docs Theme</h1>
         <p class="mt-6 leading-7 first:mt-0">Nextra Docs Theme is a theme that includes almost everything you need to build a
            modern documentation website. It includes a top navigation bar, a search bar, a
            pages sidebar, a TOC sidebar, and other built-in components.
         </p>
         <p class="mt-6 leading-7 first:mt-0">This website itself is built with the Nextra Docs Theme.</p>
         <h2 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">Quick Start from Template<a href="#quick-start-from-template" id="quick-start-from-template" class="subheading-anchor" aria-label="Permalink for this section">
            </a>
         </h2>
         <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">Deploy to Vercel<a href="#deploy-to-vercel" id="deploy-to-vercel" class="subheading-anchor" aria-label="Permalink for this section">
            </a>
         </h3>
         <p class="mt-6 leading-7 first:mt-0">You can start by creating your own Nextra site and deploying to Vercel by
            clicking the link:
         </p>
         <a class="mt-3 inline-flex" target="_blank" href="https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fshuding%2Fnextra-docs-template&amp;showOptionalTeamCreation=false">
            <p class="mt-6 leading-7 first:mt-0">
               <img src="https://vercel.com/button" alt="">
            </p>
         </a>
         <p class="mt-6 leading-7 first:mt-0">Vercel will fork the
            <a href="https://github.com/shuding/nextra-docs-template" target="_blank" rel="noreferrer" class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]">Nextra Docs template<span class="sr-only select-none"> (opens in a new tab)</span>
            </a> and
            deploy the site for you. Once done, every commit in the repository will be
            deployed automatically.
         </p>
         <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">Fork the Template<a href="#fork-the-template" id="fork-the-template" class="subheading-anchor" aria-label="Permalink for this section">
            </a>
         </h3>
         <p class="mt-6 leading-7 first:mt-0">You can also manually fork the
            <a href="https://github.com/shuding/nextra-docs-template" target="_blank" rel="noreferrer" class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]">template repository<span class="sr-only select-none"> (opens in a new tab)</span>
            </a>.
         </p>
         <h2 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">Start as New Project<a href="#start-as-new-project" id="start-as-new-project" class="subheading-anchor" aria-label="Permalink for this section">
            </a>
         </h2>
         <div class="nextra-steps ml-4 mb-12 border-l border-gray-200 pl-6 dark:border-neutral-800 [counter-reset:step]">
            <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">Install<a href="#install" id="install" class="subheading-anchor" aria-label="Permalink for this section">
               </a>
            </h3>
            <p class="mt-6 leading-7 first:mt-0">To create a Nextra Docs site manually, you have to install <strong>Next.js</strong>,
               <strong>React</strong>, <strong>Nextra</strong>, and <strong>Nextra Docs Theme</strong>. In your project directory, run
               the following command to install the dependencies:
            </p>
            <div class="nextra-scrollbar overflow-x-auto overflow-y-hidden overscroll-x-contain">
               <div class="mt-4 flex w-max min-w-full border-b border-gray-200 pb-px dark:border-neutral-800" role="tablist" aria-orientation="horizontal">
                  <button class="mr-2 rounded-t p-2 font-medium leading-5 transition-colors -mb-0.5 select-none border-b-2 border-primary-500 text-primary-600" id="headlessui-tabs-tab-:r0:" role="tab" type="button" aria-selected="true" tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:r4:">npm</button>
                  <button class="mr-2 rounded-t p-2 font-medium leading-5 transition-colors -mb-0.5 select-none border-b-2 border-transparent text-gray-600 hover:border-gray-200 hover:text-black dark:text-gray-200 dark:hover:border-neutral-800 dark:hover:text-white" id="headlessui-tabs-tab-:r1:" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r5:">pnpm</button>
                  <button class="mr-2 rounded-t p-2 font-medium leading-5 transition-colors -mb-0.5 select-none border-b-2 border-transparent text-gray-600 hover:border-gray-200 hover:text-black dark:text-gray-200 dark:hover:border-neutral-800 dark:hover:text-white" id="headlessui-tabs-tab-:r2:" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r6:">yarn</button>
                  <button class="mr-2 rounded-t p-2 font-medium leading-5 transition-colors -mb-0.5 select-none border-b-2 border-transparent text-gray-600 hover:border-gray-200 hover:text-black dark:text-gray-200 dark:hover:border-neutral-800 dark:hover:text-white" id="headlessui-tabs-tab-:r3:" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r7:">bun</button>
               </div>
            </div>
            <div>
               <div class="rounded pt-6" id="headlessui-tabs-panel-:r4:" role="tabpanel" tabindex="0" data-headlessui-state="selected" aria-labelledby="headlessui-tabs-tab-:r0:">
                  <div class="nextra-code-block relative mt-6 first:mt-0">
                     <pre class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 py-4" data-language="sh" data-theme="default">

</pre>
                     <div class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-0">
                        <button class="nextra-button transition-all active  :opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden" title="Toggle word wrap">
                           <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
                              <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path>
                           </svg>
                        </button>
                        <button class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50" title="Copy code" tabindex="0">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="nextra-copy-icon pointer-events-none h-4 w-4">
                              <rect x="9" y="9" width="13" height="13" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                              <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>
               <span id="headlessui-tabs-panel-:r5:" role="tabpanel" tabindex="-1" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;" aria-labelledby="headlessui-tabs-tab-:r1:">
               </span>
               <span id="headlessui-tabs-panel-:r6:" role="tabpanel" tabindex="-1" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;" aria-labelledby="headlessui-tabs-tab-:r2:">
               </span>
               <span id="headlessui-tabs-panel-:r7:" role="tabpanel" tabindex="-1" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;" aria-labelledby="headlessui-tabs-tab-:r3:">
               </span>
            </div>
            <div class="nextra-callout overflow-x-auto mt-6 flex rounded-lg border py-2 ltr:pr-4 rtl:pl-4 contrast-more:border-current contrast-more:dark:border-current border-orange-100 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300">
               <div class="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2" style="font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';">💡</div>
               <div class="w-full min-w-0 leading-7">
                  <p class="mt-6 leading-7 first:mt-0">If you already have Next.js installed in your project, you only need to
                     install <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">nextra</code> and <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">nextra-theme-docs</code> as the add-ons.
                  </p>
               </div>
            </div>
            <p class="mt-6 leading-7 first:mt-0">Add the following scripts in <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">package.json</code>:</p>
            <div class="nextra-code-block relative mt-6 first:mt-0">
               <div class="absolute top-0 z-[1] w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200">package.json</div>
               <pre class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 pt-12 pb-4" data-language="json" data-theme="default">

</pre>
               <div class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-8">
                  <button class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden" title="Toggle word wrap">
                     <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
                        <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path>
                     </svg>
                  </button>
                  <button class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50" title="Copy code" tabindex="0">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="nextra-copy-icon pointer-events-none h-4 w-4">
                        <rect x="9" y="9" width="13" height="13" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                  </button>
               </div>
            </div>
            <p class="mt-6 leading-7 first:mt-0">You can either start the server with, for example if you use npm, <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">npm run dev</code>,
               which will run in development mode or <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">npm run build &amp;&amp; npm run start</code> for
               production mode.
            </p>
            <div class="nextra-callout overflow-x-auto mt-6 flex rounded-lg border py-2 ltr:pr-4 rtl:pl-4 contrast-more:border-current contrast-more:dark:border-current border-orange-100 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300">
               <div class="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2" style="font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';">💡</div>
               <div class="w-full min-w-0 leading-7">
                  <p class="mt-6 leading-7 first:mt-0">If you're not familiar with Next.js, note that development mode is
                     significantly slower since Next.js compiles every page you navigate to.
                  </p>
               </div>
            </div>
            <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">Add Next.js Config<a href="#add-nextjs-config" id="add-nextjs-config" class="subheading-anchor" aria-label="Permalink for this section">
               </a>
            </h3>
            <p class="mt-6 leading-7 first:mt-0">Create the following <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">next.config.js</code> file in your project’s root directory:</p>
            <div class="nextra-code-block relative mt-6 first:mt-0">
               <div class="absolute top-0 z-[1] w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200">next.config.js</div>
               <pre class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 pt-12 pb-4" data-language="js" data-theme="default">

</pre>
               <div class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-8">
                  <button class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden" title="Toggle word wrap">
                     <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
                        <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path>
                     </svg>
                  </button>
                  <button class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50" title="Copy code" tabindex="0">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="nextra-copy-icon pointer-events-none h-4 w-4">
                        <rect x="9" y="9" width="13" height="13" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                  </button>
               </div>
            </div>
            <p class="mt-6 leading-7 first:mt-0">With the above configuration, Nextra can handle Markdown files in your Next.js
               project, with the specified theme. Other Nextra configurations can be found in
               <a class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]" href="/docs/">Guide</a>.
            </p>
            <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">Create Docs Theme Config<a href="#create-docs-theme-config" id="create-docs-theme-config" class="subheading-anchor" aria-label="Permalink for this section">
               </a>
            </h3>
            <p class="mt-6 leading-7 first:mt-0">Lastly, create the corresponding <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">theme.config.jsx</code> file in your project’s root
               directory. This will be used to configure the Nextra Docs theme:
            </p>
            <div class="nextra-code-block relative mt-6 first:mt-0">
               <div class="absolute top-0 z-[1] w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200">theme.config.jsx</div>
               <pre class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 pt-12 pb-4" data-language="jsx" data-theme="default">

</pre>
               <div class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-8">
                  <button class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden" title="Toggle word wrap">
                     <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
                        <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path>
                     </svg>
                  </button>
                  <button class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50" title="Copy code" tabindex="0">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="nextra-copy-icon pointer-events-none h-4 w-4">
                        <rect x="9" y="9" width="13" height="13" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                  </button>
               </div>
            </div>
            <p class="mt-6 leading-7 first:mt-0">Full theme configurations can be found
               <a class="text-primary-600 underline decoration-from-font [text-underline-position:from-font]" href="/docs/">here</a>.
            </p>
            <h3 class="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">Ready to Go!<a href="#ready-to-go" id="ready-to-go" class="subheading-anchor" aria-label="Permalink for this section">
               </a>
            </h3>
            <p class="mt-6 leading-7 first:mt-0">Now, you can create your first MDX page as <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">pages/index.mdx</code>:</p>
            <div class="nextra-code-block relative mt-6 first:mt-0">
               <div class="absolute top-0 z-[1] w-full truncate rounded-t-xl bg-primary-700/5 py-2 px-4 text-xs text-gray-700 dark:bg-primary-300/10 dark:text-gray-200">pages/index.mdx</div>
               <pre class="bg-primary-700/5 mb-4 overflow-x-auto rounded-xl subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 pt-12 pb-4" data-language="mdx" data-theme="default">

</pre>
               <div class="opacity-0 transition [div:hover>&amp;]:opacity-100 focus-within:opacity-100 flex gap-1 absolute m-[11px] right-0 top-8">
                  <button class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50 md:hidden" title="Toggle word wrap">
                     <svg viewBox="0 0 24 24" width="24" height="24" class="pointer-events-none h-4 w-4">
                        <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path>
                     </svg>
                  </button>
                  <button class="nextra-button transition-all active:opacity-50 bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5 dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50" title="Copy code" tabindex="0">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="nextra-copy-icon pointer-events-none h-4 w-4">
                        <rect x="9" y="9" width="13" height="13" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                  </button>
               </div>
            </div>
            <p class="mt-6 leading-7 first:mt-0">And run the <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">next</code> or <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">next dev</code> command specified in <code class="border-black border-opacity-[0.04] bg-opacity-[0.03] bg-black break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10" dir="ltr">package.json</code>to start
               developing the project! 🎉
            </p>
         </div>
         <p class="mt-6 leading-7 first:mt-0">Next, check out the next section to learn about organizing the documentation
            structure and configuring the website theme:
         </p>
         <div class="nextra-cards mt-4 gap-4 grid not-prose" style="--rows: 3;">
            <a class="nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 text-current no-underline dark:shadow-none hover:shadow-gray-100 dark:hover:shadow-none shadow-gray-100 active:shadow-sm active:shadow-gray-200 transition-all duration-200 hover:border-gray-300 bg-transparent shadow-sm dark:border-neutral-800 hover:bg-slate-50 hover:shadow-md dark:hover:border-neutral-700 dark:hover:bg-neutral-900" href="/docs/">
               <span class="flex font-semibold items-start gap-2 p-4 text-gray-700 hover:text-gray-900 dark:text-neutral-200 dark:hover:text-neutral-50 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75z"></path>
                  </svg>
                  Page Structure
               </span>
            </a>
            <a class="nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 text-current no-underline dark:shadow-none hover:shadow-gray-100 dark:hover:shadow-none shadow-gray-100 active:shadow-sm active:shadow-gray-200 transition-all duration-200 hover:border-gray-300 bg-transparent shadow-sm dark:border-neutral-800 hover:bg-slate-50 hover:shadow-md dark:hover:border-neutral-700 dark:hover:bg-neutral-900" href="/docs/">
               <span class="flex font-semibold items-start gap-2 p-4 text-gray-700 hover:text-gray-900 dark:text-neutral-200 dark:hover:text-neutral-50 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"></path>
                  </svg>
                  Theme Configuration
               </span>
            </a>
            <a class="nextra-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 text-current no-underline dark:shadow-none hover:shadow-gray-100 dark:hover:shadow-none shadow-gray-100 active:shadow-sm active:shadow-gray-200 transition-all duration-200 hover:border-gray-300 bg-transparent shadow-sm dark:border-neutral-800 hover:bg-slate-50 hover:shadow-md dark:hover:border-neutral-700 dark:hover:bg-neutral-900" href="/docs/">
               <span class="flex font-semibold items-start gap-2 p-4 text-gray-700 hover:text-gray-900 dark:text-neutral-200 dark:hover:text-neutral-50 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path>
                  </svg>
                  Built-in Components
               </span>
            </a>
         </div>
         <div class="mt-12 mb-8 block text-xs text-gray-500 ltr:text-right rtl:text-left dark:text-gray-400">Last updated on <time datetime="2023-10-25T14:01:42.000Z">October 25, 2023</time></div>
         <div class="mb-8 flex items-center border-t pt-8 dark:border-neutral-800 contrast-more:border-neutral-400 dark:contrast-more:border-neutral-400 print:hidden">
            <a title="Docs Theme" class="flex max-w-[50%] items-center gap-1 py-4 text-base font-medium text-gray-600 transition-colors [word-break:break-word] hover:text-primary-600 dark:text-gray-300 md:text-lg ltr:pr-4 rtl:pl-4" href="/docs/">
               <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="inline h-5 shrink-0 ltr:rotate-180">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
               </svg>
               Docs Theme
            </a>
            <a title="Page Configuration" class="flex max-w-[50%] items-center gap-1 py-4 text-base font-medium text-gray-600 transition-colors [word-break:break-word] hover:text-primary-600 dark:text-gray-300 md:text-lg ltr:ml-auto ltr:pl-4 ltr:text-right rtl:mr-auto rtl:pr-4 rtl:text-left" href="/docs/">
               Page Configuration
               <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="inline h-5 shrink-0 rtl:rotate-180">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
               </svg>
            </a>
         </div>
      </main>
   </article>
</div>

<style lang="css"></style>
