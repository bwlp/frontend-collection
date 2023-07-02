<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let numberOfQuestions: number;
  export let numberOfOptions: number;

  const dispatch = createEventDispatcher();

  function handleChangeQuestions(e) {
    dispatch("change-questions", parseInt(e.target.value || "0") || 40);
  }

  function handleChangeOptions(e) {
    dispatch("change-options", parseInt(e.target.value || "0") || 4);
  }
</script>

<div
  class="top-0 sticky flex gap-3 py-3 px-3 bg-gray-900 text-white font-bold outline-none box-border w-full shadow-lg"
>
  <div
    class="text-sm flex bg-gray-700 border-b-2 border-solid border-transparent focus-within:border-b-blue-500 rounded-sm w-1/5"
  >
    <label
      class="outline-none bg-gray-700 w-3/5 py-1 px-3 select-none"
      for="numberOfQuestionsInput"
    >
      Questions
    </label>
    <input
      class="outline-none bg-gray-700 py-1 px-3 text-right w-2/5"
      id="numberOfQuestionsInput"
      placeholder="40"
      on:change={handleChangeQuestions}
      type="number"
      value={numberOfQuestions}
    />
  </div>

  <div
    class="text-sm flex bg-gray-700 border-b-2 border-solid border-transparent focus-within:border-b-blue-500 rounded-sm w-1/5"
  >
    <label
      class="outline-none bg-gray-700 w-3/5 py-1 px-3 select-none"
      for="numberOfOptionsInput"
    >
      Options
    </label>
    <input
      class="outline-none bg-gray-700 py-1 px-3 text-right w-2/5"
      id="numberOfOptionsInput"
      placeholder="4"
      on:change={handleChangeOptions}
      type="number"
      value={numberOfOptions}
    />
  </div>
</div>
