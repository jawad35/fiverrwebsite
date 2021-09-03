import React, { useState } from "react";
import "./auth.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const history = useHistory();

  const initialState = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/api/users/login",
      userData
    );
    if (res) {
      history.push("/home");
    }
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={userData.email}
                    onChange={handleChangeInput}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="mb-3 form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    onChange={handleChangeInput}
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                {/* <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label class="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div> */}
                <div class="d-grid">
                  <button
                    class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>

                <hr class="my-4" />
                <div class="d-grid mb-2">
                  <button
                    class="btn btn-google btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    <i class="fab fa-google me-2"></i> Sign in with Google
                  </button>
                </div>
              </form>
              <Link to="/signup">If you dont have an account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
