import React, { PureComponent } from 'react'
import './O_select.scss'

export default class O_select extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { value: 'coconut' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <select
        className="O_select"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
    )
  }
}
