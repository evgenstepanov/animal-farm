import React, { useState } from 'react';
export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const firstState = [
    {
      id: 1,
      name: 'Мотильда',
      gender: 'Ж',
      weight: 800,
      height: 4,
      color: 'Стандарт',
      diet: 'Растительная',
      temper: 'Кокетка',
      menuIsOpen: false,
      editMode: false,
    },
    {
      id: 2,
      name: 'Вольдемар',
      gender: 'М',
      weight: 600,
      height: 3,
      color: 'Белый',
      diet: 'Букетная',
      temper: 'Страсть',
      menuIsOpen: false,
      editMode: false,
    },
  ];
  const [state, setState] = useState(firstState);

  function toggleEditMenu(id) {
    let arr = state.slice().map((item) => {
      if (item.id === id) {
        item.menuIsOpen = !item.menuIsOpen;
        return item;
      }
      return item;
    });
    setState(arr);
  }

  function toggleEditMode(id) {
    let arr = state.slice().map((item) => {
      if (item.id === id) {
        item.editMode = !item.editMode;
        return item;
      }
      return item;
    });
    setState(arr);
  }

  const store = {
    state: [state, setState],
    toggleEditMenu,
    toggleEditMode,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
