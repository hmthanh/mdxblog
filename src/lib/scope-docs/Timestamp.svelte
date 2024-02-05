<script lang="ts">
  export let date
</script>

{#if date}
  <div
    class="nx-mt-12 nx-mb-8 nx-block nx-text-xs nx-text-gray-500 ltr:nx-text-right rtl:nx-text-left dark:nx-text-gray-400"
  >
    {date}
    <!-- {renderComponent(config.gitTimestamp, { timestamp: date })} -->
  </div>
{:else}
  <div class="nx-mt-16" />
{/if}

<!-- const gitTimestampEl = // Because a user's time zone may be different from the server page mounted && date ? ( ) : ( ) -->
