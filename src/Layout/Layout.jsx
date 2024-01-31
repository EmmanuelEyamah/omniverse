import React from 'react'
import { styled } from "styled-components";
import Footer from './Footer';
import Header from './Header';

const Root = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
`;
const Body = styled.main``

const Layout = ({ children}) => {
  return (
    <Root>
        <Header />
            <Body>
                { children }
            </Body>
        <Footer />
    </Root>
  )
}

export default Layout