import classnames from 'classnames'
import React from 'react'

export default class A_SelectOption extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { type, text, active } = this.props

    const classes = classnames({
      A_SelectOption: true,
      checked: active
    })

    return <div className={classes}>{text}</div>
  }
}
