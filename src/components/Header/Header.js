import './Header.css';
import React from 'react';
export default function Header() {
  return (
    <header className='game-header'>
      <p className='game-head__text'>Чтобы начать игру нажмите кнопку "Старт".</p>
      <div className='game-head__button'>
        <button id='start' className='game-head__btn btn__start'>Старт</button>
        <button id='stop' className='game-head__btn btn__stop'>Стоп</button>
      </div>
    </header>
  )
}
