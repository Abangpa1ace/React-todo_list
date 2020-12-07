import React, { useState, useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md'; 
import { TiTrash, TiPencil } from 'react-icons/ti'
import './todoinsert.css'

const TodoInsert = ({ onInsertToggle, onAddTodo, selectedTodo, onUpdate, onRemove }) => {
  const [value, setValue] = useState('')
  
  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(value);
    setValue('');
    onInsertToggle();
  }

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text)
    }
  },[selectedTodo]);

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id, value)} : handleSubmit}>
        <h5>Input New To-do Item!</h5>
        <input type='text' placeholder="Please Type..." value={value} onChange={handleValue}></input>
        {selectedTodo ? 
          <div className='button-container'>
            <button><TiPencil onClick={() => {onUpdate(selectedTodo.id, value)}}/></button>
            <button><TiTrash onClick={() => onRemove(selectedTodo.id)} /></button>
          </div> :
          <button type='submit'><MdAddCircle /></button>}
      </form>
    </div>
  )
};

export default TodoInsert;