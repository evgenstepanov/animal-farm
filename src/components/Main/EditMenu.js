import React from 'react';
import { StoreContext } from '../../service/store';
import './EditMenu.scss';

export default function EditMenu(props) {
  const {
    state: [state, setState],
  } = React.useContext(StoreContext);

  function editCard() {
    props.setEdit(!props.edit);
    props.setToggleMenu(!props.toggleMenu);
  }

  function deleteCard(id) {
    setState(state.slice().filter((i) => i.id !== id));
  }

  if (props.toggleMenu) {
    return (
      <div className="EditMenu">
        <button
          autoFocus
          className="button EditMenu__edit"
          onClick={editCard}
        >
          <i className="EditMenu__icon fas fa-pencil-alt"></i>Редактировать
        </button>
        <button
          className="button EditMenu__delete"
          onClick={() => {
            deleteCard(props.id);
          }}
        >
          <i className="EditMenu__icon far fa-trash-alt"></i>Удалить
        </button>
      </div>
    );
  }
}
