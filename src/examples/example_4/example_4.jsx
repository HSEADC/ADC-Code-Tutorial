import React from 'react'
import ReactDOM from 'react-dom'
import A_Chip from '../../components/atoms/A_Chip/A_Chip.jsx'
import './example_4.scss'

function handleClick() {
  console.log('click')
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <>
      <A_Chip text="Text" handleClick={handleClick} />
      <A_Chip text="Text" disabled={true} handleClick={handleClick} />
    </>,
    document.body.appendChild(document.createElement('div'))
  )
})
