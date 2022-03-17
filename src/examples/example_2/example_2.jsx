import React from 'react'
import ReactDOM from 'react-dom'
import A_Button from '../../components/atoms/A_Button/A_Button.jsx'
import './example_2.scss'

function handleClick() {
  console.log('click')
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <>
      <A_Button text="Привет" handleClick={handleClick} />
      <A_Button text="Пока" disabled={true} handleClick={handleClick} />
    </>,
    document.body.appendChild(document.createElement('div'))
  )
})
