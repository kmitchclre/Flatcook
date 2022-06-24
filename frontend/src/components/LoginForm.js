import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  let navigate = useNavigate();

  const [state, setState] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setState((props) => ({
      ...props,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  function handleClickMain() {
    navigate("/CookBooksPage");
  }

  function handleSignUp() {
    navigate("/SignUp");
  }

  return (
    <form onSubmit={handleSubmit} className="form-login">
      <h1>Login</h1>
      <div className="form-inner">
        <div className="form-control">
          <input
            type="text"
            name="email"
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
          <button onClick={handleClickMain}>Login</button>{" "}
          <button onClick={handleSignUp} type="submit">
            Create Account
          </button>
        </div>

        {/* <div className="form-control-account">
                <button type='submit'>Create Account</button>
            </div> */}
      </div>
    </form>
  );
}

export default LoginForm;
