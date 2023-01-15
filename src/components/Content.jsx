import React from "react";
import Todo from "./Todo";
import styled from "./Content.module.css";

export default function Content() {
  return (
    <ul className={styled.content}>
      <Todo />
      <Todo />
    </ul>
  );
}
