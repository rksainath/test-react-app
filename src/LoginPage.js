import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LoginPage = (props) => {
  const [uname, setUname] = useState('')
  const [pass, setPass] = useState('')

  const makeAPICall = async () => {
    try {
      const response = await axios.get('http://localhost:7005/test')
      const data = await response.json()
      console.log({ data })
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall()
  }, [])

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:7005/login', {
        username: uname,
        password: pass,
      })
      const { token, username } = response.data
      // Store the token or perform any necessary actions

      props.setToken(token)
      props.setAuthorizedName(username)
    } catch (error) {
      console.error('Login error:', error.response.data.error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin()
  }

  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit} action=''>
        <div className='input-container'>
          <label>Username </label>
          <input type='text' name='uname' value={uname} onChange={(e) => setUname(e.target.value)} required />
        </div>
        <div className='input-container'>
          <label>Password </label>
          <input type='password' name='pass' value={pass} onChange={(e) => setPass(e.target.value)} required />
        </div>
        <div className='button-container'>
          <input type='submit' />
        </div>
      </form>
    </div>
  )

  return (
    <div>
      <div className='login-form'>
        <div className='title'>Sign In</div>
        {renderForm}
      </div>
    </div>
  )
}

export default LoginPage
