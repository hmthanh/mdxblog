<script lang="ts">
  // export let date
  export let timestamp = new Date()
  export let locale = ""
</script>

{#if timestamp}
  <div
    class="mt-12 mb-8 block text-xs text-gray-500 ltr:text-right rtl:text-left dark:text-gray-400"
  >
    Last updated on{" "}
    <time dateTime={timestamp.toISOString()}>
      <!-- {timestamp.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })} -->
      October 25, 2023
    </time>
    <!-- {renderComponent(config.gitTimestamp, { timestamp: date })} -->
  </div>
{:else}
  <div class="mt-16" />
{/if}

<!-- const gitTimestampEl = // Because a user's time zone may be different from the server page mounted && date ? ( ) : ( ) -->
