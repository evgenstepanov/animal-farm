import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [state, setState] = useState([]);
  const [capacity, setCapacity] = useState(6);
  const [idCardMenu, setIdCardMenu] = useState('');
  const [idCardEditMode, setIdCardEditMode] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8080/api/giraffe');
      setState(result.data);
    };
    fetchData();
  }, []);

  const store = {
    state: [state, setState],
    capacity: [capacity, setCapacity],
    idCardMenu: [idCardMenu, setIdCardMenu],
    idCardEditMode: [idCardEditMode, setIdCardEditMode],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};