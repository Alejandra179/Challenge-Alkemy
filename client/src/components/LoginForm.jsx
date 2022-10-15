import React from "react";
import "./style.css";
import { useState } from "react";
import { useAuthContext } from "../context/authContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validatedLogin, setValidatedLogin] = useState(false);
  const { login } = useAuthContext();
  const [errors, setErrors] = useState({});

  const validateLogin = () => {
    setErrors({});
    if (
      email === "" ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      setErrors({
        ...errors,
        email: "email invalid",
      });
      return false;
    } else if (password === "") {
      setErrors({
        ...errors,
        password: "password is required",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateLogin()) {
      await login({ email, password });
    } else {
      alert("invalid credencials!");
    }
  };
  return (
    <div className="container">
      <div className="d-flex">
        <div className="row">
       
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="alert" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
