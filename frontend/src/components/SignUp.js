import React, { useState} from 'react'
import {useNavigate} from "react-router-dom"

function SignUp() {
    let navigate = useNavigate();

    const [state, setState] = useState({first_name: "", last_name: "", email: "", password: ""});


    const handleInputChange = (e) => {
        setState((props) => ({
            ...props,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }
    

    function handleClick () {
        navigate("/RecipePage")
    }
  return (
    <form onSubmit={handleSubmit} className="form-login">
        <h1>Sign Up</h1>
        <div className="form-inner">
        <div className="form-control">
                <input 
                type="text" 
                name='first_name' 
                value={state.first_name}
                onChange={handleInputChange} 
                placeholder="First Name"
                />
            </div>
            <div className="form-control">
                <input 
                type="text" 
                name='last_name' 
                value={state.last_name}
                onChange={handleInputChange} 
                placeholder="Last Name"
                />
            </div>
            <div className="form-control">
                <input 
                type="text" 
                name='email' 
                value={state.email}
                onChange={handleInputChange} 
                placeholder="Email"
                />
            </div>
            <div className="form-control">
                <input 
                type="password" 
                name="password" 
                value={state.password}
                onChange={handleInputChange}
                placeholder="Password"
                />
            </div>
            <div className="form-control-submit">
                <button type="submit" onClick={handleClick}>Create Account</button>
            </div>

            {/* <div className="form-control-account">
                <button type='submit'>Create Account</button>
            </div> */}
           
        </div>
    </form>
  )
}

export default SignUp