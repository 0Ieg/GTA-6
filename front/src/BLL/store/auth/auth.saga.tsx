import { createAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";

export const profileAsyncAC = createAction("PROFILE_ASYNC")
export const signupAsyncAC = createAction("SIGNUP_ASYNC")
export const loginAsyncAC = createAction("LOGIN_ASYNC")
export const logoutAsyncAC = createAction("LOGOUT_ASYNC")

export function* NewWatcher():Generator{
  takeEvery("", ProfileWorker)
  takeEvery("", SignupWorker)
  takeEvery("", LoginWorker)
  takeEvery("", LogoutWorker)
}

function* ProfileWorker():Generator{
  
}
function* SignupWorker():Generator{
  
}
function* LoginWorker():Generator{
  
}
function* LogoutWorker():Generator{
  
}