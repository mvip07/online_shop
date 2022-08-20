import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import CheckoutList from "../../components/checkout/checkoutList";
import Calculation from "../../components/calculation/calculation";
import API from "../../utils/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const notify = (text, status) => {
	if (status === 200 || status === 201) toast.success(`${text}`);
	if (
		status === 400 ||
		status === 401 ||
		status === 403 ||
		status === 404 ||
		status === 500 ||
		status === 503
	)
		toast.error(`${text}`);
};

function Checkout() {
	const [cart, setCart] = useState([]);
	const [userDetail, setUserDetail] = useState({});
	const [validOinvalidCardNumber, setvalidOinvalidCardNumber] = useState(false);
	const [validOinvalidCardDate, setvalidOinvalidCardDate] = useState(false);
	const [userId, setUserId] = useState(
		JSON.parse(localStorage.getItem("onlineShopUser"))?.user?.id
	);

	const [newDate, setnewDate] = useState(
		`${new Date().getFullYear()}-${new Date().getMonth() + 1 <= 9
			? `0${new Date().getMonth() + 1}`
			: new Date().getMonth() + 1
		}-${new Date().getUTCDate() <= 9
			? `0${new Date().getUTCDate()}`
			: new Date().getUTCDate()
		}`
	);
	useEffect(() => {
		setnewDate(
			`${new Date().getFullYear()}-${new Date().getMonth() + 1 <= 9
				? `0${new Date().getMonth() + 1}`
				: new Date().getMonth() + 1
			}-${new Date().getUTCDate() <= 9
				? `0${new Date().getUTCDate()}`
				: new Date().getUTCDate()
			}`
		);
		setUserId(JSON.parse(localStorage.getItem("onlineShopUser"))?.user?.id);
		API.get(`/user/${userId}`).then((res) => setUserDetail(res.data));
		API.get(`/all/bag/${userId}`).then((res) => setCart(res.data));
	}, [userId, cart]);

	return (
		<div id="wrapper" className="wrapper-full ">
			<ToastContainer />
			<Navbar />
			<div className="main-container container">
				<ul className="breadcrumb">
					<li>
						<Link to="/">
							<i className="fa fa-home"></i>
						</Link>
					</li>
					<li>
						<Link to="/checkout">Checkout</Link>
					</li>
				</ul>

				<div className="row">
					{" "}
					<div id="content" className="col-sm-12">
						<h2 className="title">Checkout</h2>
						<div className="so-onepagecheckout ">
							<div className="col-left col-sm-4">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<i className="fa fa-user"></i> Your Personal Details
										</h4>
									</div>
									<div className="panel-body">
										<fieldset id="account">
											<div className="form-group required">
												<label
													htmlFor="input-payment-firstname"
													className="control-label"
												>
													First Name
												</label>
												<input
													type="text"
													className="form-control"
													id="input-payment-firstname"
													placeholder="First Name"
													defaultValue={userDetail.firstname}
													name="firstname"
												/>
											</div>
											<div className="form-group required">
												<label
													htmlFor="input-payment-lastname"
													className="control-label"
												>
													Last Name
												</label>
												<input
													type="text"
													className="form-control"
													id="input-payment-lastname"
													placeholder="Last Name"
													defaultValue={userDetail.lastname}
													name="lastname"
												/>
											</div>
											<div className="form-group required">
												<label
													htmlFor="input-payment-username"
													className="control-label"
												>
													E-Mail
												</label>
												<input
													type="email"
													className="form-control"
													id="input-payment-email"
													placeholder="E-Mail"
													defaultValue={userDetail.email}
													name="username"
												/>
											</div>
											<div className="form-group required">
												<label
													htmlFor="input-payment-telephone"
													className="control-label"
												>
													Telephone
												</label>
												<input
													type="tel"
													className="form-control"
													id="input-payment-telephone"
													placeholder="Telephone"
													defaultValue={userDetail.telephone}
													name="telephone"
												/>
											</div>
											<div className="form-group">
												<label
													htmlFor="input-payment-fax"
													className="control-label"
												>
													Fax
												</label>
												<input
													type="text"
													className="form-control"
													id="input-payment-fax"
													placeholder="Fax"
													defaultValue={userDetail.fax}
													name="fax"
												/>
											</div>
										</fieldset>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<i className="fa fa-book"></i> Your Address
										</h4>
									</div>
									<div className="panel-body">
										<fieldset id="address" className="required">
											<div className="form-group">
												<label
													htmlFor="input-payment-company"
													className="control-label"
												>
													Company
												</label>
												<input
													type="text"
													className="form-control"
													id="input-payment-company"
													placeholder="Company"
													defaultValue={userDetail.company}
													name="company"
												/>
											</div>
											<div className="form-group required">
												<label
													htmlFor="input-payment-address-1"
													className="control-label"
												>
													Address 1
												</label>
												<input
													type="text"
													className="form-control"
													id="input-payment-address-1"
													placeholder="Address 1"
													defaultValue={userDetail.address1}
													name="address_1"
												/>
											</div>
											<div className="form-group">
												<label
													htmlFor="input-payment-address-2"
													className="control-label"
												>
													Address 2
												</label>
												<input
													type="text"
													className="form-control"
													id="input-payment-address-2"
													placeholder="Address 2"
													defaultValue={userDetail.address2}
													name="address_2"
												/>
											</div>
											<div className="form-group required">
												<label
													htmlFor="input-payment-city"
													className="control-label"
												>
													City
												</label>
												<input
													type="text"
													className="form-control"
													id="input-payment-city"
													placeholder="City"
													defaultValue={userDetail.city}
													name="city"
												/>
											</div>
											<div className="form-group required">
												<label
													htmlFor="input-payment-postcode"
													className="control-label"
												>
													Post Code
												</label>
												<input
													type="number"
													className="form-control"
													id="input-payment-postcode"
													placeholder="Post Code"
													defaultValue={userDetail.postCode}
													name="postcode"
												/>
											</div>
											<div className="form-group required">
												<label
													htmlFor="input-payment-country"
													className="control-label"
												>
													Country
												</label>
												<input
													type="text"
													className="form-control"
													id="input-payment-country"
													placeholder="Country"
													defaultValue={userDetail.country}
													name="country"
												/>
											</div>

											<div className="checkbox">
												<label>
													<input
														type="checkbox"
														defaultChecked="checked"
														defaultValue="1"
														name="shipping_address"
													/>
													My delivery and billing addresses are the same.
												</label>
											</div>
										</fieldset>
									</div>
								</div>
							</div>
							<div className="col-right col-sm-8">
								<div className="row">
									<div className="col-sm-12">
										<div className="panel panel-default no-padding">
											<div className="col-sm-12  checkout-payment-methods">
												<div className="panel-heading">
													<h4 className="panel-title">
														<i className="fa fa-credit-card"> </i> Payment
														Method
													</h4>
												</div>
												<div className="panel-body col-sm-12">
													<p>
														Please select the preferred payment method to use on
														this order.
													</p>

													<div>
														<div className="radio">
															<label>
																<input
																	type="radio"
																	name="card"
																	defaultValue="visa"
																/>
																Visa
															</label>
														</div>

														<div className="radio">
															<label>
																<input
																	type="radio"
																	name="card"
																	defaultValue="paypal"
																/>
																Paypal
															</label>
														</div>

														<div className="card">
															<div className="col-sm-8">
																<label
																	htmlFor="Card-Number"
																	className="control-label"
																>
																	<h4 className="panel-title"> Card Number </h4>
																</label>
																<input
																	type="number"
																	className={`form-control ${validOinvalidCardNumber === false
																			? "invalid"
																			: "valid"
																		}`}
																	id="input-payment-card"
																	placeholder="1234-5678-1234-5678"
																	name="card"
																	onChange={({ target }) =>
																		target.value.length === 16
																			? setvalidOinvalidCardNumber(true)
																			: setvalidOinvalidCardNumber(false)
																	}
																/>
															</div>
															<div className="col-sm-3">
																<label
																	htmlFor="Card-Number"
																	className="control-label"
																>
																	<h4 className="panel-title"> Card Date </h4>
																</label>
																<input
																	type="date"
																	className={`form-control ${validOinvalidCardDate === false
																			? "invalid"
																			: "valid"
																		}`}
																	id="input-payment-card"
																	placeholder="date"
																	name="card"
																	onChange={({ target }) =>
																		target.value >= newDate
																			? setvalidOinvalidCardDate(true)
																			: setvalidOinvalidCardDate(false)
																	}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="panel panel-default">
											<div className="panel-heading">
												<h4 className="panel-title">
													<i className="fa fa-shopping-cart"></i> Shopping cart
												</h4>
											</div>
											<div className="panel-body">
												<div className="table-responsive">
													<table className="table table-bordered">
														<thead>
															<tr>
																<td className="text-center">Image</td>
																<td className="text-left">Product Name</td>
																<td className="text-left">Model</td>
																<td className="text-left">Color</td>
																<td className="text-left">Quantity</td>
																<td className="text-right">Unit Price</td>
																<td className="text-right">Total</td>
																<td className="text-center">Button</td>
															</tr>
														</thead>
														<tbody>
															{cart.map((data) => (
																<CheckoutList data={data} key={Math.random()} />
															))}
														</tbody>
													</table>
													<table className="table table-bordered">
														{cart.length > 0 ? <Calculation data={cart} /> : ""}
													</table>
												</div>
											</div>
										</div>
									</div>
									<div className="pull-right ">
										<input
											type="button"
											className="btn btn-primary"
											id="button-confirm"
											defaultValue="Confirm Order"
										/>
									</div>
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

export default Checkout;
