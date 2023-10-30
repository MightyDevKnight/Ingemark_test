import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScoreRequestType, ScoreResponseType, QuoteType } from "models";

interface StateType {
  isLoading: boolean;
  isSuccess: boolean;
  userName: string;
  quote: QuoteType;
  scoreList: ScoreResponseType[];
}

const initialState: StateType = {
  isLoading: false,
  isSuccess: false,
  userName: "",
  quote: {
    _id: "",
    content: "",
    length: 0,
  },
  scoreList: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    getQuote(state: StateType) {
      state.isLoading = true;
      state.isSuccess = false;
    },
    getQuoteSuccess(state: StateType, action: PayloadAction<QuoteType>) {
      state.isLoading = false;
      state.quote = action.payload;
    },
    getQuoteError(state) {
      state.isLoading = false;
    },
    sendScore(
      state: StateType,
      action: PayloadAction<{ sendData: ScoreRequestType; next: Function }>
    ) {
      state.isSuccess = true;
    },
    sendScoreSuccess(state) {
      state.isLoading = false;
    },
    sendScoreError(state) {
      state.isLoading = false;
    },
    receiveScore(state) {
      state.isLoading = true;
    },
    receiveScoreSuccess(
      state: StateType,
      action: PayloadAction<ScoreResponseType[]>
    ) {
      state.isLoading = false;
      state.scoreList = action.payload;
    },
    receiveScoreError(state) {
      state.isLoading = false;
    },
    saveUserName(state: StateType, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const actions = gameSlice.actions;

export const reducers = gameSlice.reducer;
