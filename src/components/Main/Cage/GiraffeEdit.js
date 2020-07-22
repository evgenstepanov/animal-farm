import React from 'react';
import './GiraffeEdit.scss';
import Motilda from '../img/Motilda.png';

export default function GiraffeEdit(props) {
  return (
    <li className="Giraffe-edit">
      <div className="edit">
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <img className="Giraffe-edit__foto" src={Motilda} alt="Motilda" />
      <input type='text' className="Giraffe-edit__name" placeholder='Имя'>{props.name}</input>
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
        <div className="features__item features__venus">{props.gender}</div>
        <div className="features__item features__scale">{props.weight}</div>
        <div className="features__item features__ruler">{props.height}</div>
      </div>
      <div className="features-line">
        <div className="features-line__item">
          <span className="features-line__type">
            <strong>Цвет: </strong>
          </span>
          <span className="features-line__value">{props.color}</span>
        </div>
        <div className="features-line__item">
          <span className="features-line__type">
            <strong>Диета: </strong>
          </span>
          <span className="features-line__value">{props.diet}</span>
        </div>
        <div className="features-line__item features-line__item--last">
          <span className="features-line__type">
            <strong>Характер: </strong>
          </span>
          <span className="features-line__value">{props.temper}</span>
        </div>
      </div>
    </li>
  );
}
