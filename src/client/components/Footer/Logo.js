import React from 'react';
import './Logo.scss';
import imgLogo from '../../img/giraffe_logo.png';

export default function Logo() {
  return (
    <a className='logo footer__logo' href='/'>
      <img className='logo__img' src={imgLogo} alt='logo' />
      <div className='logo__title'>
        <h1 className='logo__title-text'>Ферма fуженных Жирафов</h1>
        <p className='logo__subtitle'>России и СНГ</p>
      </div>
    </a>
  );
}
