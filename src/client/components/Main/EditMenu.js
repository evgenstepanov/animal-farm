import React from 'react';
import { StoreContext } from '../../context/store';
import './EditMenu.scss';
import axios from 'axios';

export default function EditMenu({ id, editMode, setEditMode }) {
  const {
    state: [state, setState],
    idCardMenu: [idCardMenu, setIdCardMenu],
  } = React.useContext(StoreContext);

  const openEditMode = () => {
    setEditMode(!editMode);
    setIdCardMenu('');
  };

  const deleteCard = (id) => {
    const deleteData = async () => {
      const result = await axios.delete(
        `http://localhost:8080/api/giraffe/${id}`
      );
      if (result.status === 200) {
        setState(state.slice().filter((i) => i._id !== id));
      }
    };
    deleteData();
  };

  return (
    <div className="EditMenu">
      <button
        autoFocus
        className="button EditMenu__edit"
        onClick={() => {
          openEditMode(id);
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
