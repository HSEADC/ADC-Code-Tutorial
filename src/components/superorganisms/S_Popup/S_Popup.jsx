import React, { Component } from 'react'
import A_Button from '../../atoms/A_Button/A_Button.jsx'
import './S_Popup.scss'
import '../../quarks/Q_Icon.scss'
export default class S_Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false
    }

    this.openPopup = this.openPopup.bind(this)
    this.closePopup = this.closePopup.bind(this)
  }

  openPopup() {
    this.setState((prevState) => ({
      ...prevState,
      showPopup: true
    }))
  }

  closePopup() {
    this.setState((prevState) => ({
      ...prevState,
      showPopup: false
    }))
  }

  render() {
    const { showPopup } = this.state
    const { popupButtonText, popupTitle, children } = this.props
    return (
      <div className="S_Popup">
        <A_Button text={popupButtonText} handleClick={this.openPopup} />
        {showPopup && (
          <div className="W_PopupBackground">
            <div className="PopupBox">
              <div className="PopupBoxHeader">
                <h3>{popupTitle}</h3>
                <div className="Q_Icon close" onClick={this.closePopup}></div>
              </div>
              {children}
            </div>
          </div>
        )}
      </div>
    )
  }
}
