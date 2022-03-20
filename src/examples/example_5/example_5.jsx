import React from 'react'
import ReactDOM from 'react-dom'
import A_Input from '../../components/atoms/A_Input/A_Input.jsx'
import './example_5.scss'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <A_Input placeholder="Твой любимый фркут" />,
    document.body.appendChild(document.createElement('div'))
  )
})
