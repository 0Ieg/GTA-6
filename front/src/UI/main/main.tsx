import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from './auth/auth';
import { Logout } from './auth/logout';
import { Home } from './home/home';

const Styled = styled.main`
flex-grow: 1;
display: grid;
`
export const Main:FC = ()=>{
  return (
    <Styled>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='logout' element={<Logout/>}/>
      </Routes>
    </Styled>
  )
}

