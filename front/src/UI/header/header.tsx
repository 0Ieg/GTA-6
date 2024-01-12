import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderLeft } from './header-left';
import { HeaderRight } from './header.right';

const Styled = styled.header`
height: 50px;
display: grid;
align-items: center;
grid-template-columns: minmax(100px, 400px) 1fr minmax(100px, 400px);

`
export const Header:FC = ()=>{
  return (
    <Styled>
      <HeaderLeft/>
      <div className="nav"></div>
      <HeaderRight/>
    </Styled>
  )
}

