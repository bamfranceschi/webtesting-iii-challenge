import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";
import Display from "../display/Display";

// Test away

//basic render test

test("testing Dashboard renders", () => {
  render(<Dashboard />);
});

test("testing Controls renders", () => {
  render(<Controls />);
});

test("testing Display renders", () => {
  render(<Display />);
});
