import React from 'react'
import ReactDOM from 'react-dom'
import A_InputContainer from '../../components/atoms/A_Input/A_Input.jsx'
import './example_5.scss'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <A_InputContainer placeholder="Твой любимый фрукт" />,
    document.body.appendChild(document.createElement('div'))
  )
})
