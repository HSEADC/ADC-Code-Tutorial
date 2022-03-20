import React, { PureComponent } from 'react'
import './A_Input.scss'
// import Q_ChipCross from '../quarks/Q_ChipCross/Q_ChipCross.jsx'

export default class A_Input extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { placeholder, onChange, onFocus, onBlur, value } = this.props
    console.log(placeholder)
    return (
      <input
        placeholder={placeholder}
        className="A_Input"
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
  }
}
