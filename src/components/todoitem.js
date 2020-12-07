import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'; 
import './todoitem.css';

const TodoItem = ({ todo, onCheckTodo, onInsertToggle, onChangeTodo }) => {
  const { id, text, checked } = todo;
  return (
    <li className='todo-item'>
      <div className={`item-content ${checked ? 'checked' : ''}`}>
        <div className='svg'>
          {checked ? 
            <MdCheckBox onClick={() => {onCheckTodo(id)}} /> : 
            <MdCheckBoxOutlineBlank onClick={() => {onCheckTodo(id)}} />}
        </div>
        <div className='text' onClick={() => {
          onInsertToggle();
          onChangeTodo(todo);
        }}>{text}</div>
      </div>
    </li>
  )
};

export default TodoItem;