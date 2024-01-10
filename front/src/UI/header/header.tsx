import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppStateType } from '../../BLL/store/store';

const Styled = styled.header`
height: 50px;
display: grid;
align-items: center;
grid-template-columns: 50px 1fr 50px;
`
export const Header:FC = ()=>{
  const isAuth = useSelector((state:AppStateType)=>state.auth.isAuth)
  return (
    <Styled>
      <Link to={''}>Home</Link>
      <div className="nav"></div>
      <Link to={isAuth?'logout':'/auth'}>Auth</Link>
    </Styled>
  )
}

