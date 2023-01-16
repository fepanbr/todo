import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import styled from "./Todo.module.css";

export default function Todo() {
  return (
    <li className={styled.todo}>
      <div className={styled.left}>
        <input className={styled.checkbox} type="checkbox" />
        삭제하기
      </div>
      <BsFillTrashFill />
    </li>
  );
}
