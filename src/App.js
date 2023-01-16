import { useState } from 'react';
import styled from './App.module.css';
import Adder from './components/Adder';
import Content from './components/Content';
import Header from './components/Header';

const todos = [
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
];

function App() {
  const [filter, setFilter] = useState('All');

  const handleChangeFilter = (e) => {
    const { value } = e.target;
    setFilter(value);
  };
  return (
    <div className={styled.app}>
      <Header filter={filter} onClick={handleChangeFilter} />
      <Content filter={filter} todos={todos} />
      <Adder />
    </div>
  );
}

export default App;
