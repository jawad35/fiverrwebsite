import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./auth.css";
const SignUp = () => {
  const history = useHistory();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/users/register", userData);
    console.log(res);

    if (res) {
      history.push("/");
    }
  };
  return (
    <body>
      <div className="container">
        <div className="row">
          <div className="mx-auto col-sm-9 col-md-7 col-lg-5">
            <div className="my-5 border-0 shadow card rounded-3">
              <div className="p-4 card-body p-sm-5">
                <h5 className="mb-5 text-center card-title fw-light fs-5">
                  Sign Up
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="fullname"
                      name="fullname"
                      value={userData.fullname}
                      onChange={handleChangeInput}
                    />
                    <label for="floatingInput">Full name</label>
                  </div>
                  <div className="mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="username"
                      name="username"
                      value={userData.username}
                      onChange={handleChangeInput}
                    />
                    <label for="floatingInput">User name</label>
                  </div>
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
                  <div className="mb-3 form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Confirm Password"
                      name="cf_password"
                      value={userData.cf_password}
                      onChange={handleChangeInput}
                    />
                    <label for="floatingPassword">Confirm Password</label>
                  </div>

                  <div className="mb-3 form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    <label
                      className="form-check-label"
                      for="rememberPasswordCheck"
                    >
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                  <hr className="my-4" />

                  <div className="d-grid">
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
