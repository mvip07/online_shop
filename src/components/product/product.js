import { useNavigate } from "react-router-dom";
import {
	Five,
	Four,
	FourAndHalf,
	One,
	OneAndHalf,
	Three,
	ThreeAndHalf,
	Two,
	TwoAndHalf,
} from "../stars/stars";

function Product({ product, AddtoBag, AddtoLike, AddtoComparison }) {
	const navigate = useNavigate();
	
	  const bagElements = JSON.parse(localStorage.getItem("onlineShopCart"))?.map(
		({ _id }) => _id
	  );
	
	  const LikeElements = JSON.parse(localStorage.getItem("onlineShopLike"))?.map(
		({ _id }) => _id
	  );
	
	  const ComparisonElements = JSON.parse(
		localStorage.getItem("onlineShopComparison")
	  )?.map(({ _id }) => _id);
	

	return (
		<div className="ltabs-item product-layout">
			<div className="product-item-container">
				<div className="left-block">
					<div className="product-image-container second_img product-img">
						<img
							src={`${product.image}`}
							alt='Apple Cinema 30"'
							className="img-responsive"
						/>
					</div>
					{
						product.discount === "No" || product.discount === "" ?
							""
							:
							<span className="label label-sale">{product.discount} %</span>
					}
					<div
						className="quickview iframe"
						data-fancybox-type="iframe"
						onClick={() => navigate(`/productDetail/${product._id}`)}
					>
						Quickview
					</div>
				</div>
				<div className="right-block">
					<div className="caption">
						<h4>
							<p href="/product">{product.title}</p>
						</h4>
						<div className="ratings">
							{product.stars === "1" ? <One /> : ""}
							{product.stars === "1.5" ? <OneAndHalf /> : ""}
							{product.stars === "2" ? <Two /> : ""}
							{product.stars === "2.5" ? <TwoAndHalf /> : ""}
							{product.stars === "3" ? <Three /> : ""}
							{product.stars === "3.5" ? <ThreeAndHalf /> : ""}
							{product.stars === "4" ? <Four /> : ""}
							{product.stars === "4.5" ? <FourAndHalf /> : ""}
							{product.stars === "5" ? <Five /> : ""}
						</div>
						<div className="price">
							<span className="price-new">$ {product.price}</span>
						</div>
					</div>
					<div className="button-group">
						<button
							className="addToCart"
							type="button"
							data-toggle="tooltip"
							title="Add to Cart"
							onClick={() => AddtoBag(product)}
							style={{
								display: bagElements?.includes(product._id) ? "none" : "",
							}}
						>
							<i className="fa fa-shopping-cart"> </i>
							<span>Add to Cart</span>
						</button>
						<button
							className="wishlist"
							type="button"
							data-toggle="tooltip"
							title="Add to Wish List"
							onClick={() => AddtoLike(product)}
							style={{
								display: LikeElements?.includes(product._id) ? "none" : "",
							}}
						>
							<i className="fa fa-heart"> </i>
						</button>
						<button
							className="compare"
							type="button"
							data-toggle="tooltip"
							title="Compare this Product"
							onClick={() => AddtoComparison(product)}
							style={{
								display: ComparisonElements?.includes(product._id) ? "none" : "",
							}}
						>
							<i className="fa fa-exchange"> </i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
