import './Range.css';
import React from 'react';

export default function Range({numb}) {
  return (
    <div className='settings__gamer'>
      <h4 className='settings-gamer__head'>Игрок {numb}</h4>
      <label>
        {`Скорострельность${numb}`}
        <input id={`sh${numb}`} type='range' min='1' max='8' defaultValue='1'/>
      </label><br/>
      <label>
        {`Скорость движения${numb}`}
        <input id={`sd${numb}`} type='range' min='1' max='8' defaultValue='1'/>
      </label><br/>
    </div>
  )
}

