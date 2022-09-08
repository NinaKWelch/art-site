import React, { useState } from 'react'
import './style.css';
import PageTemplate from '../../templates/PageTemplate'

interface LoginPageProps {
  handleLoginUser: Function;
}

const defaultFormData = {
  email: '',
  password: '',
}

const LoginPage = ({ handleLoginUser }: LoginPageProps) => {
  const [fromData, setFormData] = useState(defaultFormData);
  const { email, password } = fromData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLoginUser(email, password)
    setFormData(defaultFormData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <PageTemplate pageTitle='login'>
      <form className='login-page-form' onSubmit={handleSubmit}>
        <label className='login-page-form-input-label' htmlFor='email'>Email:</label>
        <input className='login-page-form-input' type='email' name='email' id='email' value={email} required onChange={handleChange} />
        <label className='login-page-form-input-label' htmlFor='password'>Password:</label>
        <input className='login-page-form-input' type='password'name='password' id='password' value={password} required onChange={handleChange} />
        <button className='login-page-form-submit-button' type='submit'>Login</button>
      </form>
    </PageTemplate>
  )
}

export default LoginPage