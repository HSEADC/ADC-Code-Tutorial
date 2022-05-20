import React from 'react'
import ReactDOM from 'react-dom'
import S_Popup from '../../components/superorganisms/S_Popup/S_Popup.jsx'
import './example_13.scss'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <S_Popup
      popupButtonText="Открыть попап"
      popupTitle="Информация о подписке"
    ></S_Popup>,
    document.body
  )
})
