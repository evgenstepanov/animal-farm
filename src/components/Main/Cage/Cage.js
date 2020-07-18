import React from 'react';
import Giraffe from './Giraffe';
import './Cage.scss';

export default function Cage({ animals }) {
  let list = animals.map((i) => (
    <Giraffe
      key={i.id}
      name={i.name}
      gender={i.gender}
      weight={i.weight}
      height={i.height}
      color={i.color}
      diet={i.diet}
      temper={i.temper}
    />
  ));
  return <div className="Cage">{list}</div>;
}
