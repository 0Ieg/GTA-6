import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { ToastContainer } from 'react-toastify';
import './toastify.css'

const Styled = styled.div`
  
`
export const App:FC = ()=>{
  return (
    <Styled>
      <Header/>
      <Main/>
      <Footer/>
      <ToastContainer/>
    </Styled>
  )
}

