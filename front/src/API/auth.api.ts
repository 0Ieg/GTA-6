import { instance } from "./instance";
import { LoginAuthDTO } from "./dto/login-auth.dto";
import { toast } from "react-toastify"
import { SignupAuthDTO } from "./dto/signup-auth.dto";

export const loginAPI = (data:LoginAuthDTO)=>{
  return(
    instance.post('auth/login', data)
    .then(res=>{
      localStorage.setItem('access_token', res.data.access_token)
      toast.success('Successful login',{})
      return res.data.id
    })
    .catch(error=>toast.error(error.response?.data.message))
  )
}
export const logoutAPI = ()=>{
  return(
    instance.delete('auth/logout')
    .then(resp=>{
      localStorage.removeItem('access_token')
      toast.success('Successful logout')
      return true
    })
    .catch(error=>toast.error(error.response?.data.message))
  )
}
export const signupAPI = (data:SignupAuthDTO)=>{
  return(
    instance.post('user/signup', data)
    .then(resp=>{
      localStorage.setItem('access_token', resp.data.access_token)
      toast.success('Successful signup')
      return true
    })
    .catch(error=>toast.error(error.response?.data.message))
  )
}