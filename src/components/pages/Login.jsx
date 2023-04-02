/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete*/

// import './LoginUi.css';
// import profile from "./../image/a.png";
// import email from "./../image/email.jpg";
// import pass from "./../image/pass.png";

function Login() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <input type="password" placeholder="user name" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> or <a href="#">Sign Up</a>
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Login;