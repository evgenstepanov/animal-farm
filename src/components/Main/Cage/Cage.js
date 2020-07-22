import React from 'react';
import Giraffe from './Giraffe';
import './Cage.scss';

export default function Cage({ state, setState }) {

  function deleteCard(id) {
    let deleteIndex;
    state.forEach((item, index) => {
      if (item.id === id) deleteIndex = index;
    });
    let arr = state.slice();
    arr.splice(deleteIndex, 1);
    setState(arr);
  }

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
          state={state}
          setState={setState}
          deleteCard={deleteCard}
        />
      ))}
    </ul>
  );
}
