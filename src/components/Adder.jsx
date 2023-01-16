import React, { useState } from 'react';
import styled from './Adder.module.css';

export default function Adder({ addTodo }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue('');
  };

  return (
    <section className={styled.adder}>
      <form onSubmit={handleSubmit} className={styled.container}>
        <input
          value={value}
          onChange={handleChange}
          className={styled.input}
          type="text"
        />
        <button type="submit" className={styled.button}>
          Add
        </button>
      </form>
    </section>
  );
}
