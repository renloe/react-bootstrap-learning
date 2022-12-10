import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AlertDismissible from "../AlertDismissable";
import AlertDismissable from "../AlertDismissable";

test("test AlertDismissible", async () => {
  render(<AlertDismissible />);
  const user = userEvent.setup();

  let showButton = screen.queryByText("Show Alert");
  let closeButton = screen.getByText("Close me y'all!");

  expect(showButton).toBeNull();
  expect(closeButton).toBeInTheDocument();

  await user.click(closeButton);
  showButton = screen.getByText("Show Alert");
  expect(showButton).toBeInTheDocument();
  closeButton = screen.queryByText("Close me y'all!");
  await waitFor(() => expect(closeButton).not.toBeInTheDocument());

  await user.click(showButton);
  closeButton = screen.getByText("Close me y'all!");
  expect(closeButton).toBeInTheDocument();
  expect(showButton).not.toBeInTheDocument();
});

test("Check placeholder text in input", () => {
  render(<AlertDismissible />);
  const input = screen.getByPlaceholderText("Hello Bobby");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("Ronnie");

  const input2 = screen.getByDisplayValue("Money man");
  expect(input2).toHaveValue("Money man");
});

test("find button by testid", async () => {
  render(<AlertDismissible />);
  const user = userEvent.setup();

  const button = screen.getByTestId("button-testId");
  expect(button).toHaveTextContent("How are you?");
});

test("find by label text", async () => {
  render(<AlertDismissible />);
  const user = userEvent.setup();

  const label = screen.getByLabelText("The example");
  const input = screen.getByTestId("inputexample");

  await user.click(label);
  expect(input).toHaveFocus();
});

test("test", () => {
  render(<AlertDismissable />);
  const div = screen.getByText((content, element) =>
    content.startsWith(/hello/i)
  );
  expect(div).toHaveStyle({ color: "blue" });
  expect(div).toHaveTextContent("Hello World");
});

test("debug", () => {
  render(<AlertDismissible />);

  // screen.debug();
  //screen.debug(screen.getByText("test"));
  //screen.debug(screen.getAllByText("multi-test"));
  screen.logTestingPlaygroundURL(screen.getByText("test"));
});

test("container query tests", () => {
  const { container } = render(<AlertDismissible />);
});
