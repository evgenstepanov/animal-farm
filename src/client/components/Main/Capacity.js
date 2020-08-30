import React from 'react';
import './Capacity.scss';
import { StoreContext } from '../../context/store';

export default function Capacity() {
  const {
    state: [state],
    capacity: [capacity],
  } = React.useContext(StoreContext);

  let width = ~~((state.length / capacity) * 100) + '%';
  let style = { width: width };

  return (
    <div className="Capacity">
      <div className="Capacity__close">
        <i className="fas fa-times"></i>
      </div>
      <div className="Capacity__title-wrapper">
        <span className="Capacity__percentage">{width}</span>
        <h2 className="Capacity__title">Заполнение вольера</h2>
      </div>
      <div className="Capacity__line-wrapper">
        <div className="Capacity__line-container">
          <div className="Capacity__line" style={style}></div>
        </div>
        <div className="Capacity__info">Информация</div>
      </div>
    </div>
  );
}
