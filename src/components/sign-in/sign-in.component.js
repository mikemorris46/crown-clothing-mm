import React, { Component } from 'react'

import { auth, signInWithGoogle } from 'firebase/firebase.utils'

import FormInput from 'components/form-input/form-input.component'
import CustomButton from 'components/custom-button/custom-button.component'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarConTainer
} from './sign-in.styles'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)

      this.setState({
        email: '',
        password: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    event.preventDefault()

    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render () {
    const { email, password } = this.state

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <ButtonsBarConTainer>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarConTainer>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn
