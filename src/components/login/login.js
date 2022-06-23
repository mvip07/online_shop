import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import API from "../../containers/utils/axios";
// or

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Submit() {
    const resBody = {
      email: email,
      password: password,
    };
    API.post(`/login`, resBody).then((res) => {
      localStorage.setItem("onlineShopUserToken", res.data.token);
      navigate("/");
    });
  }

  return (
    <div id="wrapper" className="wrapper-full ">
      <Navbar />
      <div className="main-container container">
        <ul className="breadcrumb">
          <li>
            <Link to="/">
              <i className="fa fa-home"> </i>
            </Link>
          </li>
          <li>
            <p>Login</p>
          </li>
        </ul>

        <div className="row">
          <div id="content" className="col-lg-6 ">
            <div>
              <div className="col-lg-12 customer-login">
                <div className="well">
                  <p>
                    <strong>Login</strong>
                  </p>
                  <div className="form-group">
                    <label className="control-label ">E-Mail Address</label>

                    <input
                      type="email"
                      className="form-control"
                      onChange={({ target }) => setEmail(target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={({ target }) => setPassword(target.value)}
                    />
                  </div>
                </div>
                <div className="bottom-form">
                  <Link to="/register" className="forgot">
                    Forgotten Password
                  </Link>
                  <button
                    className="btn btn-default pull-right"
                    onClick={Submit}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
