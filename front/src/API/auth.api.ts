import axios from "axios";
import { LoginAuthDTO } from "./dto/login-auth.dto";
import { instance } from "./instance";

export const loginAPI = (data:LoginAuthDTO)=>{
  // axios.post('http://localhost:3000/auth/login', data)
  // .then(res=>console.log(res))
  // .catch(err=>console.log(err))
  return(
    instance.post('auth/login', data)
    .then(res=>{
      console.log(res.data)
    })
    .catch(error=>{
      console.log(error.response)
    })
  )
}