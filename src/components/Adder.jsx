import React from "react";
import styled from "./Adder.module.css";

export default function Adder() {
  return (
    <section className={styled.adder}>
      <div className={styled.container}>
        <input className={styled.input} type="text" />
        <button className={styled.button}>Add</button>
      </div>
    </section>
  );
}
