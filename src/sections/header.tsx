import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <header>
      <div className="flex flex-col items-center justify-center p-2 mt-4">
        <img src={logo} alt="threadify logo" className="w-h4 h-24"/>
      </div>
    </header>
  );
}

export default Header;