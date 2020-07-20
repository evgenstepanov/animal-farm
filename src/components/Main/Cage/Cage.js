import React from 'react';
import Giraffe from './Giraffe';
import './Cage.scss';

export default function Cage({ animals, click, openEditButton }) {
  return (
    <ul className="Cage">
      {animals.map((i) => (
        <Giraffe
          key={i.id}
          id={i.id}
          name={i.name}
          gender={i.gender}
          weight={i.weight}
          height={i.height}
          color={i.color}
          diet={i.diet}
          temper={i.temper}
          click={click}
          openEditButton={openEditButton}
          editIsOpen={i.editIsOpen}
        />
      ))}
    </ul>
  );
}
