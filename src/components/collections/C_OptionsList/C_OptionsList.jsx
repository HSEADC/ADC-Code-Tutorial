import React, { PureComponent } from 'react'
import A_OptionItem from '../../atoms/A_OptionItem/A_OptionItem.jsx'
import './C_OptionsList.scss'

export default class C_OptionsList extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { options, handleSelectOption } = this.props
    return (
      <div className="C_OptionsList">
        {options.map((option) => (
          <A_OptionItem
            key={option.id}
            id={option.id}
            value={option.value}
            onSelect={handleSelectOption}
          />
        ))}
      </div>
    )
  }
}
