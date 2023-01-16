import React from 'react';
import { TiWeatherSunny } from 'react-icons/ti';
import styled from './Header.module.css';

export default function Header({ filter, onClick }) {
  return (
    <header className={styled.header}>
      <div className={styled.icon}>
        <TiWeatherSunny size={30} color="white" />
      </div>
      <div className={styled.filterButtonContainer}>
        <div className={styled.buttonWrapper}>
          <label className={styled.buttonName} htmlFor="All">
            All
          </label>
          <input
            id="All"
            type="radio"
            name="filter"
            className={styled.filterButton}
            value="All"
            checked={filter === 'All'}
            onChange={onClick}
          />
        </div>

        <div className={styled.buttonWrapper}>
          <label className={styled.buttonName} htmlFor="Activated">
            Activated
          </label>
          <input
            id="Activated"
            type="radio"
            name="filter"
            className={styled.filterButton}
            value="Activated"
            checked={filter === 'Activated'}
            onChange={onClick}
          />
        </div>

        <div className={styled.buttonWrapper}>
          <label className={styled.buttonName} htmlFor="Completed">
            Completed
          </label>
          <input
            id="Completed"
            type="radio"
            name="filter"
            className={styled.filterButton}
            value="Completed"
            checked={filter === 'Completed'}
            onChange={onClick}
          />
        </div>
      </div>
    </header>
  );
}
