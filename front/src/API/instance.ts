import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL
})

instance.interceptors.request.use((req)=>{
  req.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
  return req
})