import React from 'react';
import './Field.css';
import GameResult from './GameResult/GameResult';

export default function Field() {
  return (
    <div className='field'>
      <h4 className='field__header'>Результаты:</h4>
      <div className='field-result'>
        <GameResult numb={1} />
        <GameResult numb={2} />
      </div>
      <canvas id='canvas' width='780' height='390'></canvas>
    </div>
  )
}

