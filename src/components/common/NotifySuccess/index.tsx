import React from "react";
import { Notification } from "./style";
import { useNavigate } from "react-router-dom";
import { Button } from "styled";

interface IProps {
  text: string;
}

export const NotifySuccessComponent: React.FC<IProps> = ({text}) => {
  const navigate = useNavigate();

  return (
    <Notification>
      <h1>{text}</h1>
      <div>
        <Button onClick={() => navigate("/scorereview")}>Score Review</Button>
        <Button onClick={() => navigate("/")}>Restart</Button>
      </div>
    </Notification>
  )
}