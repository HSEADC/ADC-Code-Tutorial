import React from 'react'
import ReactDOM from 'react-dom'
import O_Menu from '../../components/organisms/O_Menu/O_Menu.jsx'
import './example_1.scss'

const menu = {
  top: [
    {
      text: 'Menu Item 1',
      icon: 'user',
      url: 'https://instagram.com'
    },
    {
      text: 'Menu Item 2',
      icon: 'community',
      url: 'https://facebook.com'
      // active: true
    },
    {
      text: 'Menu Item 1',
      icon: 'user',
      url: 'https://instagram.com'
    },
    {
      text: 'Menu Item 2',
      icon: 'community',
      url: 'https://facebook.com'
    }
  ],
  bottom: [
    {
      text: 'Menu Item 1',
      icon: 'user',
      url: 'https://instagram.com'
    },
    {
      text: 'Menu Item 2',
      icon: 'community',
      url: 'https://facebook.com'
    }
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <O_Menu menu={menu} />,
    document.body.appendChild(document.createElement('div'))
  )
})
