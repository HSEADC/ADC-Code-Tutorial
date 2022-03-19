import React, { PureComponent } from 'react'
import './O_Select.scss'
import A_TextField from '../../atoms/A_Input/A_Input.jsx'
import O_OptionsList from '../O_OptionsList/O_OptionsList.jsx'

export default class O_Select extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      options: props.options,
      showOptions: false,
      disabled: props.disabled
    }
    this.setVisibleOptions = this.setVisibleOptions.bind(this)
    this.handleSelectOption = this.handleSelectOption.bind(this)
    this.handleChangeValue = this.handleChangeValue.bind(this)
  }

  setVisibleOptions(visible) {
    if (this.state.disabled) {
      return
    }

    this.setState((preState) => ({
      ...preState,
      showOptions: visible
    }))
  }

  handleSelectOption(id, value) {
    this.setState((prevState) => ({
      ...prevState,
      value: value,
      showOptions: false
    }))
  }

  handleChangeValue(e) {
    this.setState((prevState) => ({
      ...prevState,
      value: e.target.value
    }))
  }

  render() {
    const { placeholder } = this.props
    const { options, showOptions, value } = this.state

    return (
      <div className="O_Select">
        <A_TextField
          placeholder={placeholder}
          value={value}
          onChange={this.handleChangeValue}
          onFocus={() => {
            this.setVisibleOptions(true)
          }}
        />
        {showOptions && (
          <O_OptionsList
            options={options}
            handleSelectOption={this.handleSelectOption}
          />
        )}
      </div>
    )
  }
}
