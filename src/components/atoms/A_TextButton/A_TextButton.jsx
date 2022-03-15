import React, { PureComponent } from 'react'
import './A_TextButton.scss'

export default class A_TextButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="StateA_TextButton">
        <div className="A_TextButton">Text</div>
        <div className="A_TextButton">Text</div>
      </div>
    )
  }
}
