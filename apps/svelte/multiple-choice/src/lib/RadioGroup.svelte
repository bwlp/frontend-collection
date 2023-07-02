<script lang="ts">
  import RadioGroupToggle from "./RadioGroupToggle.svelte";
  import { fieldsetBindings } from "./stores";
  export let questionIndex: number;
  export let numberOfOptions: number;

  let questionNumber = questionIndex + 1;
  let isFocused = false;
  let isLocked = false;
  let isMarked = false;
  const letters = "ABCDEFGHIJ";
  let options = "";
  $: questionNumber = questionIndex + 1;
  $: options = letters.slice(0, numberOfOptions);
  const radios = [];

  let value: string = "A";

  function handleKeyPress(e: KeyboardEvent) {
    const key = e.key.toUpperCase();

    if (options.includes(key) && !isLocked) {
      value = key;
      radios[options.indexOf(key)].focus();
    }
    if (key === "L" && isFocused) {
      isLocked = !isLocked;
      fieldsetBindings[questionIndex].focus();
    }
    if (key === "M" && isFocused) {
      isMarked = !isMarked;
    }
  }

  function handleChange(e) {
    // TODO: output result
  }
  function handleToggleLocked(event) {
    isLocked = event.detail;
  }
  function handleToggleMarked(event) {
    isMarked = event.detail;
  }
</script>

<fieldset
  tabindex="0"
  class="fieldset"
  class:isFocused
  class:isLocked
  id="question{questionNumber}"
  on:keypress={handleKeyPress}
  on:change={handleChange}
  on:focus|capture={() => (isFocused = true)}
  on:blur|capture={() => (isFocused = false)}
  bind:this={fieldsetBindings[questionIndex]}
  data-testid="radio_group"
>
  <div class="flex justify-between mb-1">
    <legend class="fieldset-legend">Question {questionNumber}</legend>
    <RadioGroupToggle
      {isMarked}
      {isLocked}
      on:toggle-locked={handleToggleLocked}
      on:toggle-marked={handleToggleMarked}
    />
  </div>

  <div class="flex flex-wrap gap-y-4 gap-x-10">
    {#each options as option, index (option)}
      <label class="cursor-pointer flex items-center gap-x-3">
        <input
          bind:this={radios[index]}
          class="radio"
          class:checkedLocked={isLocked && option === value}
          checked={option === value}
          disabled={isLocked}
          id="question{questionNumber}_{option}"
          name="question{questionNumber}"
          type="radio"
          on:change={(event) => {
            value = event.currentTarget.value;
          }}
          value={option}
        />
        {option}
      </label>
    {/each}
  </div>
</fieldset>
