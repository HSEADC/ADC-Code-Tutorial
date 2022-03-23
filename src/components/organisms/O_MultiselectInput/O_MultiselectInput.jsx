import React, { Component } from 'react'
import './O_MultiselectInput.scss'
import A_Input from '../../atoms/A_Input/A_Input.jsx'
import A_Chip from '../../atoms/A_Chip/A_Chip.jsx'
import A_OptionItem from '../../atoms/A_OptionItem/A_OptionItem.jsx'

export default class O_MultiselectInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOptions: [],
      disabled: props.disabled,
      options: props.options,
      showOptions: false
    }
  }

  handleSelectOption = (id) => {
    const selectedOption = this.state.options.find((elem) => elem.id === id)
    if (!selectedOption) {
      return
    }

    const updatedOptions = this.state.options.filter(
      (option) => option.id !== id
    )

    this.setState((prevState) => ({
      ...prevState,
      selectedOptions: [...prevState.selectedOptions, selectedOption],
      options: updatedOptions
    }))
  }

  handleUnselectOption = (id) => {
    const unselectedOption = this.state.selectedOptions.find(
      (elem) => elem.id === id
    )
    if (!unselectedOption) {
      return
    }

    const newSelectedOptions = this.state.selectedOptions.filter(
      (option) => option.id !== id
    )

    this.setState((prevState) => ({
      ...prevState,
      options: [...prevState.options, unselectedOption],
      selectedOptions: newSelectedOptions
    }))
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

  render() {
    const { selectedOptions, options, showOptions } = this.state
    const { placeholder } = this.props
    const optionElements = options.map((option) => (
      <A_OptionItem
        key={option.id}
        id={option.id}
        value={option.value}
        onSelect={this.handleSelectOption}
      />
    ))

    const chips = selectedOptions.map((option) => (
      <A_Chip
        key={option.id}
        text={option.value}
        handleClick={() => {
          this.handleUnselectOption(option.id)
        }}
      />
    ))

    return (
      <div className="O_MultiselectInput">
        <A_Input
          onFocus={() => this.setVisibleOptions(true)}
          disabled={options.length === 0}
          placeholder={placeholder}
        >
          {chips}
        </A_Input>
        <div className="C_OptionsList">{showOptions && optionElements}</div>
      </div>
    )
  }
}
