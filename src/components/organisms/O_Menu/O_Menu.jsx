import React, { PureComponent } from 'react'
import A_MenuItem from '../../atoms/A_MenuItem/A_MenuItem.jsx'
import './O_Menu.scss'

export default class O_Menu extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }

    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  openMenu() {
    this.setState((prevState) => ({
      ...prevState,
      showMenu: true
    }))
  }

  closeMenu() {
    this.setState((prevState) => ({
      ...prevState,
      showMenu: false
    }))
  }

  render() {
    const { showMenu } = this.state
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
        {!showMenu && (
          <div className="Q_Icon burger" onClick={this.openMenu}></div>
        )}
        {showMenu && (
          <div className="W_MenuContent">
            <div className="Q_Icon close" onClick={this.closeMenu}></div>
            <div className="C_MenuItems">{topMenuElements}</div>
            <div className="C_MenuItems">{bottomMenuElements}</div>
          </div>
        )}
      </div>
    )
  }
}
