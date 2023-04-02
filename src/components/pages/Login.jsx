/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete*/

import HomePage from './HomePage';
import './pages.css';
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  function loginClick() {
    // navigate("/home");
  }
  
  function backClick() {
    navigate("/home");
  }

  return (
    <div className="main-container">
      <div className="sub-main-container">

        <div>
          {/* <div className="imgs">
            <div className="container-image">
            </div>
          </div> */}
          <div>

            <h1 className="text-tittle">Login Page</h1>

            <div className="margin-around">
              <input className="input-field-name" />
            </div>

            <div className="margin-around">
              <input className="input-field-password" />
            </div>

            <div className="margin-around">
              <button className="login-button" onClick={loginClick}>Login</button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> or <a href="#">Sign Up</a>
            </p>

            <div className="margin-around">
              <button className="login-button" onClick={backClick}>Back</button>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;