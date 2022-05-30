import React from 'react'
import ReactDOM from 'react-dom'
import S_Popup from '../../components/superorganisms/S_Popup/S_Popup.jsx'
import O_Alert from '../../components/organisms/O_Alert/O_Alert.jsx'
import './example_12.scss'

const content =
  'Возможно, у вашей карты закончился срок действия или на ней недостаточно денег. Проверьте карту или привяжите другую, чтобы продолжать быть в Плюсе.'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <S_Popup popupButtonText="Открыть попап" popupTitle="Информация о подписке">
      <O_Alert content={content} />,
    </S_Popup>,
    document.body.appendChild(document.createElement('div'))
  )
})
