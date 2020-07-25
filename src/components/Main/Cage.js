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
        <Giraffe
          key={item.id}
          id={item.id}
          name={item.name}
          gender={item.gender}
          weight={item.weight}
          height={item.height}
          color={item.color}
          diet={item.diet}
          temper={item.temper}
        />
      ))}
    </ul>
  );
}
