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
      <input type="text" className="Giraffe-edit__name" value="Волера" />
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
      <div className="features-input">
        <input type="text" className="features-input__item" value="М" />
        <input type="text" className="features-input__item" value="600" />
        <input type="text" className="features-input__item" value="3" />
      </div>
      <div className="features-line">
        <div className="features-line__item">
          <span className="features-line__type">
            <strong>Цвет: </strong>
          </span>
          <input type="text" className="Giraffe-edit__line" value="Белый" />
        </div>
        <div className="features-line__item">
          <span className="features-line__type">
            <strong>Диета: </strong>
          </span>
          <input type="text" className="Giraffe-edit__line" value="Черная" />
        </div>
        <div className="features-line__item features-line__item--last">
          <span className="features-line__type">
            <strong>Характер: </strong>
          </span>
          <input type="text" className="Giraffe-edit__line" value="Страсть" />
        </div>
      </div>
      <input
        type="button"
        className="Giraffe-edit__btn-save"
        value="Сохранить"
      />
    </li>
  );
}
