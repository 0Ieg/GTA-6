import { FC } from 'react';
import styled from 'styled-components';
import { Login } from './auth/login';

const Styled = styled.main`
  
`
export const Main:FC = ()=>{
  return (
    <Styled>
      Main Main
      <Login/>
    </Styled>
  )
}

