<script>
  import Card from "$lib/components/Card.svelte"
  import EmailIcon from "$lib/core/Icons/Email.svelte"
  import ExternalLink from "$lib/components/ExternalLink.svelte"
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
<h1>Contact me</h1>
<p>I would love to hear from you. Please get in touch!</p>


<style lang="css">
</style>
