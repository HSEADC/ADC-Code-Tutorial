import React, { PureComponent } from 'react'
import M_MenuItom from '../../molecules/M_MenuItom/M_MenuItom.jsx'
import Q_MenuIcon from '../../quarks/Q_MenuIcon/Q_MenuIcon.jsx'
import C_MenuItoms from '../../collections/C_MenuItoms/C_MenuItoms.jsx'
import './O_Menu.scss'

export default class O_Menu extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="O_Menu">
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

        <div className="C_MenuItoms">
          <div className="M_MenuItom">
            <div className="Q_MenuIcon"></div>
            Text
          </div>
          <div className="M_MenuItom">
            <div className="Q_MenuIcon"></div>
            Text
          </div>
        </div>
      </div>
    )
  }
}
