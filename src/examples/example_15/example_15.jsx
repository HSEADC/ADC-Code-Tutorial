import React from 'react'
import ReactDOM from 'react-dom'
import O_ScrollMenu from '../../components/organisms/O_ScrollMenu/O_ScrollMenu.jsx'
import './example_15.scss'

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
    },
    {
      text: 'Настройки',
      icon: 'settings',
      url: 'https://facebook.com'
    },
    {
      text: 'Помощь',
      icon: 'help',
      url: 'https://facebook.com'
    }
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<O_ScrollMenu menu={menu} />, document.body)
})
