import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth:false,
  id:''
}
const slice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    LOGIN:(state, action)=>{
      return state = {isAuth:true, id:action.payload}
    },
    LOGOUT:(state)=>{
      return state = {isAuth:false, id:''}
    },
    SIGNUP:(state, action)=>{
      return state = {isAuth:true, id:action.payload}
    }
  }
})

export const authReducer = slice.reducer
export const {LOGIN, LOGOUT, SIGNUP} = slice.actions