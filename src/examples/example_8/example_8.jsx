import React from 'react'
import ReactDOM from 'react-dom'
import O_Slider from '../../components/organisms/O_Slider/O_Slider.jsx'
import './example_8.scss'

const imageUrls = [
  'https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg',
  'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
  'https://secretmag.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2021/11/02/12/4999384/d53776b3b010f6c92bdf3e0d7946b938aabd8c08.webp'
]

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<O_Slider imageUrls={imageUrls} />, document.body)
})
