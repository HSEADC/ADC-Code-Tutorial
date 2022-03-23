import classnames from 'classnames'
import React, { Component } from 'react'
import './O_Slider.scss'
import Q_MeatBall from '../../quarks/Q_MeatBall/Q_MeatBall.jsx'
import '../../quarks/Q_Icon.scss'

export default class O_Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrls: props.imageUrls,
      activeIndex: 0
    }

    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = this.state.imageUrls.length - 1
    } else if (newIndex >= this.state.imageUrls.length) {
      newIndex = 0
    }

    this.setState((prevState) => ({
      ...prevState,
      activeIndex: newIndex
    }))
  }

  render() {
    const { activeIndex, imageUrls } = this.state

    const iconClasses = classnames({
      Q_Icon: true
    })

    return (
      <div className="O_Slider">
        <div className="O_SliderFrame">
          <div
            className="O_SliderContent"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {imageUrls.map((imageUrl) => (
              <img
                key={imageUrl}
                className="O_SliderImage"
                src={imageUrl}
                alt={imageUrl}
              />
            ))}
          </div>
        </div>
        <div className="O_SliderControls">
          <div
            className="Q_Icon arrow-left"
            onClick={() => this.updateIndex(activeIndex - 1)}
          ></div>

          <div className="O_SliderStatus">
            {imageUrls.map((img, index) => (
              <Q_MeatBall key={index} selected={index === activeIndex} />
            ))}
          </div>

          <div
            className="Q_Icon arrow-right"
            onClick={() => this.updateIndex(activeIndex + 1)}
          ></div>
        </div>
      </div>
    )
  }
}
