import { React, useState } from "react";
import "./signUp.css";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <h1>SignUp</h1>

      <form>
        <input
          type="text"
          placeholder="name"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
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
          placeholder="name"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
