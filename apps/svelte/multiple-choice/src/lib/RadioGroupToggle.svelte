<script lang="ts">
  import Flag from "carbon-icons-svelte/lib/Flag.svelte";
  import FlagFilled from "carbon-icons-svelte/lib/FlagFilled.svelte";
  import Locked from "carbon-icons-svelte/lib/Locked.svelte";
  import Unlocked from "carbon-icons-svelte/lib/Unlocked.svelte";
  import { createEventDispatcher } from "svelte";
  export let isLocked;
  export let isMarked;

  const dispatch = createEventDispatcher();

  function handleToggleLocked() {
    dispatch("toggle-locked", !isLocked);
  }

  function handleToggleMarked() {
    dispatch("toggle-marked", !isMarked);
  }
</script>

<div class="flex gap-1">
  <button
    tabindex="-1"
    class="icon-button"
    class:isLocked
    on:click={handleToggleLocked}
    data-testid={isLocked ? "locked" : "unlocked"}
  >
    {#if isLocked}
      <Locked />
    {:else}
      <Unlocked />
    {/if}
  </button>
  <button
    tabindex="-1"
    class="icon-button"
    class:isMarked
    on:click={handleToggleMarked}
    data-testid={isMarked ? "marked" : "unmarked"}
  >
    {#if isMarked}
      <FlagFilled />
    {:else}
      <Flag />
    {/if}
  </button>
</div>

<style lang="postcss">
  @tailwind components;

  @layer components {
    .icon-button {
      all: unset;
      @apply cursor-pointer h-5 w-5 flex items-center justify-center outline-none border border-solid border-transparent focus-visible:border-blue-300 rounded-md;
    }
    .isLocked {
      @apply text-green-500;
    }
    .isMarked {
      @apply text-red-500;
    }
  }
</style>
