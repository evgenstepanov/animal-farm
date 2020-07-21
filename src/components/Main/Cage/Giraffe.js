import React from 'react';
import './Giraffe.scss';
import Motilda from '../img/Motilda.png';
import GiraffeEditBtn from './GiraffeEditBtn';
import EditMenu from './EditMenu';

export default function Giraffe(props) {
  return (
    <li className="Giraffe">
      <GiraffeEditBtn id={props.id} openEditButton={props.openEditButton} />
      <EditMenu
        id={props.id}
        editIsOpen={props.editIsOpen}
        deleteCard={props.deleteCard}
      />
      <img className="foto" src={Motilda} alt="Motilda" />
      <h2 className="name">{props.name}</h2>
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
