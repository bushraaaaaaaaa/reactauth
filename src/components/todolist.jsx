import React, { useState } from 'react';
import {
  MDBInput
}
from 'mdb-react-ui-kit';
const Todolist = () => {
  let [todo, settodo] = useState([""]);
  let [newtodo, setnewtodo] = useState("");
  let [editIndex, setEditIndex] = useState(null);

  let updatetolist = (event) => {
    setnewtodo(event.target.value);
  };

  let additems = () => {
    if (editIndex !== null) {
      const updatedTodo = [...todo];
      updatedTodo[editIndex] = newtodo;
      settodo(updatedTodo);
      setEditIndex(null);
    } else {
     
      settodo([...todo, newtodo]);
    }
    setnewtodo("");
  };

  let editItem = (index) => {
    
    setEditIndex(index);
    setnewtodo(todo[index]);
  };

  let deleteItem = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    settodo(updatedTodo);
    setEditIndex(null); 
  };

  let deleteallitems = () => {
    settodo([]);
    setEditIndex(null); 
  };

  return (
    <div className="todocontainer">
      <div className="inner">
      <h1>My todolist</h1>
      <MDBInput wrapperClass='mb-4' label='TODO' id='formControlLg' type='text' size="lg" value={newtodo} onChange={updatetolist} />
      <button onClick={additems}>{editIndex !== null ? 'Update' : 'Add items'}</button>
      <button onClick={deleteallitems}>Delete All</button>

      <ul>
        {todo.map((currenttodos, index) => {
          return (
            <li key={index}>
              {currenttodos}
              <button onClick={() => editItem(index)}>Edit</button>
              <button onClick={() => deleteItem(index)}><i class="bi bi-trash-fill"></i></button>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
};

export default Todolist;
