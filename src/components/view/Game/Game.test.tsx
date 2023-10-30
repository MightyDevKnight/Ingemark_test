import { render, fireEvent } from "@testing-library/react";
import { GameComponent } from "./";
import { MemoryRouter } from "react-router-dom";
import { QuoteType } from "models";

const quote: QuoteType = {
  content: "Test quote",
  _id: "3riw7-6ghe",
  length: 10,
};
const sendScore = jest.fn();
const setIsRestarted = jest.fn();

test("it should render the GameComponent", () => {
  const { getByText, getByRole } = render(
    <MemoryRouter>
      <GameComponent
        quote={quote}
        sendScore={sendScore}
        setIsRestarted={setIsRestarted}
      />
    </MemoryRouter>
  );

  expect(getByText("Error: 0")).toBeInTheDocument();
  expect(getByRole("button", { name: "restart" })).toBeInTheDocument();
});

test("it should trigger restartHandler when the restart button is clicked", () => {
  const { getByRole } = render(
    <MemoryRouter>
      <GameComponent
        quote={quote}
        sendScore={sendScore}
        setIsRestarted={setIsRestarted}
      />
    </MemoryRouter>
  );

  const restartButton = getByRole("button", { name: "restart" });
  fireEvent.click(restartButton);

  expect(setIsRestarted).toHaveBeenCalled();
});
