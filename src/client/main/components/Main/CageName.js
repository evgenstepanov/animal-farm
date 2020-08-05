import React from 'react';
import './CageName.scss';

export default function Cage__name(props) {
  return (
    <div className={'Cage-name' + (props.active ? ' active' : '')}>
      Вольер {props.cageNumber}
    </div>
  );
}
