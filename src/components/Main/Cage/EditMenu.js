import React from 'react';
import { useEffect, useRef } from 'react';
import './EditMenu.scss';

export default function EditMenu(props) {
  const buttonOnFocus = useRef(null);

  useEffect(() => {
    buttonOnFocus.current.focus();
  });

  function editCard() {
    props.SetEdit(!props.edit);
  }

  if (props.toggleMenu) {
    return (
      <div className="EditMenu">
        <button
          className="button EditMenu__edit"
          onClick={editCard}
          ref={buttonOnFocus}
        >
          <i className="EditMenu__icon fas fa-pencil-alt"></i>Редактировать
        </button>
        <button
          className="button EditMenu__delete"
          onClick={() => {
            props.deleteCard(props.id);
          }}
        >
          <i className="EditMenu__icon far fa-trash-alt"></i>Удалить
        </button>
      </div>
    );
  }
}
