import { FC, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FormButton } from '../../common/formButton';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsyncAC, signupAsyncAC } from '../../../BLL/store/auth/auth.saga';
import { useNavigate } from 'react-router-dom';
import { AppStateType } from '../../../BLL/store/store';


const Styled = styled.div`
display: flex;
align-items: center;
justify-content: center;
.form{
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  padding: var(--m-l);
  gap: 30px;
  background-color: var(--color-gray-light);
  border-radius: var(--br-s);
  input{
    border: 2px solid var(--color-gray-light);
    border-radius: var(--br-s);
    background-color: var(--color-gray-dark);
    padding: var(--m-m);
    font-size: 18px;
    color: var(--color-black);
    transition: box-shadow 0.1s ease;
    &:focus{
      outline: none;
      box-shadow: 0 0 4px var(--color-gray-light);
    }
  }
  .switch{
    user-select: none;
    cursor: pointer;
    text-align: center;
    transition: color 0.1s ease;
    &:hover{
      color: var(--color-pink);
    }
  }
}
`
export const Auth:FC = ()=>{
  const dispatch = useDispatch()
  const [isSignup, setIsSignup] = useState(true)
  const {handleSubmit, reset, formState:{isSubmitSuccessful}, register} = useForm({mode:'onTouched'})
  
  const formHandler:SubmitHandler<FieldValues> = ({email, password})=>{
    isSignup?dispatch(signupAsyncAC({email, password})):dispatch(loginAsyncAC({email, password}))
    console.log(email,password)
  }
  const switchHandler = ()=>{
    setIsSignup(!isSignup)
  }

  useEffect(()=>{
    reset({
      email:null,
      password:null
    })
  },[isSubmitSuccessful])

  const isAuth = useSelector((state:AppStateType)=>state.auth.isAuth)
  const navigate = useNavigate()
  useEffect(()=>{
    isAuth && navigate('/')
  },[isAuth])
  return (
    <Styled>
      <form className="form" onSubmit={handleSubmit(formHandler)}>
        <input type="email" {...register('email')} placeholder='email'/>
        <input type="text" {...register('password')} placeholder='password'/>
        <FormButton>{isSignup?'Signup':'Login'}</FormButton>
        <div className="switch" onClick={switchHandler}>
          {isSignup?'Already have an account?':'You don\'t have an account?'}
        </div>
      </form>
    </Styled>
  )
}

