import React from 'react'
import ReactDOM from 'react-dom'
import O_ScrollMenu from '../../components/organisms/O_ScrollMenu/O_ScrollMenu.jsx'
import './example_15.scss'

const menu = {
  top: [
    {
      text: 'Галерея',

      url: 'https://instagram.com'
    },
    {
      text: 'Сообщения',

      url: 'https://facebook.com'
      // active: true
    },
    {
      text: 'Заметки',

      url: 'https://instagram.com'
    },
    {
      text: 'Профиль',

      url: 'https://facebook.com'
    },
    {
      text: 'Настройки',

      url: 'https://facebook.com'
    },
    {
      text: 'Аккаунт',
      icon: 'messages',
      url: 'https://facebook.com'
    }
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <O_ScrollMenu menu={menu} />,
    document.body.appendChild(document.createElement('div'))
  )
})
