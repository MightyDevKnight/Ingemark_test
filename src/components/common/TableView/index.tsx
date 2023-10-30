import React from "react";
import { ScoreResponseType } from "models";
import { Table, TableContainer } from "./style";

interface Props {
  scoreList: ScoreResponseType[];
}

export const TableViewComponent: React.FC<Props> = ({ scoreList }) => {
  const scoreCalculate = (
    L: number,
    U: number,
    E: number,
    T: number
  ): number => {
    const base_score = 1000 / (E + 1);
    const letter_multiplier = U / 26;
    const length_multiplier = L / 100;
    const time_multiplier = 100 / T;
    const score =
      base_score * letter_multiplier * length_multiplier * time_multiplier;

    return score;
  };

  const list = scoreList.map((scoreItem: ScoreResponseType) => ({
    id: scoreItem.id,
    userName: scoreItem.userName,
    score: scoreCalculate(
      scoreItem.length,
      scoreItem.uniqueCharacters,
      scoreItem.errors,
      scoreItem.duration
    ),
  }));
  list.sort((a, b) => {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  });
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.userName}</td>
                <td>{item.score}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};
