import React, { PureComponent } from 'react'
import './O_Select.scss'
import A_Input from '../../atoms/A_Input/A_Input.jsx'
import A_OptionItem from '../../atoms/A_OptionItem/A_OptionItem.jsx'

export default class O_Select extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      options: props.options,
      showOptions: false,
      disabled: props.disabled
    }
  }

  setVisibleOptions = (visible) => {
    if (this.state.disabled) {
      return
    }

    this.setState((preState) => ({
      ...preState,
      showOptions: visible
    }))
  }

  handleSelectOption = (id, value) => {
    this.setState((prevState) => ({
      ...prevState,
      value: value,
      showOptions: false
    }))
  }

  handleChangeValue = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      value: e.target.value
    }))
  }

  render() {
    const { placeholder } = this.props

    const { options, showOptions, value } = this.state
    const optionElements = options.map((option) => (
      <A_OptionItem
        key={option.id}
        id={option.id}
        value={option.value}
        onSelect={this.handleSelectOption}
      />
    ))

    const optionCollection = (
      <div className="C_OptionsList">{optionElements}</div>
    )

    return (
      <div className="O_Select">
        <A_Input
          placeholder={placeholder}
          value={value}
          onChange={this.handleChangeValue}
          onFocus={() => {
            this.setVisibleOptions(true)
          }}
        />
        {showOptions && optionCollection}
      </div>
    )
  }
}
