import React, { useState, useEffect } from 'react';
import './Giraffe.scss';
import GiraffeEdit from './GiraffeEdit';
import EditMenu from './EditMenu';
import { StoreContext } from '../../context/store';

export default function Giraffe({ features }) {
  const {
    idCardMenu: [idCardMenu, setIdCardMenu],
    idCardEditMode: [idCardEditMode],
    newCard: [newCard],
  } = React.useContext(StoreContext);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if ((idCardMenu !== features._id && menu) || idCardMenu === features._id) {
      setMenu(!menu);
    }
  }, [idCardMenu]);

  const toggleEditMenu = (id) => {
    idCardMenu !== id ? setIdCardMenu(id) : setMenu(!menu);
  };

  return idCardEditMode === features._id ? (
    <GiraffeEdit features={features} />
  ) : (
    <li className="Giraffe">
      <div className="edit" onClick={() => toggleEditMenu(features._id)}>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      {menu ? <EditMenu id={features._id} /> : null}
      <div className="foto">
        {features.image ? (
          <img
            className="foto__img"
            src={`uploads/${features.image + '.jpg'}`}
            alt={features.image}
          />
        ) : (
          <i class="foto__empty fas fa-camera"></i>
        )}
      </div>
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
