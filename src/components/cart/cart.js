import { Link } from "react-router-dom";

function Cart({ data }) {
	return (
		<table
			className="table table-striped table-bordered">
			<tbody>
				<tr>
					<td className="text-center" style={{ width: "70px" }}>
						<Link to="/">
							<img
								src={`${data.image}`}
								style={{ width: "70px" }}
								alt="Canon EOS 5D"
								title="Canon EOS 5D"
								className="preview"
							/>{" "}
						</Link>
					</td>
					<td className="text-left">
						<Link className="cart_product_name" to="/">
							{data.title}
						</Link>
					</td>
					<td className="text-center"> x1 </td>
					<td className="text-center"> {data.price} </td>
					<td className="text-right">
						<Link to="/" className="fa fa-edit">
							{" "}
						</Link>
					</td>
					<td className="text-right">
						<Link to="#" className="fa fa-times fa-delete"> </Link>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Cart;
