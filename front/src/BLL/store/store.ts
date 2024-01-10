import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.slice";
import createSagaMiddleware from 'redux-saga'
import { all } from "redux-saga/effects";
import { AuthWatcher } from "./auth/auth.saga";


const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer:{
    auth:authReducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat([sagaMiddleware])
})


function* RootWatcher():Generator{
  yield all([AuthWatcher()])
}
sagaMiddleware.run(RootWatcher)
export type AppStateType = ReturnType<typeof store.getState>