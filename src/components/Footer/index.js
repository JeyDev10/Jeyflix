import React from 'react';
import { FooterBase } from './styles';
import Logo from '../Logo';
import logoSrc from '../../assets/images/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <Logo src={logoSrc} />
      </a>
      <p>
        Projeto criado baseado na imsersão Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
