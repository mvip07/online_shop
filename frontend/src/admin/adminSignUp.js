import styled from "styled-components";
import { useState } from "react";
import API from "../containers/utils/axios";
import { useNavigate } from "react-router-dom";

function AdminSignup() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("")

    function Submit() {
        API.post(`/adminSignup`, {
            username: username,
            password: password,
            passwordConfirm: passwordConfirm
        }).then((res) => {
            navigate("/adminLogin");
        });
    }

    return (
        <Wrapper>
            <div className="main-container container">
                <div className="row">
                    <div id="content" className="col-lg-12 ">
                        <div>
                            <div className="col-lg-12 customer-login">
                                <div className="well">
                                    <p>
                                        <strong>I am a returning customer</strong>
                                    </p>
                                    <div className="form-group">
                                        <label className="control-label ">E-Mail Address</label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            onChange={({ target }) => setUsername(target.value)}
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

                                    <div className="form-group">
                                        <label className="control-label">Password Confirm</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            onChange={({ target }) => setPasswordConfirm(target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="bottom-form ">
                                    <button
                                        className="btn btn-default pull-right col-lg-12"
                                        onClick={Submit}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default AdminSignup;
const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);

  .bottom-form {
    min-width: 100%;
  }
`;
