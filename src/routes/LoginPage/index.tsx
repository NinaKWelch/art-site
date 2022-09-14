import React from 'react'
import './style.css';
import { useAppStateValue } from '../../state';
import { allArtists } from '../../utils/mockUtils';
import { User } from '../../types'
import { useField } from '../../hooks';
import PageTemplate from '../../templates/PageTemplate'

const LoginPage = () => {
  const [state, dispatch] = useAppStateValue();
  const email = useField('email');
  const password = useField('password')

  const loginUser = (email: string, password: string) => {
    const user: User | undefined = allArtists.find((artist) => artist.email === email && artist.password === password)

    user && dispatch({ type: 'LOGIN_USER', payload: user })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(email.input.value, password.input.value)
    email.reset()
    password.reset()
  }

  if (state.currentUser) {
    return (
      <PageTemplate pageTitle='login'>
        <p>Already signed in</p>
      </PageTemplate>
    )
  }

  return (
    <PageTemplate pageTitle='login'>
      <form className='login-page-form' onSubmit={handleSubmit}>
        <label className='login-page-form-input-label' htmlFor='email'>Email:</label>
        <input className='login-page-form-input' {...email.input} required />
        <label className='login-page-form-input-label' htmlFor='password'>Password:</label>
        <input className='login-page-form-input' {...password.input} required />
        <button className='login-page-form-submit-button' type='submit'>Login</button>
      </form>
    </PageTemplate>
  )
}

export default LoginPage