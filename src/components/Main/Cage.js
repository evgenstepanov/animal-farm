import React from 'react';
import Giraffe from './Giraffe';
import './Cage.scss';
import { StoreContext } from '../../service/store';

export default function Cage() {
  const {
    state: [state],
  } = React.useContext(StoreContext);

  return (
    <ul className="Cage">
      {state.map((item) => (
        <Giraffe key={item.id} features={item}/>
      ))}
    </ul>
  );
}
