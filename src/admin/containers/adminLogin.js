import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "../../utils/axios";
import { bottomForm } from "../util/components";
import { adminLogin } from "../../utils/api";

function AdminLogin() {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const notify = (text, status) => {
		if (status === 200 || status === 201) toast.success(`${text}`)
		if (status === 400 || status === 401) toast.error(`${text}`)
	}
	function Submit() {
		API.post(`${adminLogin}`, {
			username: username,
			password: password,
		})
			.then((res) => {
				notify(`Success`, res.status)
				setTimeout(() => {
					localStorage.setItem("onlineShopAdminToken", JSON.stringify(res.data));
					navigate("/admin");
				}, 5500)
			})
			.catch(err => notify(err.response?.data?.message, err.response?.status))

	}

	return (
		<Wrapper>
			<ToastContainer />
			<div className="container">
				<div className="row">
					<div id="content" className="col-lg-12 ">
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
								</div>
								<div className="bottom-form ">
									<div className="bottom-form" style={bottomForm}>
										<button
											className="btn btn-default pull-right col-lg-4"
											onClick={() => navigate("/adminSignUp")}
										>
											Register
										</button>
										<button
											className="btn btn-default pull-right col-lg-4"
											onClick={() => {
												Submit();
												notify();
											}}
										>
											Login
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default AdminLogin;
const Wrapper = styled.div`
 
  .bottom-form {
    min-width: 100%;
  }
`;
