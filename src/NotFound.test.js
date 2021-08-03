import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("<NotFound />", () => {
  it("renders header", () => {
    const { getByText } = render(<NotFound path="/hello" />);
    const header = getByText("Page Not Found");
    expect(header).toBeInTheDocument();
  });

  it("renders paragraph", () => {
    render(<NotFound path="/hello" />);
    const paragraph = screen.getByText(/해당 페이지/i);
    expect(paragraph).toHaveTextContent(
      "해당 페이지(/hello)를 찾을 수 없습니다.",
    );
  });

  it("renders image", () => {
    render(<NotFound path="/hello" />);
    const image = screen.getByAltText("404");
    expect(image).toHaveAttribute(
      "src",
      "https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif",
    );
  });
});
