import React from 'react';
import './GameResult.css';

export default function GameResult({numb}) {// Или <p className='gamer__text'>Игрок{numb}</p>
  let idg = `gr${numb}`;
  const colorHero = numb === 1 ? 'Розовый' : 'Голубой';
  return (
    <div className='gamer'>
      <p className='gamer__text'>{`${colorHero} игорок`}</p>
      <p className='gamer__text'>Количество попаданий в противника</p>
      <span id={idg} className='gamer__result'></span>
    </div>
  )
}

