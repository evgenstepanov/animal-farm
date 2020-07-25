import React from 'react';
import './Giraffe.scss';
import Motilda from '../../img/Motilda.png';
import GiraffeEdit from './GiraffeEdit';
import EditMenu from './EditMenu';
import { StoreContext } from '../../service/store';

export default function Giraffe({ id, features }) {
  const {
    state: [state, setState],
  } = React.useContext(StoreContext);
  // console.log(state);
  // let features = state.filter((i) => i.id === id)[0];

  function toggleEditMenu() {
    let arr = state.slice().map((item) => {
      if (item.id === id) {
        item.menuIsOpen = !item.menuIsOpen;
        return item;
      }
      return item;
    });
    setState(arr);
  }

  let menu;
  if (features.menuIsOpen)
    menu = <EditMenu toggleEditMenu={toggleEditMenu} id={id} />;

  if (features.editMode)
    return (
      <GiraffeEdit
        key={features.id}
        id={features.id}
        name={features.name}
        gender={features.gender}
        weight={features.weight}
        height={features.height}
        color={features.color}
        diet={features.diet}
        temper={features.temper}
      />
    );
  return (
    <li className="Giraffe">
      <div className="edit" onClick={toggleEditMenu}>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      {menu}
      <img className="foto" src={Motilda} alt="Motilda" />
      <h2 className="name">{features.name}</h2>
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
        <div className="features__item features__venus">{features.gender}</div>
        <div className="features__item features__scale">{features.weight}</div>
        <div className="features__item features__ruler">{features.height}</div>
      </div>
      <div className="features-line">
        <div className="features-line__item">
          <span className="features-line__type">
            <strong>Цвет: </strong>
          </span>
          <span className="features-line__value">{features.color}</span>
        </div>
        <div className="features-line__item">
          <span className="features-line__type">
            <strong>Диета: </strong>
          </span>
          <span className="features-line__value">{features.diet}</span>
        </div>
        <div className="features-line__item features-line__item--last">
          <span className="features-line__type">
            <strong>Характер: </strong>
          </span>
          <span className="features-line__value">{features.temper}</span>
        </div>
      </div>
    </li>
  );
}
