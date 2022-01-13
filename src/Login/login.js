import { React, useState } from "react";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button>Login </button>
      </form>
    </>
  );
};

export default Login;
