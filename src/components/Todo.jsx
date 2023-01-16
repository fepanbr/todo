import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styled from './Todo.module.css';

export default function Todo({ content, isCompleted }) {
  const handleChange = () => {};
  return (
    <li className={styled.todo}>
      <div className={styled.left}>
        <input
          checked={isCompleted}
          className={styled.checkbox}
          type="checkbox"
          onChange={handleChange}
        />
        {content}
      </div>
      <BsFillTrashFill />
    </li>
  );
}
