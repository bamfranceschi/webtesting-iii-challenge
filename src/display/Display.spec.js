import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

// Test away!

//test for defaults of unlocked and open

test("App defaults to unlocked", () => {
  const { getByText } = render(<Display />);
  getByText(/unlocked/i);
});

test("App defaults to open", () => {
  const { getByText } = render(<Display />);
  getByText(/open/i);
});

test("displays if gate is open/closed and if it is locked/unlocked", () => {
  const { getByTestId } = render(<Display />);

  //   const displayPanel = getByTestId("display_panel");

  expect(getByTestId("display_panel")).toHaveClass("display", "panel");
  //   expect(displayPanel).toHaveClass("display", "panel");
});

test("displays closed if closed prop is true and open otherwise", () => {
  const { getByText, rerender } = render(<Display closed />);
  getByText(/closed/i);

  rerender(<Display closed={false} />);
  getByText(/open/i);
});

test("displays locked if locked prop is true and unlocked otherwise", () => {
  const { getByText, rerender } = render(<Display locked />);
  getByText(/locked/i);

  rerender(<Display closed={false} />);
  getByText(/unlocked/i);
});

// red-led class test
test("when locked use the red-led class", () => {
  const { getByTestId } = render(<Display locked={true} />);

  expect(getByTestId("locked_class")).toHaveClass("red-led");
});

test("when closed use the red-led class", () => {
  const { getByTestId } = render(<Display closed={true} />);

  expect(getByTestId("closed_class")).toHaveClass("red-led");
});

//green-led class test
test("when unlocked green-led class", () => {
  const { getByTestId } = render(<Display locked={false} />);

  expect(getByTestId("locked_class")).toHaveClass("green-led");
});

test("when open use the green-led class", () => {
  const { getByTestId } = render(<Display closed={false} />);

  expect(getByTestId("closed_class")).toHaveClass("green-led");
});
