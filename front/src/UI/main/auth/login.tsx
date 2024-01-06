import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { loginAPI } from '../../../API/auth.api';

const Styled = styled.div`
  
`
export const Login:FC = ()=>{
  const clickHandler = ()=>{
    loginAPI({email:'oleg@gmail.com', password:'password'})
  }
  return (
    <Styled>
      <div onClick={clickHandler}>click me</div>
    </Styled>
  )
}

