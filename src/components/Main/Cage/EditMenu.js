import React from 'react';
import './EditMenu.scss';

export default function EditMenu({ editIsOpen }) {
  let hidden = editIsOpen ? '' : ' hidden';
  console.log(editIsOpen);
  return (
    <div className={'EditMenu' + hidden}>
      <button className="button EditMenu__edit" autoFocus>
        <i className="EditMenu__icon fas fa-pencil-alt"></i>Редактировать
      </button>
      <button className="button EditMenu__delete">
        <i className="EditMenu__icon fas fa-pencil-alt"></i>Удалить
      </button>
    </div>
  );
}
