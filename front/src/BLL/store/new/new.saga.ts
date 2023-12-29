import { createAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";

export const create_AsyncAC = createAction("CREATE_ _ASYNC")
export const read_AsyncAC = createAction("READ_ _ASYNC")
export const update_AsyncAC = createAction("UPDATE_ _ASYNC")
export const delete_AsyncAC = createAction("DELETE_ _ASYNC")

export function* NewWatcher():Generator{
  takeEvery("", CreateWorker)
  takeEvery("", ReadWorker)
  takeEvery("", UpdateWorker)
  takeEvery("", DeleteWorker)
}

function* CreateWorker():Generator{

}
function* ReadWorker():Generator{
  
}
function* UpdateWorker():Generator{
  
}
function* DeleteWorker():Generator{
  
}