import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import logoSrc from '../../assets/images/logo.png';

import Button from '../Button';

import './style.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <Logo src={logoSrc} />
      </Link>
      <Button move as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
} export default Menu;
