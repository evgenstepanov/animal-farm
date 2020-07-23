import React, { useState } from 'react';
import './GiraffeEdit.scss';
import Motilda from '../img/Motilda.png';

export default function GiraffeEdit(props) {
  const [input, SetInput] = useState({
    name: props.name,
    gender: props.gender,
    weight: props.weight,
    height: props.height,
    color: props.color,
    diet: props.diet,
    temper: props.temper,
  });

  function handlerInput() {
    SetInput();
  }
  return (
    <li className="Giraffe-edit">
      <div className="edit">
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <img className="Giraffe-edit__foto" src={Motilda} alt="Motilda" />
      <input
        type="text"
        className="Giraffe-edit__name"
        value={input.name}
        onChange={handlerInput}
      />
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
        <input
          type="text"
          className="features-input__item"
          value={input.gender}
          onChange={handlerInput}
        />
        <input
          type="text"
          className="features-input__item"
          value={input.weight}
          onChange={handlerInput}
        />
        <input
          type="text"
          className="features-input__item"
          value={input.height}
          onChange={handlerInput}
        />
      </div>
      <div className="Giraffe-Edit__features-line">
        <div className="Giraffe-Edit__features-line-item">
          <span className="features-line__type">
            <strong>Цвет: </strong>
          </span>
          <input
            type="text"
            className="Giraffe-edit__line"
            value={input.color}
            onChange={handlerInput}
          />
        </div>
        <div className="Giraffe-Edit__features-line-item">
          <span className="features-line__type">
            <strong>Диета: </strong>
          </span>
          <input
            type="text"
            className="Giraffe-edit__line"
            value={input.diet}
            onChange={handlerInput}
          />
        </div>
        <div className="Giraffe-Edit__features-line-item Giraffe-Edit__features-line-item--last">
          <span className="features-line__type">
            <strong>Характер: </strong>
          </span>
          <input
            type="text"
            className="Giraffe-edit__line"
            value={input.temper}
            onChange={handlerInput}
          />
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
