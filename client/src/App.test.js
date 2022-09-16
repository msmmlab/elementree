import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(
        /Click here to fetch new coordinates/i
    );
    expect(linkElement).toBeInTheDocument();
});
