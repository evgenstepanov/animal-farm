import React, { useState } from 'react';
import './GiraffeEdit.scss';
import Motilda from '../../img/Motilda.png';

export default function GiraffeEdit(props) {
  const [input, setInput] = useState({
    name: props.name,
    gender: props.gender,
    weight: props.weight,
    height: props.height,
    color: props.color,
    diet: props.diet,
    temper: props.temper,
  });

  function combineState(name, value) {
    setInput(Object.assign({}, input, { [name]: value }));
  }

  function handlerInput(e) {
    const target = e.target;
    switch (target.name) {
      case 'name':
        combineState(target.name, target.value);
        break;
      case 'gender':
        combineState(target.name, target.value);
        break;
      case 'weight':
        combineState(target.name, target.value);
        break;
      case 'height':
        combineState(target.name, target.value);
        break;
      case 'color':
        combineState(target.name, target.value);
        break;
      case 'diet':
        combineState(target.name, target.value);
        break;
      case 'temper':
        combineState(target.name, target.value);
        break;
      default:
        break;
    }
  }

  function saveChanges() {
    let arr = props.state.slice().map((i) => {
      if (i.id === props.id) {
        return Object.assign({}, i, input);
      } else return i;
    });
    console.log(arr);
    props.setEdit(false);
    props.setState(arr);
  }

  return (
    <li className="Giraffe-edit">
      <div className="edit">
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <img className="Giraffe-edit__foto" src={Motilda} alt="Motilda" />
      <input
        name="name"
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
          name="gender"
          type="text"
          className="features-input__item gender"
          value={input.gender}
          onChange={handlerInput}
        />
        <input
          name="weight"
          type="text"
          className="features-input__item "
          value={input.weight}
          onChange={handlerInput}
        />
        <input
          name="height"
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
            name="color"
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
            name="diet"
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
            name="temper"
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
        onClick={saveChanges}
      />
    </li>
  );
}
