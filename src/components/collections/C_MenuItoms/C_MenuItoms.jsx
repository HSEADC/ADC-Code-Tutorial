import React, { PureComponent } from 'react'
import './C_MenuItoms.scss'
import M_MenuItom from '../../molecules/M_MenuItom/M_MenuItom.jsx'
import Q_MenuIcon from '../../quarks/Q_MenuIcon/Q_MenuIcon.jsx'

export default class C_MenuItom extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="C_MenuItoms">
        <div className="M_MenuItom">
          <div className="Q_MenuIcon"></div>
          Text
        </div>
        <div className="M_MenuItom">
          <div className="Q_MenuIcon"></div>
          Text
        </div>
        <div className="M_MenuItom">
          <div className="Q_MenuIcon"></div>
          Text
        </div>
        <div className="M_MenuItom">
          <div className="Q_MenuIcon"></div>
          Text
        </div>
      </div>
    )
  }
}
