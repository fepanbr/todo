import { useState } from 'react';
import styled from './App.module.css';
import Adder from './components/Adder';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  const [filter, setFilter] = useState('All');
  const [todos, setTodos] = useState([]);

  const handleChangeFilter = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleAddTodo = (content) => {
    const lastTodoId =
      todos.sort((a, b) => a.id - b.id)[todos.length - 1]?.id ?? 0;

    setTodos([...todos, { id: lastTodoId + 1, content, isCompleted: false }]);
  };

  const handleToggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styled.app}>
      <Header filter={filter} onClick={handleChangeFilter} />
      <Content
        onDelete={handleDelete}
        toggleCheck={handleToggle}
        filter={filter}
        todos={todos}
      />
      <Adder addTodo={handleAddTodo} />
    </div>
  );
}

export default App;
