import React from "react";
import { Button } from "./style";

interface Props {
  letter: string;
  buttonClick: Function;
  isDisabled?: boolean;
  hint: boolean;
}

export const ButtonComponent: React.FC<Props> = ({
  letter,
  buttonClick,
  isDisabled,
  hint,
}) => {
  const handleClick = (l: string) => {
    buttonClick(l);
  };
  return (
    <Button
      onClick={() => {
        handleClick(letter);
      }}
      disabled={isDisabled}
      className={hint ? "hint" : ""}
    >
      {letter}
    </Button>
  );
};
