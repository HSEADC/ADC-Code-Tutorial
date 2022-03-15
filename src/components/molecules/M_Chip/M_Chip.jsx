import React, { PureComponent } from 'react'
import Q_ChipCross from '../../quarks/Q_ChipCross/Q_ChipCross.jsx'
import './M_Chip.scss'

export default class M_Chip extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div div className="StateM_Chip">
        <div className="M_Chip">
          Text
          <div className="Q_ChipCross"></div>
        </div>
        <div className="M_Chip">
          Text
          <div className="Q_ChipCross"></div>
        </div>
      </div>
    )
  }
}
