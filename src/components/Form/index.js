import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { validateEmail } from '../../utils/validate'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: {
        value: props.email,
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        value: event.target.value,
      },
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const isEmailValid = validateEmail(this.state.email.value)

    if (!isEmailValid || !this.state.password.value) {
      this.setState({
        email: {
          ...this.state.email,
          error: !isEmailValid,
        },
      })

      this.setState({
        password: {
          ...this.state.password,
          error: Boolean(!this.state.password.value),
        },
      })
    } else {
      // provolat API

      console.log(this.state)
    }
  }

  render() {
    const { email, password } = this.state

    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <div>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="email"
            value={email.value}
          />
          {email.error && <div>Email is invalid</div>}
        </div>
        <div>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={password.value}
          />
          {password.error && <div>Please fill password</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

Form.defaultProps = {
  email: 'dankijkov@gmail.com',
}

Form.propTypes = {
  email: PropTypes.string,
}

export default Form
