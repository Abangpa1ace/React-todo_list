import React from 'react';
import TodoItem from './todoitem';
import './todolist.css'

const TodoList = ({ todos, onCheckTodo, onInsertToggle, onChangeTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo =>
        <TodoItem todo={todo} key={todo.id} onCheckTodo={onCheckTodo} onInsertToggle={onInsertToggle} onChangeTodo={onChangeTodo} />
      )}
    </ul>
  )
};

export default TodoList;