import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppStateType } from '../../BLL/store/store';
import { useSelector } from 'react-redux';

const Styled = styled.div`
height: 100%;
background-color: var(--color-gray-light);
padding: 0 var(--m-l);
border-radius: 0 0 0 var(--br-m);
display: flex;
align-items: center;
justify-content: center;
`
export const HeaderRight:FC = ()=>{
  const isAuth = useSelector((state:AppStateType)=>state.auth.isAuth)
  return (
    <Styled>
      <Link to={isAuth?'logout':'/auth'}>Auth</Link>
    </Styled>
  )
}

