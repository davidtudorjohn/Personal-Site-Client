import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders portfolio link", () => {
  const { getByText } = render(<App />);
  const logoElement = getByText(/david tudor john/i);
  expect(logoElement).toBeInTheDocument();
});
