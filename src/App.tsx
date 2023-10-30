import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  GamePage,
  GameFailedPage,
  ScoreReviewPage,
  NotFoundPage,
} from "pages";
import { PATH } from "consts";
import { store } from "store";
import { AppWrapper } from "styled";

const App = () => {
  return (
    <AppWrapper>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={PATH.HOME} element={<HomePage />} />
            <Route path={PATH.GAME} element={<GamePage />} />
            <Route path={PATH.GAMEFAILED} element={<GameFailedPage />} />
            <Route path={PATH.SCOREREVIEW} element={<ScoreReviewPage />} />
            <Route path={PATH.NOTFOUND} element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AppWrapper>
  );
};

export default App;
