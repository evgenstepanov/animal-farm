import React, { useEffect } from 'react';
import './Main.scss';
import Cage from './Cage';
import CageName from './CageName';
import { StoreContext } from '../../context/store';
import mailLogo from '../../img/mail-logo.svg';
import Capacity from './Capacity';

export default function Main() {
  const {
    newCard: [newCard, setNewCard],
  } = React.useContext(StoreContext);

  const addNewItem = () => {
    setNewCard(!newCard);
  };

  return (
    <div className='Main'>
      <div className='Main__header'>
        <div className='cages-wrapper'>
          <div className='cages'>
            <CageName cageNumber='1' active />
            <CageName cageNumber='2' />
            <CageName cageNumber='3' />
          </div>
          <div className='cages-add'>
            <i className='fas fa-plus'></i>
          </div>
        </div>
        <div className='contacts'>
          <div className='bell contacts__bell'>
            <i className='far fa-bell'></i>
          </div>
          <img
            className='mail-logo contacts__mail-logo'
            src={mailLogo}
            alt='logo'
          />
          <div className='mail contacts__mail'>hello@giraffe.com</div>
        </div>
      </div>
      <div className='cage-header'>
        <div className='cage-header__title'>Жирафы</div>
        <div className='cage-header__add' onClick={addNewItem}>
          <i className='fas fa-plus'></i>
        </div>
      </div>
      <Cage />
      <Capacity />
    </div>
  );
}
