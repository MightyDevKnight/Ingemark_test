import React, { useEffect } from "react";
import { LoadingComponent, ScoreReviewComponent } from "components";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, RootState } from "store";

export const ScoreReviewContainer: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.game.isLoading);

  useEffect(() => {
    dispatch(AppActions.game.receiveScore());
  }, []);

  const scoreList = useSelector((state: RootState) => state.game.scoreList);
  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <ScoreReviewComponent scoreList={scoreList} />
      )}
    </>
  );
};
