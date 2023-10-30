import React from "react";
import { HomeComponent } from "components";
import { useDispatch } from "react-redux";
import { AppActions } from "store";

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const saveUserName = (value: string) => {
    dispatch(AppActions.game.saveUserName(value));
  };
  return <HomeComponent saveUserName={saveUserName} />;
};
