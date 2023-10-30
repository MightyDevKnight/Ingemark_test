import React from "react";
import { WithLayout } from "layouts";
import { GameFailedContainer } from "containers";

const GameFailed: React.FC = () => {
  return <GameFailedContainer />;
};

export const GameFailedPage = WithLayout(GameFailed);
