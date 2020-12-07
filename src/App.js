import React, { useState } from 'react';
import './App.css';
import { MdAddCircle } from 'react-icons/md'; 
import Template from './components/template'
import TodoList from './components/todolist'
import TodoInsert from './components/todoinsert'

let newID = 4;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {id: 1, text: "할일 1", checked: false},
    {id: 2, text: "할일 2", checked: false},
    {id: 3, text: "할일 3", checked: false},
  ])

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev)
  }
  
  const onChangeTodo = (todo) => {
    setSelectedTodo(todo);
  }

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo))
  }

  const onRemove = (id) => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  const onAddTodo = (text) => {
    if (text === '') {
      alert('할 일을 입력해주세요.')
    }
    else {
      setTodos(todos => [
        ...todos,
        {id: newID, text, checked: false}
      ])
      newID++;
    }
  }

  const onCheckTodo = (id) => {
    setTodos(todos => todos.map(
      todo => (todo.id === id) ? {...todo, checked: !todo.checked} : todo
    ))
  }

  return (
    <div className="App">
      <Template todoLength={todos.length}>
        <TodoList todos={todos} onCheckTodo={onCheckTodo} onInsertToggle={onInsertToggle} onChangeTodo={onChangeTodo} />
        <div className="add-btn" onClick={onInsertToggle}><MdAddCircle /></div>
        {insertToggle && <TodoInsert 
          onInsertToggle={onInsertToggle} 
          onAddTodo={onAddTodo} 
          selectedTodo={selectedTodo}
          onUpdate={onUpdate}
          onRemove={onRemove} />}
      </Template>
      
    </div>
  );
}

export default App;
