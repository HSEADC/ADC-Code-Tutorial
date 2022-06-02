import classnames from 'classnames'
import React, { PureComponent } from 'react'
import './A_MenuItem.scss'
import '../../quarks/Q_Icon.scss'

export default class A_MenuItem extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, icon, url, active } = this.props

    const classes = classnames({
      A_MenuItem: true,
      active: active
    })

    const iconClasses = classnames({
      Q_Icon: true,
      [`${icon}`]: true
    })

    return (
      <a className={classes} href={url}>
        <div className={iconClasses}></div>
        {text}
      </a>
    )
  }
}
