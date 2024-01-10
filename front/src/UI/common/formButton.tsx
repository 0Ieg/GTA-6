import { FC } from 'react';
import styled from 'styled-components';

const Styled = styled.button`
border-radius: var(--br-s);
padding: var(--m-s);
cursor: pointer;
background-color: var(--color-green);
font-size: 18px;
color: var(--color-background-dark);
transition: all 0.1s ease ;
border: 0;
&:hover{
  box-shadow: 0 0 4px var(--color-gray-light);
  color: var(--color-pink);
}
&:disabled{
  opacity: 0.7;
}
`
export const FormButton:FC<{children:string}> = ({children})=>{
  return (
    <Styled>
      {children}
    </Styled>
  )
}

