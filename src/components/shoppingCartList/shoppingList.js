import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { notify } from "../../containers/shoppingCartPage/shoppingCart";
import API from "../../utils/axios";
function ShoppingList({ data }) {
	const [choose, setChoose] = useState({ quantity: 1, totalPrice: 0, colorCheck: "" })
	const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("onlineShopUser"))?.user.id)

	useEffect(() => {
		setUserId(JSON.parse(localStorage.getItem("onlineShopUser"))?.user.id)
	}, [userId])

	function SaveDatabase (data, choose) {
		if (choose.quantity !== 0 && choose.totalPrice !== 0 && choose.colorCheck !== "" && choose.quantity > 0 &&) {
			API.post(`/create/bag/${userId}`,{
				userId: userId,
				productId: data._id,
				date: data.date,
				title: data.title,
				brand: data.brand,
				color: data?.color[choose.colorCheck],
				price: data.price,
				stars: data.stars,
				category: data.category,
				discount: data.discount,
				quantity: choose.quantity,
				model: data.model,
				description: data.description,
				width: data.width,
				hegth: data.hegth,
				depth: data.depth,
				totalPrice: choose.totalPrice,
				image: data.image,
			}).then(res => notify(res.data?.message, res.status))
		} else {
			notify("You have not yet chosen the number and color of the product", 400)
		}
	}
	return (
		<tr>
			<td className="text-center">
				<Link to="#">
					<img
						width="70px"
						src={`${data.image}`}
						alt="Img"
						title="Aspire Ultrabook Laptop"
						className="img-thumbnail"
					/>
				</Link>
			</td>
			<td className="text-left">
				<Link to="#">{data.title}</Link>
				<br />
			</td>
			<td className="text-left">{data.model}</td>
			<td className="text-left grid">
				{
					data?.color?.map((items, index) => (
						<div
							key={Math.random()}
							className="color-box"
							style={{ background: `${items}`, transform: `${choose.colorCheck === index ? "scale(1.2)" : ""}` }}
							onClick={() => setChoose({ quantity: choose.quantity, totalPrice: choose.totalPrice, colorCheck: index })}
						>
							{
								choose.colorCheck === index ? <i className="fa fa-check"></i> : ""
							}
						</div>
					))
				}
			</td>
			<td className="text-left" width="200px">
				<div className="input-group btn-block quantity">
					<input
						type="number"
						name="quantity"
						defaultValue={choose.quantity}
						onChange={({ target }) => setChoose({ quantity: Number(target.value), totalPrice: data.price * target.value, colorCheck: choose.colorCheck })}
						size="1"
						className="form-control"
						style={{ width: "100px" }}
					/>
					<span className="input-group-btn">
						<button
							type="submit"
							data-toggle="tooltip"
							title="Update"
							className="btn btn-primary"
						>
							<i className="fa fa-clone"></i>
						</button>
					</span>
				</div>
			</td>
			<td className="text-right">${data.price}</td>
			<td className="text-right">${(choose.totalPrice).toFixed(2)}</td>
			<td className="text-center btn">
				<button
				type="submit"
				data-toggle="tooltip"
				title="Save"
				className="btn btn-primary mr-1"
				onClick={() => {	
				SaveDatabase(data, choose);
				}}
			>Save</button>
			</td>
		</tr>
	);
}

export default ShoppingList;
