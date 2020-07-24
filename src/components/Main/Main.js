import React, { useState } from 'react';
import './Main.scss';
import Cage from './Cage/Cage';
import CageName from './Cage/CageName';
import mailLogo from './img/mail-logo.svg';

export default function Main() {
  const [state, setState] = useState([
    {
      id: makeId(),
      name: 'Мотильда',
      gender: 'Ж',
      weight: 800,
      height: 4,
      color: 'Стандарт',
      diet: 'Растительная',
      temper: 'Кокетка',
    },
    {
      id: makeId(),
      name: 'Вольдемар',
      gender: 'М',
      weight: 600,
      height: 3,
      color: 'Белый',
      diet: 'Черная',
      temper: 'Страсть',
    },
    {
      id: makeId(),
      name: 'Вольдемар',
      gender: 'М',
      weight: 600,
      height: 3,
      color: 'Белый',
      diet: 'Черная',
      temper: 'Страсть',
    },
    {
      id: makeId(),
      name: 'Вольдемар',
      gender: 'М',
      weight: 600,
      height: 3,
      color: 'Белый',
      diet: 'Черная',
      temper: 'Страсть',
    },
  ]);

  function makeId() {
    return ~~(Math.random() * 10000);
  }

  function addNewItem() {
    let newCard = {
      id: makeId(),
      name: 'Имя',
      gender: '-',
      weight: '-',
      height: '-',
      color: '',
      diet: '',
      temper: '',
    };

    let arr = state.slice();
    arr.unshift(newCard);
    setState(arr);
  }

  return (
    <div className="Main">
      <div className="Main__header">
        <div className="cages-wrapper">
          <div className="cages">
            <CageName cageNumber="1" active />
            <CageName cageNumber="2" />
            <CageName cageNumber="3" />
          </div>
          <div className="cages-add">
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="contacts">
          <div className="bell contacts__bell">
            <i className="far fa-bell"></i>
          </div>
          <img
            className="mail-logo contacts__mail-logo"
            src={mailLogo}
            alt="logo"
          />
          <div className="mail contacts__mail">hello@giraffe.com</div>
        </div>
      </div>
      <div className="cage-header">
        <div className="cage-header__title">Жирафы</div>
        <div className="cage-header__add" onClick={addNewItem}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <Cage state={state} setState={setState} />
    </div>
  );
}
