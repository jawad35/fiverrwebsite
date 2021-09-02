import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./auth.css";
const SignUp = () => {
  const initialState = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async () => {
    const res = await axios.post("/api/register", userData);
    console.log(res);
  };
  return (
    <body>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">
                  Sign Up
                </h5>
                <form>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="fullname"
                      name="fullname"
                      value={userData.fullname}
                      onChange={handleChangeInput}
                    />
                    <label for="floatingInput">Full name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="username"
                      name="username"
                      value={userData.username}
                      onChange={handleChangeInput}
                    />
                    <label for="floatingInput">User name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      value={userData.email}
                      onChange={handleChangeInput}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      value={userData.password}
                      onChange={handleChangeInput}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Confirm Password"
                      name="cf_password"
                      value={userData.cf_password}
                      onChange={handleChangeInput}
                    />
                    <label for="floatingPassword">Confirm Password</label>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    <label class="form-check-label" for="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>
                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Sign Up
                    </button>
                  </div>
                  <hr class="my-4" />

                  <div class="d-grid">
                    <Link to="/signin">if you have already account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignUp;
