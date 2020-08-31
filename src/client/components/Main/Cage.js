import React from 'react';
import Giraffe from './Giraffe';
import GiraffeEdit from './GiraffeEdit';
import './Cage.scss';
import { StoreContext } from '../../context/store';

export default function Cage() {
  const {
    state: [state],
    newCard: [newCard],
  } = React.useContext(StoreContext);

  let emptyCard = {
    name: 'Имя',
    gender: '-',
    weight: 0,
    height: 0,
    color: '',
    diet: '',
    temper: '',
    image: '',
  };

  return (
    <ul className="Cage">
      {newCard ? <GiraffeEdit features={emptyCard} /> : null}
      {state.map((features) => (
        <Giraffe key={features._id} features={features} />
      ))}
    </ul>
  );
}
