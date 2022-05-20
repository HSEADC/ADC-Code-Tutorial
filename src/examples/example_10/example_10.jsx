import React from 'react'
import ReactDOM from 'react-dom'
import O_SliderComments from '../../components/organisms/O_SliderComments/O_SliderComments.jsx'

const slides = [
  {
    title: 'инструкция 1',
    content:
      'Краткая и исчерпывающая инструкция по созданию эффекта матового стекла в Figma.  С 2021 года этот прием стал очень популярным и, скорее всего, задержится надолго, поэтому давайте разберемся'
  },
  {
    title: 'инструкция 2',
    content: 'Text text text'
  },
  {
    title: 'инструкция 3',
    content:
      'Краткая и исчерпывающая инструкция по созданию эффекта матового стекла в Figma.  С 2021 года этот прием стал очень популярным и, скорее всего, задержится надолго, поэтому давайте разберемся'
  },
  {
    title: 'инструкция 4',
    content:
      'Краткая и исчерпывающая инструкция по созданию эффекта матового стекла в Figma.  С 2021 года этот прием стал очень популярным и, скорее всего, задержится надолго, поэтому давайте разберемся'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<O_SliderComments slides={slides} />, document.body)
})
