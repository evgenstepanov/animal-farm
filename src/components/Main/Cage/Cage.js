import React from 'react';
import Giraffe from './Giraffe';
import './Cage.scss';

export default function Cage() {
  return (
    <div className="Cage">
      <Giraffe />
      <Giraffe />
      <Giraffe /><Giraffe /><Giraffe /><Giraffe /><Giraffe />
      
    </div>
  );
}
