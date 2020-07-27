import React from 'react';
import { StoreContext } from '../../service/store';
import './EditMenu.scss';

export default function EditMenu({ id }) {
  const {
    state: [state, setState],
    toggleEditMenu,
    toggleEditMode,
  } = React.useContext(StoreContext);

  function deleteCard(id) {
    setState(state.slice().filter((i) => i.id !== id));
  }

  return (
    <div className="EditMenu">
      <button
        autoFocus
        className="button EditMenu__edit"
        onClick={() => {
          toggleEditMenu(id);
          toggleEditMode(id);
        }}
      >
        <i className="EditMenu__icon fas fa-pencil-alt"></i>Редактировать
      </button>
      <button
        className="button EditMenu__delete"
        onClick={() => {
          deleteCard(id);
        }}
      >
        <i className="EditMenu__icon far fa-trash-alt"></i>Удалить
      </button>
    </div>
  );
}
