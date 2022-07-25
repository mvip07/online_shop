import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import ShoppingList from "../../components/shoppingCartList/shoppingList";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (text, status) => {
	if (status === 200 || status === 201) toast.success(`${text}`)
	if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
}

function ShoppingCart() {
	const navigate = useNavigate()
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem("onlineShopCart")) || []);
	useEffect(() => {
		setCart(JSON.parse(localStorage.getItem("onlineShopCart")) || [])
	}, [])

	return (
		<div id="wrapper" className="wrapper-full ">
			<Navbar />
			<ToastContainer />
			<div className="main-container container">
				<ul className="breadcrumb">
					<li>
						<Link to="/">
							<i className="fa fa-home"></i>
						</Link>
					</li>
					<li>
						<Link to="#">Shopping Cart</Link>
					</li>
				</ul>

				<div className="row">
					<div id="content" className="col-md-12">
						<h2 className="title">Shopping Cart</h2>
						<div className="table-responsive form-group">
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
									</tr>
								</thead>
								<tbody>
									{
										cart.map((data) => {
											return (
												<ShoppingList data={data} key={Math.random()} />
											)
										})
									}

								</tbody>
							</table>
						</div>
						<div className="buttons">
							<div className="pull-right">
								<div className="btn btn-primary"
								onClick={() => navigate("/checkout")}
								>Checkout
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

export default ShoppingCart;
