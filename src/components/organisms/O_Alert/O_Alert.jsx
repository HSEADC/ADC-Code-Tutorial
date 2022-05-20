import React, { Component } from 'react'
import A_Button from '../../atoms/A_Button/A_Button.jsx'
import './O_Alert.scss'
export default class O_Alert extends Component {
  constructor(props) {
    super(props)

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    console.log('Hello World!')
  }

  render() {
    const { content } = this.props

    return (
      <div className="O_Alert">
        <div className="A_AlertContent">{content}</div>
        <A_Button text="Принять" handleClick={this.handleButtonClick} />
      </div>
    )
  }
}
