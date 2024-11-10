import './Modal.css';
import ReactDom from 'react-dom';
import closeModal from '../../utils/closeModal';
import { useState } from 'react';
import styleModal from '../../utils/styleModal';

export default function Modal() {
  const [value, setValue] = useState('1');
  function checkInput(e) {
    setValue(e.target.value);
    let numberHero =document.querySelector('.modal-form').dataset.hero*1;
    let color = getComputedStyle(e.target.nextSibling).borderColor; 
    styleModal(numberHero, color);
  }
  return ReactDom.createPortal(
    <div className='modal-wrapper'>
      <form className='modal-form'>
        <div className='modal-form__head'>
          <h4 className='modal-form__title'>Выбрать цвет пуль игрока</h4>
          <button id='modal-close' className='modal-form__button' onClick={closeModal}>X</button>
        </div>
        <label className='modal-form__label'>
          <input
            id='cr1'
            className='modal-form__radio'
            type='radio'
            name='color'
            value='1'
            checked={value === '1'? true : false}
            onChange={checkInput}
          />
            <span className='modal-form__span'></span>
        </label>
        <label className='modal-form__label'>
          <input
            id='cr2'
            className='modal-form__radio'
            type='radio'
            name='color'
            value='2'
            checked={value === '2'? true : false}
            onChange={checkInput}
          />
            <span className='modal-form__span'></span>
        </label>
        <button id='modal-button' className='modal-form__button'>Подтвердить</button>
      </form> 
    </div>
    , document.body
  )
}

