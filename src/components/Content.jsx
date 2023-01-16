import React from 'react';
import Todo from './Todo';
import styled from './Content.module.css';

export default function Content({ filter, todos, toggleCheck, onDelete }) {
  const generateTodo = ({ id, content, isCompleted }) => (
    <Todo
      id={id}
      content={content}
      key={id.toString()}
      isCompleted={isCompleted}
      toggleCheck={toggleCheck}
      onDelete={onDelete}
    />
  );

  if (filter === 'All') {
    return <ul className={styled.content}>{todos.map(generateTodo)}</ul>;
  }

  return (
    <ul className={styled.content}>
      {filter === 'Activated'
        ? todos.filter(({ isCompleted }) => !isCompleted).map(generateTodo)
        : todos.filter(({ isCompleted }) => isCompleted).map(generateTodo)}
    </ul>
  );
}
