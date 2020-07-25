import React, {useState} from 'react';
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
    },
  ];

  const [state, setState] = React.useState(firstState);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [edit, setEdit] = useState(false);

  const store = {
    state: [state, setState],
    toggleEditMenu: [toggleMenu, setToggleMenu],
    edit: [edit, setEdit],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

// const [state, setState] = useState();
