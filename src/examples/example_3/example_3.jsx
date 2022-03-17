import React from 'react'
import ReactDOM from 'react-dom'
import A_TextButton from '../../components/atoms/A_TextButton/A_TextButton.jsx'
import './example_3.scss'

function handleClick() {
  console.log('click')
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <>
      <A_TextButton text="Привет" handleClick={handleClick} />
      <A_TextButton text="Пока" disabled={true} handleClick={handleClick} />
    </>,
    document.body.appendChild(document.createElement('div'))
  )
})
