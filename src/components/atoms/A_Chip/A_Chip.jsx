import classnames from 'classnames'
import React, { PureComponent } from 'react'
import './A_Chip.scss'
import '../../quarks/Q_Icon.scss'

export default class A_Chip extends PureComponent {
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
      A_Chip: true,
      disabled: disabled
    })

    return (
      <div className={classes}>
        {text}
        <div className="Q_Icon cross" onClick={this.handleClick} />
      </div>
    )
  }
}
