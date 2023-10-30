import React, { useEffect, useState } from "react";
import { GameComponent, LoadingComponent } from "components";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, RootState } from "store";
import { useNavigate } from "react-router-dom";
import { ScoreRequestType } from "models";
import { NotifySuccessComponent } from "components";

export const GameContainer: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quote = useSelector((state: RootState) => state.game.quote);
  const isLoading = useSelector((state: RootState) => state.game.isLoading);
  const isSuccess = useSelector((state: RootState) => state.game.isSuccess);
  const userName = useSelector((state: RootState) => state.game.userName);
  useEffect(() => {
    dispatch(AppActions.game.getQuote());
  }, []);
  const setIsRestarted = () => {
    dispatch(AppActions.game.getQuote());
  };
  const sendScore = (error: number, uniqueLength: number, duration: number) => {
    const sendData: ScoreRequestType = {
      quoteId: quote._id,
      length: quote.length,
      uniqueCharacters: uniqueLength,
      userName: userName,
      errors: error,
      duration: duration,
    };
    dispatch(
      AppActions.game.sendScore({
        sendData: sendData,
        next: () => {},
      })
    );
  };
  return (
    <>
      {isSuccess ? (
        <NotifySuccessComponent text="Game success!" />
      ): (<></>)}
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <GameComponent
          quote={quote}
          sendScore={sendScore}
          setIsRestarted={setIsRestarted}
        />
      )}
    </>
  );
};
