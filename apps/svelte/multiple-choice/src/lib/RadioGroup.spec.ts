import { fireEvent, render, screen, waitFor } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import RadioGroup from "./RadioGroup.svelte";

describe("RadioGroup", () => {
  it("should render number of options based on props", async () => {
    render(RadioGroup, { props: { questionIndex: 0, numberOfOptions: 5 } });

    expect(screen.getByText("Question 1")).toBeVisible();
    expect(screen.getAllByRole("radio")).toHaveLength(5);
  });

  it("should allow user to select option by pressing letter", async () => {
    render(RadioGroup, { props: { questionIndex: 0, numberOfOptions: 3 } });

    expect(screen.getByLabelText("A")).toBeChecked();

    await fireEvent.keyPress(screen.getByTestId("radio_group"), { key: "c" });
    await waitFor(() => expect(screen.getByLabelText("C")).toBeChecked());
  });

  it("should not allow options to be selected (through clicking or pressing letters) when the fieldset is locked", async () => {
    render(RadioGroup, { props: { questionIndex: 0, numberOfOptions: 3 } });

    expect(screen.getByLabelText("A")).toBeChecked();
    screen.getAllByRole("radio").forEach((option) => {
      expect(option).toBeEnabled();
    });

    await fireEvent.focus(screen.getByTestId("radio_group"));
    await fireEvent.keyPress(screen.getByTestId("radio_group"), { key: "l" });
    screen.getAllByRole("radio").forEach(async (option) => {
      await waitFor(() => expect(option).toBeDisabled());
    });

    await fireEvent.keyPress(screen.getByTestId("radio_group"), { key: "c" });
    await waitFor(() => expect(screen.getByLabelText("A")).toBeChecked());
    expect(screen.getByLabelText("C")).not.toBeChecked();
  });
});
