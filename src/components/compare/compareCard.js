import {
	One,
	OneAndHalf,
	Two,
	TwoAndHalf,
	Three,
	ThreeAndHalf,
	Four,
	FourAndHalf,
	Five,
} from "../stars/stars";

function CompareCard({ data, AddtoBag }) {
	const bagElements = JSON.parse(localStorage.getItem("onlineShopCart"))?.map(
		({ _id }) => _id
	);

	return (
		<tbody >
			<tr>
				<td>Product Name</td>
				<td>
					<p>{data.title}</p>
				</td>
			</tr>
			<tr>
				<td>Image</td>
				<td className="text-center">
					<img
						className="img-thumbnail"
						title="Laptop Silver black"
						alt="Laptop Silver black"
						width="200px"
						src={`${data.image}`}
					/>
				</td>
			</tr>
			<tr>
				<td>Price</td>
				<td>
					<div className="price">
						<span className="price-new">$ {data.price}</span>
					</div>
				</td>
			</tr>
			<tr>
				<td>Model</td>
				<td>{data.model}</td>
			</tr>
			<tr>
				<td>Brand</td>
				<td>{data.brand}</td>
			</tr>
			<tr>
				<td>Discount</td>
				<td>% {data.discount}</td>
			</tr>
			<tr>
				<td>Rating</td>
				<td className="rating">
					{data.stars === "1" ? <One /> : ""}
					{data.stars === "1.5" ? <OneAndHalf /> : ""}
					{data.stars === "2" ? <Two /> : ""}
					{data.stars === "2.5" ? <TwoAndHalf /> : ""}
					{data.stars === "3" ? <Three /> : ""}
					{data.stars === "3.5" ? <ThreeAndHalf /> : ""}
					{data.stars === "4" ? <Four /> : ""}
					{data.stars === "4.5" ? <FourAndHalf /> : ""}
					{data.stars === "5" ? <Five /> : ""}
				</td>
			</tr>
			<tr>
				<td>Description</td>
				<td className="description">{data.description}</td>
			</tr>
			<tr>
				<td>Dimensions (L x W x H)</td>
				<td>{data.depth}mm x {data.width}mm x {data.hegth}mm</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<input
						type="button"
						className="btn btn-primary btn-block"
						value="Add to Cart"
						onClick={() => AddtoBag(data)}
						style={{
							display: bagElements?.includes(data._id) ? "none" : "",
						}}
					/>
				</td>
				<td></td>
			</tr>
		</tbody>

	);
}

export default CompareCard;
