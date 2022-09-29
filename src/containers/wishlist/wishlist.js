import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import WishlistCard from "../../components/wishlist/wishlistCard";
import AccountAside from "../../components/accountAside/accountAside"

function Wishlist() {
	const [like, setLike] = useState(
		JSON.parse(localStorage.getItem("onlineShopLike")) || []
	);

	const [bag, setBag] = useState(
		JSON.parse(localStorage.getItem("onlineShopCart")) || []
	);

	const AddtoBag = (data) => {
		setBag([...bag, data]);
		localStorage.setItem("onlineShopCart", JSON.stringify([...bag, data]));
	};

	useEffect(() => {
		setLike(JSON.parse(localStorage.getItem("onlineShopLike")) || [])
	}, [])

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
						<Link to="#">My Wish List</Link>
					</li>
				</ul>

				<div className="row">
					<div id="content" className="col-sm-9">
						<h2 className="title">My Wish List</h2>
						<p className="btn btn-danger" style={{marginBottom: "10px"}} 
							onClick={() => {
								localStorage.removeItem("onlineShopLike");
								setLike([])
							}}
						>My Wish List Clear</p>
						<div className="table-responsive">
							<table className="table table-bordered table-hover">
								<thead>
									<tr>
										<td className="text-center">Image</td>
										<td className="text-left">Product Name</td>
										<td className="text-left">Model</td>
										<td className="text-right">Discount</td>
										<td className="text-right">Price (x1)</td>
									</tr>
								</thead>
								<tbody>
									{
										like.map((data) => (
											<WishlistCard data={data} AddtoBag={AddtoBag} key={Math.random()} />
										))
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

export default Wishlist;
