import React, { Component } from 'react'
import A_Input from '../../atoms/A_Input/A_Input.jsx'
import A_Button from '../../atoms/A_Button/A_Button.jsx'
import './O_Login.scss'
export default class O_Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: ''
    }

    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleLoginChange(e) {
    const value = e.target.value
    this.setState((prevState) => ({
      ...prevState,
      login: value
    }))
  }

  handlePasswordChange(e) {
    const value = e.target.value
    this.setState((prevState) => ({
      ...prevState,
      password: value
    }))
  }

  handleButtonClick() {
    console.log('login: ', this.state.login)
    console.log('password: ', this.state.password)
  }

  canClickButton() {
    const { login, password } = this.state
    return login && password
  }

  render() {
    const { login, password } = this.state

    return (
      <div className="W_LoginContainer">
        <A_Input
          placeholder="Логин"
          value={login}
          onChange={this.handleLoginChange}
        />
        <A_Input
          placeholder="Пароль"
          value={password}
          onChange={this.handlePasswordChange}
        />
        <A_Button
          text="Войти"
          handleClick={this.handleButtonClick}
          disabled={!this.canClickButton()}
        />
      </div>
    )
  }
}
