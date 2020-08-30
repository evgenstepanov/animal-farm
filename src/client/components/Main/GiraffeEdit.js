import React, { useState } from 'react';
import './GiraffeEdit.scss';
import Motilda from '../../img/Motilda.png';
import { StoreContext } from '../../context/store';
import axios from 'axios';

export default function GiraffeEdit({ features, editMode, setEditMode }) {
  const {
    state: [state, setState],
  } = React.useContext(StoreContext);

  const [input, setInput] = useState({
    name: features.name,
    gender: features.gender,
    weight: features.weight,
    height: features.height,
    color: features.color,
    diet: features.diet,
    temper: features.temper,
  });

  function saveChanges(id) {
    const changeData = async () => {
      const result = await axios.put(
        `http://localhost:8080/api/giraffe/${id}`,
        input
      );
      if (result.status === 200) {
        let arr = state.slice().map((item) => {
          if (item._id === id) {
            return { ...item, ...input };
          } else return item;
        });
        setState(arr);
        setEditMode(!editMode);
      }
    };
    changeData();
  }

  function handlerInput(e) {
    const target = e.target;
    setInput({ ...input, ...{ [target.name]: target.value } });
  }

  return (
    <li className="Giraffe-edit">
      <div className="edit">
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <img className="Giraffe-edit__foto" src={Motilda} alt="Motilda" />
      <input
        autoFocus
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
        onClick={() => {
          saveChanges(features._id);
        }}
        disabled={features.saveIsDisable}
      />
    </li>
  );
}
