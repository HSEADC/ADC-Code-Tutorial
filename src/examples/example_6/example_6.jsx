import React from 'react'
import ReactDOM from 'react-dom'
import O_Select from '../../components/organisms/O_Select/O_Select.jsx'
import './example_6.scss'

const options = [
  {
    id: '1',
    value: 'grapefruit'
  },
  {
    id: '2',
    value: 'lime'
  },
  {
    id: '3',
    value: 'coconut'
  },
  {
    id: '4',
    value: 'mango'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <O_Select placeholder="Введите данные" options={options} />,
    document.body.appendChild(document.createElement('div'))
  )
})
