import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

// Test away!

// gate cannot be closed or opened if it is locked

test("disabled open/close if locked", () => {
  const toggle = jest.fn();
  const { getByText } = render(
    <Controls locked={true} closed={true} toggle={toggle} />
  );

  const openGate = getByText(/open gate/i);
  fireEvent.click(openGate);
  expect(toggle).not.toHaveBeenCalled();
});

//the closed toggle button is disabled if the gate is locked

test("closed toggle button disabled if the gate is locked", () => {
  const { getByTestId } = render(<Controls closed={true} locked={true} />);

  expect(getByTestId("toggle_closed").toBeDisabled());
});

//the locked toggle button is disabled if the gate is open

test("locked toggle button disabled if the gate is open", () => {
  const { getByTestId } = render(<Controls closed={false} locked={false} />);

  expect(getByTestId("toggle_locked").not.toBeDisabled());
});
