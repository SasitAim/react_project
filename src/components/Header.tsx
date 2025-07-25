// src/components/Header.tsx
import React, { useState } from 'react';
import '../styles/style_header.css';

const Header: React.FC = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <header>
      <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#" className="icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
