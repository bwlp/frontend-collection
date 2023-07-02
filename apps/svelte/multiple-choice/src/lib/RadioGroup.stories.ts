import type { Meta, StoryObj } from "@storybook/svelte";
import "../app.css";
import RadioGroup from "./RadioGroup.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<RadioGroup>;

export default meta;
type TStory = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Primary: TStory = {
  render: (args) => ({
    Component: RadioGroup,
    props: args,
  }),
  args: {
    numberOfOptions: 4,
    questionIndex: 1,
  },
};
