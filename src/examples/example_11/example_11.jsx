import React from 'react'
import ReactDOM from 'react-dom'
import S_Popup from '../../components/superorganisms/S_Popup/S_Popup.jsx'
import O_Login from '../../components/organisms/O_Login/O_Login.jsx'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <S_Popup popupButtonText="Войти в систему" popupTitle="Вход в систему">
      <O_Login />
    </S_Popup>,
    document.body
  )
})
