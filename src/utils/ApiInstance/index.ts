import { makeInstance } from "./api.instance";

export const getQuotoApiInstance = makeInstance(
  process.env.REACT_APP_GET_QUOTABLE_SERVER_URL || ""
);

export const scoreRequestInstance = makeInstance(
  process.env.REACT_APP_SCORE_SERVER_URL || ""
);
