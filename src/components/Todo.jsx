import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styled from './Todo.module.css';

export default function Todo({
  id,
  content,
  isCompleted,
  toggleCheck,
  onDelete,
}) {
  const handleChange = () => {
    toggleCheck(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <li className={styled.todo}>
      <div className={styled.left}>
        <input
          checked={isCompleted}
          className={styled.checkbox}
          type="checkbox"
          onChange={handleChange}
          id={id}
        />
        <label htmlFor={id}>{content}</label>
      </div>
      <BsFillTrashFill onClick={handleDelete} />
    </li>
  );
}
