import React, { PureComponent } from 'react'
import './A_Input.scss'
// import Q_ChipCross from '../quarks/Q_ChipCross/Q_ChipCross.jsx'

export default class A_TextFild extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { placeholder, handleChange } = this.props
    return (
      <input
        placeholder={placeholder}
        className="A_Input"
        onChange={handleChange}
      ></input>
    )
  }
}
