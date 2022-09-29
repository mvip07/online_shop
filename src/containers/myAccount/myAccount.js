import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AccountAside from "../../components/accountAside/accountAside";
import Footer from "../../components/footer/footer";
import Loader from "../../components/loader/loader";
import Navbar from "../../components/navbar/navbar";
import API from "../../utils/axios";

function MyAccount() {
	const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("onlineShopUser"))?.user?.id)
	const [userDetail, setUserDetail] = useState({})
	const [loader, setLoader] = useState(false)
	useEffect(() => {
		setUserId(JSON.parse(localStorage.getItem("onlineShopUser"))?.user?.id);
		API.get(`/user/${userId}`)
		.then((res) => {
			setUserDetail(res.data)
			setLoader(true)
		})
		.catch(err => console.log(err))

	}, [userId])

	return (
		<div id="wrapper" className="wrapper-full ">
			<Navbar />
			<div className="main-container container">
				<ul className="breadcrumb">
					<li>
						<Link to="/">
							<i className="fa fa-home"></i>
						</Link>
					</li>
					<li>
						<Link to="#">My Account</Link>
					</li>
				</ul>

				{
					loader == true ?
					<div className="row">
					<div className="col-sm-9" id="content">
						<h2 className="title">My Account</h2>
						<p className="lead">
							Hello, <strong>{userDetail.firstname}, {userDetail.lastname}</strong> - your account
							information.
						</p>
						<form>
							<div className="row">
								<div className="col-sm-6">
									<fieldset id="personal-details">
										<legend>Personal Details</legend>
										<div className="form-group required">
											<label
												htmlFor="input-firstname"
												className="control-label"
											>
												First Name
											</label>
											<input
												type="text"
												className="form-control"
												id="input-firstname"
												placeholder="First Name"
												defaultValue={userDetail.firstname}
												name="firstname"
												disabled="true"
											/>
										</div>
										<div className="form-group required">
											<label htmlFor="input-lastname" className="control-label">
												Last Name
											</label>
											<input
												type="text"
												className="form-control"
												id="input-lastname"
												placeholder="Last Name"
												defaultValue={userDetail.lastname}
												name="lastname"
												disabled="true"
											/>
										</div>
										<div className="form-group required">
											<label htmlFor="input-email" className="control-label">
												E-Mail
											</label>
											<input
												type="email"
												className="form-control"
												id="input-email"
												placeholder="E-Mail"
												defaultValue={userDetail.email}
												name="email"
												disabled="true"
											/>
										</div>
										<div className="form-group required">
											<label htmlFor="input-telephone" className="control-label">
												Telephone
											</label>
											<input
												type="tel"
												className="form-control"
												id="input-telephone"
												placeholder="Telephone"
												defaultValue={userDetail.telephone}
												name="telephone"
												disabled="true"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="input-fax" className="control-label">
												Fax
											</label>
											<input
												type="text"
												className="form-control"
												id="input-fax"
												placeholder="Fax"
												defaultValue={userDetail.fax}
												name="fax"
												disabled="true"
											/>
										</div>
									</fieldset>
									<br />
								</div>
								<div className="col-sm-6">
									<fieldset>
										<legend>Change Password</legend>
										<div className="form-group required">
											<label htmlFor="input-password" className="control-label">
												New Password
											</label>
											<input
												type="password"
												className="form-control"
												id="input-password"
												placeholder="New Password"
												defaultValue=""
												name="new-password"
												disabled="true"
											/>
										</div>
										<div className="form-group required">
											<label htmlFor="input-confirm" className="control-label">
												New Password Confirm
											</label>
											<input
												type="password"
												className="form-control"
												id="input-confirm"
												placeholder="New Password Confirm"
												defaultValue=""
												name="new-confirm"
												disabled="true"
											/>
										</div>
									</fieldset>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6">
									<fieldset id="address">
										<legend>Payment Address</legend>
										<div className="form-group">
											<label htmlFor="input-company" className="control-label">
												Company
											</label>

											<input
												type="text"
												className="form-control"
												id="input-company"
												placeholder="Company"
												defaultValue={userDetail.company}
												name="company"
												disabled="true"
											/>
										</div>
										<div className="form-group required">
											<label htmlFor="input-address-1" className="control-label">
												Address 1
											</label>
											<input
												type="text"
												className="form-control"
												id="input-address-1"
												placeholder="Address 1"
												defaultValue={userDetail.address1}
												name="address_1"
												disabled="true"
											/>
										</div>
										<div className="form-group required">
											<label htmlFor="input-address-2" className="control-label">
												Address 2
											</label>
											<input
												type="text"
												className="form-control"
												id="input-address-2"
												placeholder="Address 2"
												defaultValue={userDetail.address2}
												name="address_2"
												disabled="true"
											/>
										</div>
										<div className="form-group required">
											<label htmlFor="input-city" className="control-label">
												City
											</label>
											<input
												type="text"
												className="form-control"
												id="input-city"
												placeholder="City"
												defaultValue={userDetail.city}
												name="city"
												disabled="true"
											/>
										</div>
										<div className="form-group required">
											<label htmlFor="input-postcode" className="control-label">
												Post Code
											</label>
											<input
												type="text"
												className="form-control"
												id="input-postcode"
												placeholder="Post Code"
												defaultValue={userDetail.postCode}
												name="postcode"
												disabled="true"
											/>
										</div>
										<div className="form-group required">
											<label htmlFor="input-country" className="control-label">
												Country
											</label>
											<input
												type="text"
												className="form-control"
												id="input-country"
												placeholder="Country"
												defaultValue={userDetail.country}
												name="country"
												disabled="true"
											/>
										</div>
									</fieldset>
								</div>
							</div>
						</form>
					</div>

					<AccountAside />
				</div>
				:
				<Loader />
				}
				
			</div>
			<Footer />
		</div>
	);
}

export default MyAccount;
