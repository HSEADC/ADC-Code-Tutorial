import React, { PureComponent } from 'react'
import A_MenuItem from '../../atoms/A_MenuItem/A_MenuItem.jsx'
import './O_ScrollMenu.scss'

export default class O_ScrollMenu extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { menu } = this.props
    const { top } = menu
    const menuElements = []

    top.forEach((item, i) => {
      menuElements.push(<A_MenuItem {...item} key={'top' + i} />)
    })

    return (
      <div className="O_ScrollMenu">
        <div className="C_MenuItems">{menuElements}</div>
      </div>
    )
  }
}
