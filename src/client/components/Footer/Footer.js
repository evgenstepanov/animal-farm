import React from 'react';
import Logo from './Logo';
import Menu from './Menu/Menu';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='Footer App__footer'>
      <Logo />
      <Menu />
    </div>
  );
}
