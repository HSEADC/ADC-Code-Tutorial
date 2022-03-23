import React, { PureComponent } from 'react'
import MeatBallIcon from '../../../assets/images/meat-ball-icon.svg'
import MeatBallIconFilled from '../../../assets/images/meat-ball-icon-filled.svg'
import './Q_MeatBall.scss'

export default class Q_MeatBall extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { selected } = this.props

    return (
      <img
        className="Q_MeatBall"
        src={selected ? MeatBallIconFilled : MeatBallIcon}
        alt={''}
      />
    )
  }
}
