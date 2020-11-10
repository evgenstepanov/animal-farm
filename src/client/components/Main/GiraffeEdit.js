import React, { useState } from 'react';
import './GiraffeEdit.scss';
import { StoreContext } from '../../context/store';
import axios from 'axios';

export default function GiraffeEdit({ features }) {
  const {
    state: [state, setState],
    newCard: [newCard, setNewCard],
    idCardEditMode: [, setIdCardEditMode],
  } = React.useContext(StoreContext);
  const [isDisable, setIsDisable] = useState(features._id ? false : true);

  const [input, setInput] = useState({
    name: features.name,
    gender: features.gender,
    weight: features.weight,
    height: features.height,
    color: features.color,
    diet: features.diet,
    temper: features.temper,
    image: features.image,
  });

  const handleInput = e => {
    const target = e.target;
    if (isDisable) setIsDisable(!isDisable);
    setInput({ ...input, ...{ [target.name]: target.value } });
  };

  const update = async id => {
    const result = await axios.put(`/api/giraffe/${id}`, input);
    if (result.status === 200) {
      let arr = state.map(item => {
        if (item._id === features._id) {
          return { ...item, ...input };
        } else return item;
      });
      setState(arr);
      setIdCardEditMode('');
    }
  };

  const create = async () => {
    const result = await axios.post(`/api/giraffe`, input);
    let newState = [result.data, ...state];
    setState(newState);
    setNewCard(!newCard);
  };

  const saveChanges = id => {
    const changeData = id ? id => update(id) : create;
    changeData(id);
  };

  return (
    <li className='Giraffe-edit'>
      <div className='Giraffe-edit__foto'>
        {input.image ? (
          <img
            className='Giraffe-edit__foto-img'
            src={`uploads/${input.image + '.jpg'}`}
            alt={input.image}
          />
        ) : (
          <i className='Giraffe-edit__foto-empty fas fa-camera'></i>
        )}
      </div>
      <input
        autoFocus
        name='name'
        type='text'
        className='Giraffe-edit__name'
        value={input.name}
        onChange={handleInput}
      />
      <div className='icons'>
        <div className='icons__item'>
          <i className='fas fa-venus-mars'></i>
        </div>
        <div className='icons__item'>
          <i className='fas fa-balance-scale'></i>
        </div>
        <div className='icons__item'>
          <i className='fas fa-ruler-vertical'></i>
        </div>
      </div>
      <div className='features-input'>
        <input
          name='gender'
          type='text'
          className='features-input__item gender'
          value={input.gender}
          onChange={handleInput}
        />
        <input
          name='weight'
          type='text'
          className='features-input__item '
          value={input.weight}
          onChange={handleInput}
        />
        <input
          name='height'
          type='text'
          className='features-input__item'
          value={input.height}
          onChange={handleInput}
        />
      </div>
      <div className='Giraffe-Edit__features-line'>
        <div className='Giraffe-Edit__features-line-item'>
          <span className='features-line__type'>
            <strong>Цвет: </strong>
          </span>
          <input
            name='color'
            type='text'
            className='Giraffe-edit__line'
            value={input.color}
            onChange={handleInput}
          />
        </div>
        <div className='Giraffe-Edit__features-line-item'>
          <span className='features-line__type'>
            <strong>Диета: </strong>
          </span>
          <input
            name='diet'
            type='text'
            className='Giraffe-edit__line'
            value={input.diet}
            onChange={handleInput}
          />
        </div>
        <div className='Giraffe-Edit__features-line-item Giraffe-Edit__features-line-item--last'>
          <span className='features-line__type'>
            <strong>Характер: </strong>
          </span>
          <input
            name='temper'
            type='text'
            className='Giraffe-edit__line'
            value={input.temper}
            onChange={handleInput}
          />
        </div>
      </div>
      <input
        type='button'
        className='Giraffe-edit__btn-save'
        value='Сохранить'
        onClick={() => {
          saveChanges(features._id);
        }}
        disabled={isDisable}
      />
    </li>
  );
}
