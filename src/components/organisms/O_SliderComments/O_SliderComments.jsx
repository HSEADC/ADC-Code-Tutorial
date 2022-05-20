import React, { Component } from 'react'
import Q_MeatBall from '../../quarks/Q_MeatBall/Q_MeatBall.jsx'
import './O_SliderComments.scss'
import '../../quarks/Q_Icon.scss'

const SLIDE_WIDTH = 600

export default class O_SliderComments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: props.slides,
      activeIndex: 0
    }
  }

  updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = this.state.slides.length - 1
    } else if (newIndex >= this.state.slides.length) {
      newIndex = 0
    }

    this.setState((prevState) => ({
      ...prevState,
      activeIndex: newIndex
    }))
  }

  render() {
    const { activeIndex, slides } = this.state

    return (
      <div className="O_SliderComment">
        <div className="W_SliderCommentContent">
          <div
            className="Q_Icon arrow-left"
            onClick={() => this.updateIndex(activeIndex - 1)}
          ></div>

          <div className="W_SliderCommentOpenFrame">
            <div
              className="C_SliderCommentRail"
              style={{
                transform: `translateX(-${activeIndex * SLIDE_WIDTH}px)`
              }}
            >
              {slides.map(({ title, content }) => (
                <div key={title} className="W_SliderCommentText">
                  <h3>{title}</h3>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="Q_Icon arrow-right"
            onClick={() => this.updateIndex(activeIndex + 1)}
          ></div>
        </div>

        <div className="W_SliderCommentsStatus">
          {slides.map((img, index) => (
            <Q_MeatBall key={index} selected={index === activeIndex} />
          ))}
        </div>
      </div>
    )
  }
}
