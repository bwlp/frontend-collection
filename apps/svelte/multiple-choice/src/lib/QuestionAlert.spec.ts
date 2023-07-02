import { render, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import QuestionAlert from "./QuestionAlert.svelte";

describe("QuestionAlert", () => {
  it("should not render QuestionAlert if questions is an empty string", () => {
    render(QuestionAlert, { props: { numberOfQuestions: 20, question: "" } });

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("should render the QuestionAlert with question number", () => {
    render(QuestionAlert, { props: { numberOfQuestions: 20, question: "3" } });

    expect(screen.getByRole("alert")).toBeVisible();
    expect(screen.getByText("Jump to Question 3/20")).toBeVisible();
  });
});
