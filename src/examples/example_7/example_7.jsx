import React from 'react'
import ReactDOM from 'react-dom'
import A_SelectOption from '../../components/atoms/A_SelectOption/A_SelectOption.jsx'
import './example_7.scss'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <A_SelectOption text="Твой любимый фркут" onClick={handleClick} />,
    document.body
  )
})
