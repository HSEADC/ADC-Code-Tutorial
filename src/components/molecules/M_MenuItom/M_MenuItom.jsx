import React, { PureComponent } from 'react'
import Q_MenuIcon from '../../quarks/Q_MenuIcon/Q_MenuIcon.jsx'
import './M_MenuItom.scss'

export default class M_MenuItom extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="M_MenuItom">
        <div className="Q_MenuIcon"></div>
        Text
      </div>
    )
  }
}
