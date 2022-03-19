import React, { PureComponent } from 'react'
import './A_OptionItem.scss'

export default class A_OptionItem extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, value, onSelect } = this.props
    return (
      <div className="A_OptionItem" onClick={() => onSelect(id, value)}>
        {value}
      </div>
    )
  }
}
