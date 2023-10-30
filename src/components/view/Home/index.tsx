import React, { useState } from "react";
import {
  HomeContent,
  Input,
  HomeControl,
  HomeAction,
  HomeError
} from "./style";
import { Button } from "styled";
import { useNavigate } from "react-router-dom";

interface Props {
  saveUserName: (value: string) => void;
}

export const HomeComponent: React.FC<Props> = ({ saveUserName }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [validateError, setValidateError] = useState<boolean>(false);
  const handleSubmit = () => {
    if (userName) {
      saveUserName(userName);
      navigate("/game");
    } else {
      setValidateError(true);
    }
  };
  return (
    <>
      <HomeContent>
        <HomeControl>
          <Input
            type="text"
            name="userName"
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Please input your Full Name."
          />
          {validateError && !userName && (
            <HomeError>This field is reqired.</HomeError>
          )}
        </HomeControl>
        <HomeAction>
          <Button type="button" onClick={() => handleSubmit()}>
            Start
          </Button>
        </HomeAction>
      </HomeContent>
    </>
  );
};
