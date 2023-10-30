import { call, put } from "redux-saga/effects";
import { AppActions } from "store/store";
import { PayloadAction } from "@reduxjs/toolkit";

import { AppApiInstances } from "utils";
import { QuoteType, ScoreRequestType } from "models";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* getQuoteSaga() {
  try {
    const result: ResponseGenerator = yield call(
      async () => await AppApiInstances.getQuotoApiInstance.get("")
    );
    if (result.data) {
      yield put(
        AppActions.game.getQuoteSuccess({
          _id: result.data._id,
          content: result.data.content,
          length: result.data.length,
        })
      );
    }
  } catch (err) {
    console.log(err);
    yield put(AppActions.game.getQuoteError());
  }
}

export function* sendScoreSaga(
  action: PayloadAction<{ sendData: ScoreRequestType; next: Function }>
) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.scoreRequestInstance.post("", action.payload)
    );
    if (result.status === 201) {
      yield put(AppActions.game.sendScoreSuccess());
      action.payload.next();
    }
  } catch (err) {
    console.log(err);
    yield put(AppActions.game.sendScoreError());
  }
}

export function* receiveScoreSaga() {
  try {
    const result: ResponseGenerator = yield call(
      async () => await AppApiInstances.scoreRequestInstance.get("")
    );
    if (result.status === 200) {
      yield put(AppActions.game.receiveScoreSuccess(result.data));
    }
  } catch (err) {
    console.log(err);
    yield put(AppActions.game.receiveScoreError());
  }
}
