import React from "react";
import './style.css'
export default function LoginForm() {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="row">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <div id="alert" className="form-text" >
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
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
