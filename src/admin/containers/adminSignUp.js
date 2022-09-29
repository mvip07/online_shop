import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { adminRegister } from "../../utils/api";
import API from "../../utils/axios";
import { bottomForm } from "../util/components";

function AdminSignup() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const notify = (text, status) => {

        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }
    function Submit() {
        API.post(`${adminRegister}`, {
            username: username,
            password: password,
            passwordConfirm: passwordConfirm
        })
            .then(res => {
                notify(`Success`, res.status)
                setTimeout(() => {
                    navigate("/adminLogin")
                }, 5500)
            })
            .catch(err => notify(err.response?.data?.message, err.response?.status))
    }


    return (
        <Wrapper>
            <ToastContainer />
            <div className="main-container">
                <div className="row">
                    <div id="content" className="col-lg-12 ">
                        <div>
                            <div className="col-lg-12 customer-login">
                                <div className="well">
                                    <p>
                                        <strong>Register</strong>
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
                                <div className="bottom-form" style={bottomForm}>
                                    <button
                                        className="btn btn-default pull-right col-lg-4"
                                        onClick={() => navigate(-1)}
                                    >
                                        Back
                                    </button>
                                    <button
                                        className="btn btn-default pull-right col-lg-4"
                                        onClick={() => {
                                            Submit();
                                            notify();
                                        }}
                                    >
                                        Register
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

.container {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  

  .bottom-form {
    min-width: 100%;
  }
`;
