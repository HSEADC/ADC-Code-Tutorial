import React, { PureComponent } from 'react'
import A_MenuItem from '../../atoms/A_MenuItem/A_MenuItem.jsx'
// import Q_MenuIcon from '../../quarks/Q_MenuIcon/Q_MenuIcon.jsx'
// import C_MenuItems from '../../collections/C_MenuItems/C_MenuItems.jsx'
import './O_Menu.scss'

export default class O_Menu extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { menu } = this.props
    const { top, bottom } = menu
    const topMenuElements = []
    const bottomMenuElements = []

    top.forEach((item, i) => {
      topMenuElements.push(<A_MenuItem {...item} key={'top' + i} />)
    })

    bottom.forEach((item, i) => {
      bottomMenuElements.push(<A_MenuItem {...item} key={'bottom' + i} />)
    })

    return (
      <div className="O_Menu">
        <div className="C_MenuItems">{topMenuElements}</div>
        <div className="C_MenuItems">{bottomMenuElements}</div>
      </div>
    )
  }
}
