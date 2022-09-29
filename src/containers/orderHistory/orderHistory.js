import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import API from "../../utils/axios"
import { allBag } from "../../utils/api";
import { useEffect, useState } from "react";
import AccountAside from "../../components/accountAside/accountAside";
import OrderHistoryItem from "../../components/orderHistory/orderHistory";
import Loader from "../../components/loader/loader";
function OrderHistory() {

	const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("onlineShopUser")).user?.id)
	const [allbag, setAllbag] = useState([])
	const [loader, setLoader] = useState(false)
	useEffect(() => {
		if (userId) setUserId(JSON.parse(localStorage.getItem("onlineShopUser")).user?.id)
		API.get(`${allBag}/${userId}`)
		.then(res => {
			setAllbag(res.data)
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
							<i className="fa fa-home"> </i>
						</Link>
					</li>
					<li>
						<Link to="#">Order History</Link>
					</li>
				</ul>

				<div className="row">
					<div className="col-sm-9" id="content">
						<h2 className="title">Order History</h2>
						<div className="table-responsive">
							<table className="table table-bordered table-hover">
								<thead>
									<tr>
										<td className="text-center">Image</td>
										<td className="text-left">Name</td>
										<td className="text-center">Color</td>
										<td className="text-center">Qty</td>
										<td className="text-center">Status</td>
										<td className="text-center">Date Added</td>
										<td className="text-right">Total</td>
										<td> </td>
									</tr>
								</thead>
								<tbody>
									<tr><td></td></tr>
									{
										loader == true ?
											allbag.map((data) =>  (
												<OrderHistoryItem data={data} key={Math.random()} />
											))
										:
										<Loader />
									}								
								</tbody>
							</table>
						</div>
					</div>
					<AccountAside />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default OrderHistory;
