import React, { useEffect } from 'react'
import './Main.css';
import Field from './Field/Field';
import Settings from './Settings/Settings';
import startGame from '../utils/startGame';

export default function Main() {
  useEffect(() => {
    startGame();
  })
  
  return (
    <main className='main'>
      <Field />
      <Settings />
    </main>
    
  )
}

