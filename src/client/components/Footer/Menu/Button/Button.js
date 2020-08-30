import React from 'react';
import './Button.scss';

export default function Button(props) {
  let classNameButton =
    props.status === 'active' ? props.className + ' active' : props.className;
  return (
    <a href="/" className={classNameButton}>
      <i className={'Button__icon fas fa-' + props.type}></i>
      {props.name}
    </a>
  );
}
