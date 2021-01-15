import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color:var(--black2);
    color:var(--white);
    flex:1;

    ${({ paddingOff }) => !paddingOff && css`
        padding-right:5%;
        padding-left:5%;
      `} 
`;

export default function PageDefault({ children, paddingOff }) {
  return (
    <>
      <Menu />
      <Main paddingOff={paddingOff}>
        {children}
      </Main>
      <Footer />
    </>

  );
}
