import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
import styled from "./Header.module.css";

export default function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.icon}>
        <TiWeatherSunny size={30} color="white" />
      </div>
      <div className={styled.filterButtonContainer}>
        <button className={styled.filterButton}>All</button>
        <button className={styled.filterButton}>Activated</button>
        <button className={styled.filterButton}>Completed</button>
      </div>
    </header>
  );
}
