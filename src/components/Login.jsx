import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

  const [credentials, setCredentials] = useState({ username: "", password: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://dummyjson.com/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: credentials.username, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);

    if (json.email) {
      //save the auth toke and redirect
      localStorage.setItem('token', json.authToken);
      props.showAlert("Logged In Successfully", "success")
      navigate("/home");
      props.setShowLogin(false);
    }
    else {
      props.showAlert("Incorrect Details", "danger")
    }

  }

  const OnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='mt-3'>
      <h2 className='my-2 text-center'>Login to continue your Shopping</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="username" className="form-control" id="username" placeholder="Enter your username here" onChange={OnChange} value={credentials.username} name='username' />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type='password' className="form-control" id="password" onChange={OnChange} value={credentials.password} name="password" />
        </div>

        <button type="submit" className='btn btn-primary' >Submit</button>
      </form>
    </div>

  )
}

export default Login
