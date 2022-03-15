import React, { PureComponent } from 'react'
import './A_Button.scss'

export default class A_Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="StateA_Button">
        <div className="A_Button">Text</div>
        <div className="A_Button">Text</div>
      </div>
    )
  }
}
