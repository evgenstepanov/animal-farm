import React from 'react';
import './GiraffeEditBtn.scss'

export default function GiraffeEditBtn({id, openEditButton}) {
  return (
    <div className="edit" onClick={()=>openEditButton(id)}>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}
