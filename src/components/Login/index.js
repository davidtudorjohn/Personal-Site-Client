import React from "react";
import "./login.css";
const Login = () => {
  return (
    <form id="login-form">
      <section>
        <h2>Login</h2>
      </section>
      <section>
        <label for="login-form-email-input">Email</label>
        <br />
        <input id="login-form-email-input" name="email" type="email" />
        <br />
      </section>

      <section>
        <label for="login-form-password-input">Password</label>
        <br />
        <input id="login-form-password-input" name="password" type="password" />
        <br />
      </section>

      <section>
        <button id="login-form-btn" type="submit" for="login-form">
          Login
        </button>
        <br />
      </section>
      <section>
        <a href="#">Forgot your password?</a>
      </section>
    </form>
  );
};
export default Login;
