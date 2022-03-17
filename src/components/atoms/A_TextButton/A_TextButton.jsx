import classnames from 'classnames'
import React, { PureComponent } from 'react'
import './A_TextButton.scss'

export default class A_TextButton extends PureComponent {
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
      A_TextButton: true,
      disabled: disabled
    })
    return (
      <div className={classes} onClick={this.handleClick}>
        {text}
      </div>
    )
  }
}
