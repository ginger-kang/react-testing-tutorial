import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  it("enables button when both email and password are entered", () => {
    render(<LoginForm onSubmit={() => null} />);
    const button = screen.getByText(/로그인/);
    const email = screen.getByLabelText(/이메일/);
    const password = screen.getByLabelText(/비밀번호/);

    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "Test1234" } });

    expect(button).toBeEnabled();
  });

  it("submits form when button is clicked", () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    const email = screen.getByLabelText(/이메일/);
    const password = screen.getByLabelText(/비밀번호/);

    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "Test1234" } });

    fireEvent.click(screen.getByText(/로그인/));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
