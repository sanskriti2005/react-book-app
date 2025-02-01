import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

export const Login = () => {
  const {login, loginFunc} = useContext(AuthContext);
  const initVals = { username:"", password:""}
  const [formData, setFormData] = useState(initVals);

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]:value});
  }

  const submitLoginFom = (e) => {
    e.preventDefault();
    loginFunc(formData);
  }
  return (
      <form onSubmit={submitLoginFom}>
        <input type="text" placeholder='Enter username' name='username' value={formData.username} onChange={handleInput}/>
        <input type="password" placeholder='Enter Password' name='password' value={formData.password} onChange={handleInput}/>
        <input type="submit" value="Login" />
      </form>
  )
}
