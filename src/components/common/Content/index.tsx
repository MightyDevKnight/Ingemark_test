import React, { useState } from "react";
import { QuoteType } from "models";
import { ContentGroup, LetterGroup } from "./style";

interface Props {
  quote: QuoteType;
  selectButton: string[];
}

export const ContentComponent: React.FC<Props> = ({ quote, selectButton }) => {
  const letterGroups = quote.content.split(" ");
  return (
    <ContentGroup>
      {letterGroups.map((letterGroup: string, index: number) => {
        return (
          <LetterGroup key={letterGroup + index}>
            {letterGroup.split("").map((letter: string, subIndex: number) => {
              let tempLetter: string = "";
              if (/[^a-zA-Z]/.test(letter)) tempLetter = letter;
              else {
                tempLetter = selectButton.includes(letter.toUpperCase())
                  ? letter
                  : "_";
              }
              return <span key={letter + "-" + subIndex}>{tempLetter}</span>;
            })}
          </LetterGroup>
        );
      })}
    </ContentGroup>
  );
};
