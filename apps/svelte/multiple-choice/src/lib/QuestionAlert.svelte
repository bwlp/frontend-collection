<script lang="ts">
  import Close from "carbon-icons-svelte/lib/Close.svelte";
  import Redo from "carbon-icons-svelte/lib/Redo.svelte";
  export let numberOfQuestions: number;
  export let question: string;
</script>

{#if question}
  <div class="alert" role="alert">
    <span>
      {`Jump to Question ${question}/${numberOfQuestions}`}
    </span>
    <div class="ml-6 inline-flex flex-col items-center text-xs scale-90">
      <Close />
      Del/Esc
      <div class="rotate-180 mt-2">
        <Redo className="-rotate-180" />
      </div>
      Enter
    </div>
  </div>
{/if}
