import { FC, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FormButton } from '../../common/formButton';
import { useDispatch } from 'react-redux';
import { logoutAsyncAC } from '../../../BLL/store/auth/auth.saga';

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
  .message{
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
export const Logout:FC = ()=>{
  const dispatch = useDispatch()
  const {handleSubmit, register, reset, formState:{isSubmitSuccessful}} = useForm({mode:'onTouched'})
  const formHandler:SubmitHandler<FieldValues> = ({message})=>{
    dispatch(logoutAsyncAC({message}))
  }
  const [isVisible, setisVisible] = useState(false)
  const visibleHandler = ()=>{
    setisVisible(prev=>!prev)
  }
  useEffect(()=>{
    reset({message:null})
  },[isSubmitSuccessful, isVisible])
  return (
    <Styled>
      <form className='form' onSubmit={handleSubmit(formHandler)}>
        <div className="message" onClick={visibleHandler}>{isVisible?'Don\'t leave a message':'Leave a message'}</div>
        {isVisible && <input type="text" {...register('message')}/>}
        <FormButton>Logout</FormButton>
      </form>
    </Styled>
  )
}

