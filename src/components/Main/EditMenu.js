import React from 'react';
import { StoreContext } from '../../service/store';
import './EditMenu.scss';

export default function EditMenu({id}) {
  const {
    state: [state, setState],
  } = React.useContext(StoreContext);

  function editCard() {
    // setEdit(!props.edit);
    // setToggleMenu(!props.toggleMenu);
  }

  function deleteCard(id) {
    setState(state.slice().filter((i) => i.id !== id));
  }

  return (
    <div className="EditMenu">
      <button autoFocus className="button EditMenu__edit" onClick={editCard}>
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
