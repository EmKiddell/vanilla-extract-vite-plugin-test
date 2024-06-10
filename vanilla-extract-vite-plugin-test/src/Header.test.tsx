import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

test("renders Header", () => {
    render(<Header />);

    expect(screen.getByText("Vanilla Extract Vite Plugin Test")).toBeInTheDocument();
  });
