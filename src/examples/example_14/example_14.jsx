import React from 'react'
import ReactDOM from 'react-dom'
import A_MenuItem from '../../components/atoms/A_MenuItem/A_MenuItem.jsx'
import './example_14.scss'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<A_MenuItem text={'Профиль'} icon={'user'} />, document.body)
})
