import React from 'react';
import './Capacity.scss';

export default function Capacity() {
  return (
    <div className="Capacity">
      <div className="Capacity__close">
        <i className="fas fa-times"></i>
      </div>
      <div className="Capacity__title-wrapper">
        <span className="Capacity__percentage">75%</span>
        <h2 className="Capacity__title">Заполнение вольера</h2>
      </div>
      <div className="Capacity__line-wrapper">
        <div className="Capacity__line-container">
          <div className="Capacity__line"></div>
        </div>
        <div className="Capacity__info">Информация</div>
      </div>
    </div>
  );
}
