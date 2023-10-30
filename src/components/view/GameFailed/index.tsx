import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "styled";
import { GameOverDiv } from "./style";

export const GameFailedComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <GameOverDiv>
      <h1>Game Over!</h1>
      <Button onClick={() => navigate("/game")}>Restart</Button>
    </GameOverDiv>
  );
};
