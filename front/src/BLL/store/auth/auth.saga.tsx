import { createAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";
import { loginAPI, logoutAPI, signupAPI } from "../../../API/auth.api";
import { LOGIN, LOGOUT, SIGNUP } from "./auth.slice";
import { SignupAuthDTO } from "../../../API/dto/signup-auth.dto";
import { LoginAuthDTO } from "../../../API/dto/login-auth.dto";

export const profileAsyncAC = createAction("PROFILE_ASYNC")
export const signupAsyncAC = createAction<SignupAuthDTO>("SIGNUP_ASYNC")
export const loginAsyncAC = createAction<LoginAuthDTO>("LOGIN_ASYNC")
export const logoutAsyncAC = createAction("LOGOUT_ASYNC")

export function* AuthWatcher():Generator{
  takeEvery("", ProfileWorker)
  takeEvery("SIGNUP_ASYNC", SignupWorker)
  takeEvery("LOGIN_ASYNC", LoginWorker)
  takeEvery("LOGOUT_ASYNC", LogoutWorker)
}

function* ProfileWorker():Generator{
  
}
function* SignupWorker(action:ReturnType<typeof signupAsyncAC>):Generator{
  const id = yield call(signupAPI, action.payload)
  if(id)yield put(SIGNUP(id))
}
function* LoginWorker(action:ReturnType<typeof loginAsyncAC>):Generator{
  const id = yield call(loginAPI, action.payload)
  if(id)yield put(LOGIN(id))
}
function* LogoutWorker():Generator{
  const isLogout = yield call(logoutAPI)
  if(isLogout)yield put(LOGOUT)
}