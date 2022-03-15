import React, { PureComponent } from 'react'
import './M_TextFild.scss'
// import Q_ChipCross from '../quarks/Q_ChipCross/Q_ChipCross.jsx'

export default class M_TextFild extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Placeholder"
        className="M_TextFild"
      ></input>
    )
  }
}
