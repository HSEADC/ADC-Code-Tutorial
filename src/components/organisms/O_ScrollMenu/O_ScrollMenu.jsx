import React, { PureComponent } from 'react'
import A_MenuItem from '../../atoms/A_MenuItem/A_MenuItem.jsx'
import './O_ScrollMenu.scss'

export default class O_ScrollMenu extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { menu } = this.props
    const { top, bottom } = menu
    const topMenuElements = []

    top.forEach((item, i) => {
      topMenuElements.push(<A_MenuItem {...item} key={'top' + i} />)
    })

    return (
      <div className="O_ScrollMenu">
        <div className="C_MenuItems">{topMenuElements}</div>
      </div>
    )
  }
}
