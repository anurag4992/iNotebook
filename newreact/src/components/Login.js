import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""})
  let navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password}) 
    });
    //api call ends
    const json = await response.json()

    if(json.success){
      //redirect
      localStorage.setItem("token", json.authToken)
      navigate("/")
      props.showAlert("Logged in successfully", "success")
    }
    else{
      props.showAlert("Invalid credentials!", "danger")
    }

  }

  const onChange = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="my-3">Please enter your credentials</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login