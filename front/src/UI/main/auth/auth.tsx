import { FC, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FormButton } from '../../common/formButton';


const Styled = styled.div`
display: flex;
align-items: center;
justify-content: center;
.form{
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: var(--margin-big);
  gap: 30px;
  .switch{
    user-select: none;
    cursor: pointer;
  }
}
`
export const Auth:FC = ()=>{
  const [isSignup, setIsSignup] = useState(true)
  const {handleSubmit, reset, formState:{isSubmitSuccessful}, register} = useForm({mode:'onTouched'})

  const formHandler:SubmitHandler<FieldValues> = (data)=>{
    console.log(data)
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

