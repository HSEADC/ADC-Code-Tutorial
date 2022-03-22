import React from 'react'
import ReactDOM from 'react-dom'
import O_Menu from '../../components/organisms/O_Menu/O_Menu.jsx'
import './example_1.scss'

const menu = {
  top: [
    {
      text: 'Галерея',
      icon: 'dashboard',
      url: 'https://instagram.com'
    },
    {
      text: 'Сообщения',
      icon: 'messages',
      url: 'https://facebook.com'
      // active: true
    },
    {
      text: 'Заметки',
      icon: 'pages',
      url: 'https://instagram.com'
    },
    {
      text: 'Профиль',
      icon: 'user',
      url: 'https://facebook.com'
    }
  ],
  bottom: [
    {
      text: 'Помощь',
      icon: 'help',
      url: 'https://instagram.com'
    },
    {
      text: 'Настройки',
      icon: 'settings',
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
