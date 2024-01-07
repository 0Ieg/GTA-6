import { createAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";
import { loginAPI } from "../../../API/auth.api";
import { LOGIN } from "./auth.slice";

export const profileAsyncAC = createAction("PROFILE_ASYNC")
export const signupAsyncAC = createAction("SIGNUP_ASYNC")
export const loginAsyncAC = createAction<{email:string, password:string}>("LOGIN_ASYNC")
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

function* LoginWorker(action:ReturnType<typeof loginAsyncAC>):Generator{
  const id = yield call(loginAPI, action.payload)
  if(id){
    yield put(LOGIN(id))
  }
}
function* LogoutWorker():Generator{
  
}