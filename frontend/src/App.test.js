import { render, screen } from "@testing-library/react";
import App from "./App";  // Correct import

test("renders Hive News Platform heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Hive News Platform/i);
  expect(headingElement).toBeInTheDocument();
});
