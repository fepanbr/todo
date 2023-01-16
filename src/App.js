import { useState } from 'react';
import styled from './App.module.css';
import Adder from './components/Adder';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  const [filter, setFilter] = useState('All');
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: '공부하기',
      isCompleted: false,
    },
    {
      id: 2,
      content: '숙제하기',
      isCompleted: false,
    },
    {
      id: 3,
      content: '밥먹기',
      isCompleted: true,
    },
    {
      id: 4,
      content: '운동하기',
      isCompleted: true,
    },
  ]);

  const handleChangeFilter = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleAddTodo = (content) => {
    const lastTodoId = todos.sort((a, b) => a.id - b.id)[todos.length - 1]?.id;
    setTodos([...todos, { id: lastTodoId + 1, content, isCompleted: false }]);
  };
  return (
    <div className={styled.app}>
      <Header filter={filter} onClick={handleChangeFilter} />
      <Content filter={filter} todos={todos} />
      <Adder addTodo={handleAddTodo} />
    </div>
  );
}

export default App;
