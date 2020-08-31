import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [state, setState] = useState([]);
  const [capacity, setCapacity] = useState(6);
  const [idCardMenu, setIdCardMenu] = useState('');
  const [idCardEditMode, setIdCardEditMode] = useState('');
  const [newCard, setNewCard] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8080/api/giraffe');
      setState(result.data.reverse());
    };
    fetchData();
  }, []);

  const store = {
    state: [state, setState],
    capacity: [capacity, setCapacity],
    idCardMenu: [idCardMenu, setIdCardMenu],
    idCardEditMode: [idCardEditMode, setIdCardEditMode],
    newCard: [newCard, setNewCard],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
