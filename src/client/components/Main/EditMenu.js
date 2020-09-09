import React from 'react';
import { StoreContext } from '../../context/store';
import './EditMenu.scss';
import axios from 'axios';

export default function EditMenu({ id }) {
  const {
    state: [state, setState],
    idCardMenu: [, setIdCardMenu],
    idCardEditMode: [, setIdCardEditMode],
  } = React.useContext(StoreContext);

  const openEditMode = () => {
    setIdCardEditMode(id);
    setIdCardMenu('');
  };

  const deleteCard = () => {
    const deleteData = async () => {
      const result = await axios.delete(
        `/api/giraffe/${id}`
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
        onClick={openEditMode}
      >
        <i className="EditMenu__icon fas fa-pencil-alt"></i>Редактировать
      </button>
      <button className="button EditMenu__delete" onClick={deleteCard}>
        <i className="EditMenu__icon far fa-trash-alt"></i>Удалить
      </button>
    </div>
  );
}
