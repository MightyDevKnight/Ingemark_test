import { TableViewComponent } from "components/common";
import { ScoreResponseType } from "models";
import React from "react";
import { Button } from "styled";
import { useNavigate } from "react-router-dom";

interface Props {
  scoreList: ScoreResponseType[];
}

export const ScoreReviewComponent: React.FC<Props> = ({ scoreList }) => {
  const navigate = useNavigate();
  const restartHandler = () => {
    navigate("/game");
  };
  return (
    <>
      <TableViewComponent scoreList={scoreList} />
      <Button onClick={() => restartHandler()}>restart</Button>
    </>
  );
};
