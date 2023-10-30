import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomeComponent } from "./";

const saveUserName = jest.fn();

test("it should render the component", () => {
  const { getByText, getByPlaceholderText } = render(
    <MemoryRouter>
      <HomeComponent saveUserName={saveUserName} />
    </MemoryRouter>
  );

  const input = getByPlaceholderText("Please input your Full Name.");
  const button = getByText("Start");
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("it should handle form submission", () => {
  const { getByText, getByPlaceholderText } = render(
    <MemoryRouter>
      <HomeComponent saveUserName={saveUserName} />
    </MemoryRouter>
  );

  const input = getByPlaceholderText("Please input your Full Name.");
  const button = getByText("Start");

  fireEvent.change(input, { target: { value: "Ali Jonsson" } });

  fireEvent.click(button);

  expect(saveUserName).toHaveBeenCalledWith("Ali Jonsson");
});

test("it should display an error for empty input", () => {
  const { getByText, getByPlaceholderText } = render(
    <MemoryRouter>
      <HomeComponent saveUserName={saveUserName} />
    </MemoryRouter>
  );

  const button = getByText("Start");

  fireEvent.click(button);

  const errorMessage = getByText("This field is reqired.");
  expect(errorMessage).toBeInTheDocument();
});
