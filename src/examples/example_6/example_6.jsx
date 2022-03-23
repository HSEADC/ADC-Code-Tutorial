import React from 'react'
import ReactDOM from 'react-dom'
import O_Select from '../../components/organisms/O_Select/O_Select.jsx'
import './example_6.scss'

const options = [
  {
    id: '1',
    value: 'Ананас'
  },
  {
    id: '2',
    value: 'Лемон'
  },
  {
    id: '3',
    value: 'Кокос'
  },
  {
    id: '4',
    value: 'Мандарин'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <O_Select placeholder="Твой любимый фрукт" options={options} />,
    document.body.appendChild(document.createElement('div'))
  )
})
