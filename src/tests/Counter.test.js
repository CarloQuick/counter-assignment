import { render, screen, act } from "@testing-library/react";
import App from "../components/App";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test("renders counter message", () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const initCount = screen.getByTestId("count");
  expect(initCount).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  const initCount = screen.getByTestId("count");
  expect(initCount).toHaveTextContent("0");

  // Increments the count by 3
  userEvent.click(screen.getByText("+"));
  userEvent.click(screen.getByText("+"));
  userEvent.click(screen.getByText("+"));
  expect(initCount).toHaveTextContent("3");
});

test("clicking - decrements the count", () => {
  const initCount = screen.getByTestId("count");
  expect(initCount).toHaveTextContent("0");

  // Decrements the count by 3
  userEvent.click(screen.getByText("-"));
  userEvent.click(screen.getByText("-"));
  userEvent.click(screen.getByText("-"));
  expect(initCount).toHaveTextContent("-3");
});
