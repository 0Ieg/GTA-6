import { instance } from "./instance";
import { LoginAuthDTO } from "./dto/login-auth.dto";
import { toast } from "react-toastify"

export const loginAPI = (data:LoginAuthDTO)=>{
  return(
    instance.post('auth/login', data)
    .then(res=>{
      localStorage.setItem('access_token', res.data.access_token)
      toast.success('Successful login',{})
      return res.data.id
    })
    .catch(error=>{
      toast.error(error.response?.data.message)
    })
  )
}