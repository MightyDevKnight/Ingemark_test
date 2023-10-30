import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { gameActions, gameReducers } from "./slices";

const sagaMiddleware = createSagaMiddleware();

//create store
export const store = configureStore({
  preloadedState: {},
  reducer: {
    game: gameReducers,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    ),
});

// export app actions
export const AppActions = {
  game: gameActions,
};

sagaMiddleware.run(rootSaga);

// root state
export type RootState = ReturnType<typeof store.getState>;

//export app dispatch
export type AppDispatch = typeof store.dispatch;
