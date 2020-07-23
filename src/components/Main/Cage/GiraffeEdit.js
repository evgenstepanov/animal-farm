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

  function handlerName(e) {
    SetInput(Object.assign({}, input, { name: e.target.value }));
  }
  function handlerGender(e) {
    SetInput(Object.assign({}, input, { gender: e.target.value }));
  }
  function handlerWeight(e) {
    SetInput(Object.assign({}, input, { weight: e.target.value }));
  }
  function handlerHeight(e) {
    SetInput(Object.assign({}, input, { height: e.target.value }));
  }
  function handlerColor(e) {
    SetInput(Object.assign({}, input, { color: e.target.value }));
  }
  function handlerDiet(e) {
    SetInput(Object.assign({}, input, { diet: e.target.value }));
  }
  function handlerTemper(e) {
    SetInput(Object.assign({}, input, { temper: e.target.value }));
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
        onChange={handlerName}
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
          className="features-input__item gender"
          value={input.gender}
          onChange={handlerGender}
        />
        <input
          type="text"
          className="features-input__item "
          value={input.weight}
          onChange={handlerWeight}
        />
        <input
          type="text"
          className="features-input__item"
          value={input.height}
          onChange={handlerHeight}
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
            onChange={handlerColor}
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
            onChange={handlerDiet}
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
            onChange={handlerTemper}
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
