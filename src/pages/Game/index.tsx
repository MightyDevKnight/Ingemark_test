import React from "react";
import { WithLayout } from "layouts";
import { GameContainer } from "containers";

const Game: React.FC = () => {
  return <GameContainer />;
};

export const GamePage = WithLayout(Game);
