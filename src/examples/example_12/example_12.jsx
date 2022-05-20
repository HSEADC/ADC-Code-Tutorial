import React from 'react'
import ReactDOM from 'react-dom'
import S_Popup from '../../components/superorganisms/S_Popup/S_Popup.jsx'
import O_Alert from '../../components/organisms/O_Alert/O_Alert.jsx'
import './example_12.scss'
const content =
  'Инду́кция (лат. inductio — наведение, от лат. inducere — влечь за собой, установить) — умозаключение от фактов к некоторой гипотезе (общему утверждению). Различают полную индукцию, когда обобщение относится к конечно-обозримой области фактов, и неполную индукцию, когда оно относится к бесконечно или конечно-необозримой области фактов.'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <S_Popup popupButtonText="Открыть попап" popupTitle="Информация о подписке">
      <O_Alert content={content} />
    </S_Popup>,
    document.body
  )
})
