import { useState } from "react";
import { Link } from "react-router-dom";

function WishlistCard({ data, AddtoBag }) {

	const bagElements = JSON.parse(localStorage.getItem("onlineShopCart"))?.map(
		({ _id }) => _id
	);

	return (
		<tr>
			<td className="text-center">
				<Link to={`/productDetail/${data._id}`}>
					<img
						width="70px"
						src={`${data.image}`}
						alt="Xitefun Causal Wear Fancy Shoes"
						title="Xitefun Causal Wear Fancy Shoes"
					/>
				</Link>
			</td>
			<td className="text-left">
				<Link to={`/productDetail/${data._id}`}>{data.title}</Link>
			</td>
			<td className="text-left">{data.model}</td>
			<td className="text-right">% {data.discount}</td>
			<td className="text-right">
				<div className="price">
					<span className="price-new">$ {data.price}</span>
				</div>
			</td>
			<td className="text-right">
				<button
					className="btn btn-primary"
					data-toggle="tooltip"
					type="button"
					data-original-title="Add to Cart"
					onClick={() => AddtoBag(data)}
					style={{
						display: bagElements?.includes(data._id) ? "none" : "",
					}}
				>
					<i className="fa fa-shopping-cart"> </i>
				</button>
			</td>
		</tr>
	);

}

export default WishlistCard;