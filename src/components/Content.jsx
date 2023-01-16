import React from "react";
import Todo from "./Todo";
import styled from "./Content.module.css";

export default function Content({ filter, todos }) {
  if (filter === "all") {
    return <ul className={styled.content}>{todos.map(generateTodo)}</ul>;
  }

  return (
    <ul className={styled.content}>
      {filter === "active"
        ? todos.filter(({ isCompleted }) => !isCompleted).map(generateTodo)
        : todos.filter(({ isCompleted }) => isCompleted).map(generateTodo)}
    </ul>
  );
}

const generateTodo = ({ id, content, isCompleted }) => (
  <Todo content={content} key={id.toString()} isCompleted={isCompleted} />
);
