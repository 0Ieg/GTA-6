import axios from "axios";

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_URL
  baseURL: 'http://localhost:3000/'
})

instance.interceptors.request.use((req)=>{
  req.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
  return req
})