import React from 'react';
import './Giraffe.scss';
import Motilda from '../img/Motilda.png';

export default function Giraffe(props) {
  return (
    <div className="Giraffe">
      <div className="edit">
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <img className="foto" src={Motilda} alt="Motilda" />
      <h2 className="name">Мотильда</h2>
      <div className="icons">
        <div className="icons__item">
          <i className="fas fa-venus-mars"></i>
        </div>
        <div className="icons__item">
          <i className="fas fa-balance-scale"></i>
        </div>
        <div className="icons__item">
          <i className="fas fa-ruler-vertical"></i>
        </div>
      </div>
      <div className="features">
        <div className="features__item features__venus">Ж</div>
        <div className="features__item features__scale">800</div>
        <div className="features__item features__ruler">4</div>
      </div>
      <div className="features-line">
        <div className="features-line__item">
          <span className="features-line__type">
            <strong>Цвет: </strong>
          </span>
          <span className="features-line__value">Стандарт</span>
        </div>
        <div className="features-line__item">
          <span className="features-line__type">
            <strong>Диета: </strong>
          </span>
          <span className="features-line__value">Растительная</span>
        </div>
        <div className="features-line__item features-line__item--last">
          <span className="features-line__type">
            <strong>Характер: </strong>
          </span>
          <span className="features-line__value">Кокетка</span>
        </div>
      </div>
    </div>
  );
}
