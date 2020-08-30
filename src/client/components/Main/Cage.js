import React from 'react';
import Giraffe from './Giraffe';
import './Cage.scss';
import { StoreContext } from '../../context/store';

export default function Cage() {
  const {
    state: [state],
  } = React.useContext(StoreContext);

  return (
    <ul className="Cage">
      {state.map((features) => (
        <Giraffe key={features._id} features={features} />
      ))}
    </ul>
  );
}
