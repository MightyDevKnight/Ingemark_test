import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonComponent,
  ContentComponent,
  ImageComponent,
} from "components/common";
import { ButtonGroup, GameBtnGroup, StatusBar } from "./style";
import { Button } from "styled";
import { QuoteType } from "models";

interface Props {
  quote: QuoteType;
  sendScore: Function;
  setIsRestarted: Function;
}

export const GameComponent: React.FC<Props> = ({
  quote,
  sendScore,
  setIsRestarted,
}) => {
  const navigate = useNavigate();
  const [startTime, setStatTime] = useState<Date>(new Date());
  const [errorNumber, setErrorNumber] = useState<number>(0);
  const [uniqueContent, setUniqueContent] = useState(
    new Set(quote.content.replace(/[^a-zA-Z]/g, "").toUpperCase())
  );
  const [uniqueLength, setUniqueLength] = useState(0);
  const [selectLetter, setSelectLetter] = useState<string[]>([]);
  const [hint, setHint] = useState<string>("");

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  useEffect(() => {
    setStatTime(new Date());
    setUniqueLength(uniqueContent.size);
  }, []);

  useEffect(() => {
    if (errorNumber === 6) {
      navigate("/gamefailed");
    }
    if (uniqueContent.size === 0) {
      const endTime = new Date();
      const duration = endTime.getTime() - startTime.getTime();
      selectLetter.length && sendScore(errorNumber, uniqueLength, duration);
    }
  }, [errorNumber, uniqueContent]);

  const buttonClick = (letter: string) => {
    if (uniqueContent.has(letter)) {
      setUniqueContent((prev) => {
        const newSet = new Set(prev);
        newSet.delete(letter);
        return newSet;
      });
    } else {
      setErrorNumber((prev) => prev + 1);
    }
    setSelectLetter((prev) => [...prev, letter]);
  };

  const restartHandler = () => {
    setIsRestarted();
  };

  const hintHandler = () => {
    const randomIndex = Math.floor(Math.random() * uniqueContent.size);
    const hint = Array.from(uniqueContent)[randomIndex];
    setHint(hint);
  };

  return (
    <>
      <StatusBar>
        <h1>Error: {errorNumber}</h1>
        <GameBtnGroup>
          <Button onClick={() => restartHandler()}>restart</Button>
          {errorNumber === 5 && hint === "" && (
            <Button onClick={() => hintHandler()}>Hint?</Button>
          )}
        </GameBtnGroup>
      </StatusBar>
      <ImageComponent />
      <ContentComponent quote={quote} selectButton={selectLetter} />
      <ButtonGroup>
        {alphabet.map((letter: string, index: number) => (
          <ButtonComponent
            key={letter + index}
            letter={letter}
            hint={letter === hint}
            isDisabled={selectLetter.includes(letter)}
            buttonClick={buttonClick}
          />
        ))}
      </ButtonGroup>
    </>
  );
};
