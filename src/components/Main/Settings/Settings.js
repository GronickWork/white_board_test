import './Settings.css'
import React from 'react'
import Range from './Range/Range'

export default function Settings() {
  return (
    <div className='settings'>
      <Range numb={1} />
      <Range numb={2} />
    </div>
  )
}

