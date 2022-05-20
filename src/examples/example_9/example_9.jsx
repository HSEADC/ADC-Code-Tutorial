import React from 'react'
import ReactDOM from 'react-dom'
import M_SliderController from '../../components/molecules/M_SliderController/M_SliderController.jsx'
import './example_9.scss'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <M_SliderController
      imageUrls={imageUrls}
      activeIndex={activeIndex}
      handleChangeIndex={this.updateIndex}
    />,
    document.body.appendChild(document.createElement('div'))
  )
})
