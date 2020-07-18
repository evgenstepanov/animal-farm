import React, { useState } from 'react';
import './Main.scss';
import Cage from './Cage/Cage';
import CageName from './Cage/CageName';
import mailLogo from './img/mail-logo.svg';

export default function Main() {
  const [animals, setAnimal] = useState([
    {
      id: 1,
      name: 'Мотильда',
      gender: 'Ж',
      weight: 800,
      height: 4,
      color: 'Стандарт',
      diet: 'Растительная',
      temper: 'Кокетка',
    },
    {
      id: 2,
      name: 'Костя',
      gender: 'М',
      weight: 600,
      height: 3,
      color: 'Белый',
      diet: 'Черная',
      temper: 'Говнюк',
    },
    {
      id: 3,
      name: 'Слава',
      gender: 'М',
      weight: 700,
      height: 3.8,
      color: 'В пятнышку',
      diet: 'Королевская',
      temper: 'Странный',
    },
    {
      id: 4,
      name: 'Ленин',
      gender: 'М',
      weight: 700,
      height: 3.8,
      color: 'В пятнышку',
      diet: 'Королевская',
      temper: 'Странный',
    }
  ]);

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
        <div className="cage-header__add">
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <Cage animals={animals} />
    </div>
  );
}
