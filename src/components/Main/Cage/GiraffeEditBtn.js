import React from 'react';

export default function GiraffeEditBtn({id, click}) {
  return (
    <div className="edit" onClick={()=>click(id)}>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}
