import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import RadioForm from "./RadioForm.svelte";

describe("RadioForm", () => {
  it("should render 40 questions with 4 options each by default", () => {
    render(RadioForm);

    expect(screen.getAllByTestId("radio_group")).toHaveLength(40);
    expect(screen.getAllByLabelText("D")).toHaveLength(40);
    expect(screen.queryByLabelText("E")).not.toBeInTheDocument();

    screen.getAllByRole("radio").forEach((radio) => {
      expect(radio).toBeEnabled();
    });
    // Flags
    expect(screen.queryByTestId("locked")).not.toBeInTheDocument();
    expect(screen.queryByTestId("marked")).not.toBeInTheDocument();
  });

  it("should disable the focused fieldset and the radios when the user clicks the lock icon", async () => {
    render(RadioForm);

    const firstRadioGroup = screen.getAllByTestId("radio_group")[0];

    fireEvent.focus(firstRadioGroup);
    fireEvent.click(within(firstRadioGroup).getByTestId("unlocked"));
    expect(await within(firstRadioGroup).findByTestId("locked")).toBeVisible();
    expect(
      within(firstRadioGroup).queryByTestId("unlocked")
    ).not.toBeInTheDocument();
    expect(firstRadioGroup).toHaveClass("isLocked");
    within(firstRadioGroup)
      .getAllByRole("radio")
      .forEach((radio) => {
        expect(radio).toBeDisabled();
      });

    fireEvent.click(within(firstRadioGroup).getByTestId("locked"));
    expect(
      await within(firstRadioGroup).findByTestId("unlocked")
    ).toBeVisible();
    expect(
      within(firstRadioGroup).queryByTestId("locked")
    ).not.toBeInTheDocument();
    expect(firstRadioGroup).not.toHaveClass("isLocked");
    within(firstRadioGroup)
      .getAllByRole("radio")
      .forEach((radio) => {
        expect(radio).toBeEnabled();
      });
  });

  it('should disable the focused fieldset and the radios when the user presses "L"', async () => {
    render(RadioForm);

    const firstRadioGroup = screen.getAllByTestId("radio_group")[0];

    fireEvent.focus(firstRadioGroup);
    fireEvent.keyPress(firstRadioGroup, { key: "L" });
    expect(await within(firstRadioGroup).findByTestId("locked")).toBeVisible();
    expect(firstRadioGroup).toHaveClass("isLocked");
    within(firstRadioGroup)
      .getAllByRole("radio")
      .forEach((radio) => {
        expect(radio).toBeDisabled();
      });

    fireEvent.keyPress(firstRadioGroup, { key: "L" });
    expect(
      await within(firstRadioGroup).findByTestId("unlocked")
    ).toBeVisible();
    expect(
      within(firstRadioGroup).queryByTestId("locked")
    ).not.toBeInTheDocument();
    expect(firstRadioGroup).not.toHaveClass("isLocked");
    within(firstRadioGroup)
      .getAllByRole("radio")
      .forEach((radio) => {
        expect(radio).toBeEnabled();
      });
  });

  it("should flag the focused fieldset as marked when the user clicks the flag icon", async () => {
    render(RadioForm);

    const firstRadioGroup = screen.getAllByTestId("radio_group")[0];

    fireEvent.focus(firstRadioGroup);
    fireEvent.click(within(firstRadioGroup).getByTestId("unmarked"));
    expect(await within(firstRadioGroup).findByTestId("marked")).toBeVisible();
    expect(
      within(firstRadioGroup).queryByTestId("unmarked")
    ).not.toBeInTheDocument();

    fireEvent.click(within(firstRadioGroup).getByTestId("marked"));
    expect(
      await within(firstRadioGroup).findByTestId("unmarked")
    ).toBeVisible();
    expect(
      within(firstRadioGroup).queryByTestId("marked")
    ).not.toBeInTheDocument();
  });

  it('should flag the focused fieldset as marked when the user presses "M"', async () => {
    render(RadioForm);

    const firstRadioGroup = screen.getAllByTestId("radio_group")[0];

    fireEvent.focus(firstRadioGroup);
    fireEvent.keyPress(firstRadioGroup, { key: "M" });
    expect(await within(firstRadioGroup).findByTestId("marked")).toBeVisible();
    expect(
      within(firstRadioGroup).queryByTestId("unmarked")
    ).not.toBeInTheDocument();

    fireEvent.keyPress(firstRadioGroup, { key: "M" });
    expect(
      await within(firstRadioGroup).findByTestId("unmarked")
    ).toBeVisible();
    expect(
      within(firstRadioGroup).queryByTestId("marked")
    ).not.toBeInTheDocument();
  });
});

describe("Question Alert", () => {
  it("should show the QuestionAlert when a number is entered, and hide when the number is cleared", async () => {
    render(RadioForm);

    const firstRadioGroup = screen.getAllByTestId("radio_group")[0];

    fireEvent.focus(firstRadioGroup);
    fireEvent.keyDown(firstRadioGroup, { key: "1" });
    fireEvent.keyDown(firstRadioGroup, { key: "0" });
    expect(await screen.findByText("Jump to Question 10/40")).toBeVisible();
    fireEvent.keyDown(firstRadioGroup, { key: "Backspace" });
    expect(await screen.findByText("Jump to Question 1/40")).toBeVisible();
    fireEvent.keyDown(firstRadioGroup, { key: "Backspace" });
    await waitForElementToBeRemoved(screen.queryByRole("alert"));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();

    fireEvent.keyDown(firstRadioGroup, { key: "1" });
    fireEvent.keyDown(firstRadioGroup, { key: "0" });
    expect(await screen.findByText("Jump to Question 10/40")).toBeVisible();
    fireEvent.keyDown(firstRadioGroup, { key: "Escape" });
    await waitForElementToBeRemoved(screen.queryByRole("alert"));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();

    fireEvent.keyDown(firstRadioGroup, { key: "1" });
    fireEvent.keyDown(firstRadioGroup, { key: "0" });
    expect(await screen.findByText("Jump to Question 10/40")).toBeVisible();
    fireEvent.keyDown(firstRadioGroup, { key: "Delete" });
    await waitForElementToBeRemoved(screen.queryByRole("alert"));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("should allow user to jump to a specific question by typing a number and pressing enter", async () => {
    render(RadioForm);

    const firstRadioGroup = screen.getAllByTestId("radio_group")[0];
    const tenthRadioGroup = screen.getAllByTestId("radio_group")[9];

    fireEvent.focus(firstRadioGroup);
    fireEvent.keyDown(firstRadioGroup, { key: "1" });
    fireEvent.keyDown(firstRadioGroup, { key: "0" });
    expect(await screen.findByText("Jump to Question 10/40")).toBeVisible();
    fireEvent.keyDown(firstRadioGroup, { key: "Enter" });
    await waitFor(() => expect(tenthRadioGroup).toHaveClass("isFocused"));
  });

  it("should not allow the users to jump to a question outside the number of questions", async () => {
    render(RadioForm);

    const firstRadioGroup = screen.getAllByTestId("radio_group")[0];
    const lastRadioGroup = screen.getAllByTestId("radio_group")[39];

    fireEvent.focus(firstRadioGroup);
    fireEvent.keyDown(firstRadioGroup, { key: "1" });
    fireEvent.keyDown(firstRadioGroup, { key: "0" });
    fireEvent.keyDown(firstRadioGroup, { key: "0" });
    expect(await screen.findByText("Jump to Question 40/40")).toBeVisible();
    fireEvent.keyDown(firstRadioGroup, { key: "Enter" });
    await waitFor(() => expect(lastRadioGroup).toHaveClass("isFocused"));
  });
});

describe("SessionBar", () => {
  it("should allow users to set the number of questions and number of options", async () => {
    render(RadioForm);

    expect(screen.getByLabelText("Questions")).toHaveValue(40);
    expect(screen.getByLabelText("Options")).toHaveValue(4);

    await userEvent.clear(screen.getByLabelText("Questions"));
    await userEvent.type(screen.getByLabelText("Questions"), "50");
    await waitFor(() =>
      expect(screen.getByLabelText("Questions")).toHaveValue(50)
    );
    await userEvent.clear(screen.getByLabelText("Options"));
    await userEvent.type(screen.getByLabelText("Options"), "6");
    await waitFor(() =>
      expect(screen.getByLabelText("Options")).toHaveValue(6)
    );
    await userEvent.tab();

    expect(screen.getAllByTestId("radio_group")).toHaveLength(50);
    expect(screen.getAllByLabelText("F")).toHaveLength(50);
    expect(screen.queryByLabelText("G")).not.toBeInTheDocument();
  });
});

describe("Keyboard events", () => {
  it("should allow user to check a radio by pressing the corresponding letter", async () => {
    render(RadioForm);

    const firstRadioGroup = screen.getAllByTestId("radio_group")[0];

    fireEvent.focus(firstRadioGroup);
    expect(within(firstRadioGroup).getByLabelText("A")).toBeChecked();
    fireEvent.keyPress(firstRadioGroup, { key: "C" });
    await waitFor(() =>
      expect(within(firstRadioGroup).getByLabelText("C")).toBeChecked()
    );
  });
});
