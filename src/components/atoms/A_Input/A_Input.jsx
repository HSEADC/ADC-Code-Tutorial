import React, { PureComponent } from 'react'
import './A_Input.scss'

export default class A_Input extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      children,
      onFocus,
      onBlur,
      placeholder,
      disabled,
      value,
      onChange
    } = this.props

    return (
      <div className="A_InputContainer">
        {children}
        {!disabled && (
          <input
            placeholder={placeholder}
            className="A_Input"
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={this.handleChangeValue}
            value={value}
          />
        )}
      </div>
    )
  }
}
