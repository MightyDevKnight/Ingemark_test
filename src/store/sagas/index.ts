import { all, takeLatest } from "redux-saga/effects";
import { AppActions } from "store/store";

import { getQuoteSaga, receiveScoreSaga, sendScoreSaga } from "./game.saga";
function* rootSaga() {
  yield all([takeLatest(AppActions.game.getQuote.type, getQuoteSaga)]);
  yield all([takeLatest(AppActions.game.sendScore.type, sendScoreSaga)]);
  yield all([takeLatest(AppActions.game.receiveScore.type, receiveScoreSaga)]);
}

export default rootSaga;
