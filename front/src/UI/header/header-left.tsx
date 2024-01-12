import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styled = styled.div`
height: 100%;
background-color: var(--color-gray-light);
padding: 0 var(--m-l);
border-radius: 0 0 var(--br-m) 0;
display: flex;
align-items: center;
justify-content: center;
`
export const HeaderLeft:FC = ()=>{
  return (
    <Styled>
      <Link to={''}>Home</Link>
    </Styled>
  )
}

