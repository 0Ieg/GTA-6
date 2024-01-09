import { FC } from 'react';
import styled from 'styled-components';

const Styled = styled.button`
cursor: pointer;
`
export const FormButton:FC<{children:string}> = ({children})=>{
  return (
    <Styled>
      {children}
    </Styled>
  )
}

