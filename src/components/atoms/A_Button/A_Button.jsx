import classnames from 'classnames'
import React, { PureComponent } from 'react'
import './A_Button.scss'

export default class A_Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const { disabled, handleClick } = this.props

    if (!disabled) {
      handleClick()
    }
  }

  render() {
    const { text, disabled } = this.props

    const classes = classnames({
      A_Button: true,
      disabled: disabled
    })
    return (
      <div className={classes} onClick={this.handleClick}>
        {text}
      </div>
    )
  }
}
