import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { allProducts, selectedProduct } from "../../utils/api";
import API from "../../utils/axios";

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
import Product from "./product";
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Loader from "../loader/loader";

function ProductDetail() {
	const { id } = useParams();
	const [productDetail, setproductDetail] = useState({});
	const [tabsslider, setTabsslider] = useState(2)
	const [products, setproduct] = useState([]);
	const [count, setCount] = useState(1);
	const [loaderP, setLoaderP] = useState(false)
	const [loaderPD, setLoaderPD] = useState(false)

	const [bag, setBag] = useState(
		JSON.parse(localStorage.getItem("onlineShopCart")) || []
	);

	const AddtoBag = (product) => {
		setBag([...bag, product]);
		localStorage.setItem("onlineShopCart", JSON.stringify([...bag, product]));
	};

	const bagElements = JSON.parse(localStorage.getItem("onlineShopCart"))?.map(
		({ id }) => id
	);

	const [like, setLike] = useState(
		JSON.parse(localStorage.getItem("onlineShopLike")) || []
	);

	const AddtoLike = (product) => {
		setLike([...like, product]);
		localStorage.setItem("onlineShopLike", JSON.stringify([...like, product]));
	};

	const LikeElements = JSON.parse(localStorage.getItem("onlineShopLike"))?.map(
		({ id }) => id
	);

	const [comparison, setComparison] = useState(
		JSON.parse(localStorage.getItem("onlineShopComparison")) || []
	);

	const AddtoComparison = (product) => {
		setComparison([...comparison, product]);
		localStorage.setItem(
			"onlineShopComparison",
			JSON.stringify([...comparison, product])
		);
	};

	const ComparisonElements = JSON.parse(
		localStorage.getItem("onlineShopComparison")
	)?.map(({ id }) => id);


	useEffect(() => {
		API.get(`${selectedProduct}/${id}`)
			.then((res) => {
				setproductDetail(res.data)
				setLoaderPD(true)
			})
			.catch((err) => console.log(err))
		API.get(allProducts)
			.then(res => {
				setproduct(res.data)
				setLoaderP(true)
			})
			.catch((err) => console.log(err))

	}, [id]);

	return (
		<div>
			<Navbar />
			<div className="container">
				<ul className="breadcrumb">
					<li><Link to="/"><i className="fa fa-home"></i></Link></li>
					<li><Link to="#">Product Detail</Link></li>
				</ul>
				<div className="row">
					<div id="content" className="col-md-12 col-sm-12">
						{
							loaderPD == true ?
								<div>
									<div className="row">
										<div id="content" className="col-md-12 col-sm-12">
											<div className="product-view row">
												<div className="left-content-product col-lg-12 col-xs-12">
													<div className="row">
														<div className="content-product-left  col-sm-6 col-xs-12 ">
															<div className="large-image  ">
																<img
																	className="product-image-zoom"
																	src={`${productDetail.image}`}
																	alt="bnt-Beef"
																/>
															</div>
														</div>

														<div className="content-product-right col-sm-6 col-xs-12">
															<div className="title-product">
																<h1>{productDetail.title}</h1>
															</div>
															<div className="box-review form-group">
																<div className="ratings">
																	{productDetail.stars === "1" ? <One /> : ""}
																	{productDetail.stars === "1.5" ? <OneAndHalf /> : ""}
																	{productDetail.stars === "2" ? <Two /> : ""}
																	{productDetail.stars === "2.5" ? <TwoAndHalf /> : ""}
																	{productDetail.stars === "3" ? <Three /> : ""}
																	{productDetail.stars === "3.5" ? <ThreeAndHalf /> : ""}
																	{productDetail.stars === "4" ? <Four /> : ""}
																	{productDetail.stars === "4.5" ? <FourAndHalf /> : ""}
																	{productDetail.stars === "5" ? <Five /> : ""}
																</div>
																<Link className="reviews_button" to="#">
																	0 reviews
																</Link>
															</div>

															<div className="product-label form-group">
																<div
																	className="product_page_price price"
																	itemProp="offerDetails"
																	itemScope=""
																>
																	<span className="price-new" itemProp="price">
																		$	{productDetail.price}
																	</span>
																	{" "}
																	<span className="price-old">$ {(Number(productDetail.price) / 100 + Number(productDetail.price)).toFixed(2)}</span>
																</div>
																<div className="stock">
																	<span>Availability: </span>
																	<span className="status-stock">In Stock </span>
																</div>
															</div>

															<div className="product-box-desc">
																<div className="inner-box-desc">
																	<div className="reward">
																		<span>Discount: </span> {productDetail.discount} %
																	</div>
																	<div className="brand">
																		<span>Brand: </span>
																		<Link to="#">{productDetail.brand} </Link>
																	</div>
																	<div className="model">
																		<span>Product Model: </span> {productDetail.model}
																	</div>
																	<div className="reward">
																		<span>Category: </span> {productDetail.category}
																	</div>
																</div>
															</div>

															<div id="product">
																<h4>Available Options </h4>
																<div className="image_option_type form-group required">
																	<label className="control-label">Colors </label>
																	<ul
																		className="product-options clearfix"
																		id="input-option231"
																	>

																		{
																			productDetail?.color?.map((items) => (
																				<li className="radio" key={Math.random()}>
																					<div
																						style={{ background: `${items}` }}
																						className="img-thumbnail icon icon-color"
																					></div>
																					<i className="fa fa-check"> </i>
																				</li>
																			))
																		}
																	</ul>
																</div>

																<div className="form-group box-info-product">
																	<div className="option quantity">
																		<div className="input-group quantity-control" >
																			<label>Qty </label>
																			<div className="form-control">{count}</div>

																			<span
																				className="input-group-addon product_quantity_down"
																				onClick={() =>
																					count > 1 ? setCount(count - 1) : ""
																				}
																			>−</span>
																			<span
																				className="input-group-addon product_quantity_up"
																				onClick={() => setCount(count + 1)}
																			>+</span>
																		</div>
																	</div>
																	<div
																		className="cart"
																		onClick={() => AddtoBag(productDetail)}
																		style={{
																			display: bagElements?.includes(productDetail.id) ? "none" : ""
																				||
																				bagElements?.includes(productDetail._id) ? "none" : ""

																		}}
																	>
																		<input
																			type="button"
																			data-toggle="tooltip"
																			defaultValue="Add to Cart"
																			data-loading-text="Loading..."
																			id="button-cart"
																			className="btn btn-mega btn-lg"
																			data-original-title="Add to Cart"
																		/>
																	</div>

																	<div className="add-to-links wish_comp">
																		<ul className="blank list-inline">
																			<li
																				className="wishlist"
																				onClick={() => AddtoLike(productDetail)}
																				style={{
																					display: LikeElements?.includes(productDetail.id) ? "none" : ""
																						||
																						LikeElements?.includes(productDetail._id) ? "none" : ""
																				}}
																			>
																				<Link
																					className="icon"
																					data-toggle="tooltip"
																					data-original-title="Add to Wish List"
																					to="#"
																				>
																					<i className="fa fa-heart"> </i>
																				</Link>
																			</li>
																			<li
																				className="compare"
																				onClick={() => AddtoComparison(productDetail)}
																				style={{
																					display: ComparisonElements?.includes(productDetail.id) ? "none" : ""
																						||
																						ComparisonElements?.includes(productDetail._id) ? "none" : ""
																				}}
																			>
																				<Link
																					to="#"
																					className="icon"
																					data-toggle="tooltip"
																					data-original-title="Compare this Product"
																				>
																					<i className="fa fa-exchange"> </i>
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div >
									</div >
									<div className="producttab ">
										<div className="tabsslider col-xs-12">
											<ul className="nav nav-tabs">
												<li className={`${tabsslider == 1 ? "active" : "item_nonactive"}`} onClick={() => setTabsslider(1)}><Link data-toggle="tab" to="#">Description</Link></li>
												<li className={`${tabsslider == 2 ? "active" : "item_nonactive"}`} onClick={() => setTabsslider(2)}><Link data-toggle="tab" to="#">Reviews (1)</Link></li>
											</ul>
											<div className="tab-content col-xs-12">
												{
													tabsslider == 1 ?
														<div className="tab-pane fade active in">
															<p>
																{productDetail.description}
															</p>
														</div>
														:
														<div className="tab-pane fade active in">
															<form>
																<div id="review">
																	<div className="text-right"></div>
																</div>
																<h2 id="review-title">Write Link review</h2>
																<div className="contacts-form">
																	<div className="form-group"> <span className="icon icon-user"></span>
																		<input type="text" name="name" className="form-control" placeholder="Your Name" />
																	</div>
																	<div className="form-group"> <span className="icon icon-bubbles-2"></span>
																		<textarea defaultValue="Your Review" className="form-control" name="text" placeholder="Your Review" rows="10" />
																	</div>
																	<span style={{ fontSize: "11px" }}><span className="text-danger">Note:</span> HTML
																		is not translated!</span>

																	<div className="form-group">
																		<b>Rating</b> <span>Bad</span>&nbsp;
																		<input type="radio" name="rating" defaultValue="1" /> &nbsp;
																		<input type="radio" name="rating" defaultValue="2" /> &nbsp;
																		<input type="radio" name="rating" defaultValue="3" /> &nbsp;
																		<input type="radio" name="rating" defaultValue="4" /> &nbsp;
																		<input type="radio" name="rating" defaultValue="5" /> &nbsp;<span>Good</span>

																	</div>
																	<div className="buttons clearfix">
																		<Link id="button-review" to="#" className="btn buttonGray">Continue</Link>
																	</div>
																</div>
															</form>
													    </div>
												}
											</div>
										</div>
									</div>
								</div>
							:
							<Loader />
						}
						<div className="module tab-slider titleLine">
							<h3 className="modtitle">RELATED PRODUCTS</h3>
							<div id="so_listing_tabs_2" className="so-listing-tabs first-load module" >
								<div className="ltabs-wrap">
									<div className="ltabs-items-container">
										<div className="ltabs-items ltabs-items-selected items-category-20 grid" data-total="10" >
											<div className="ltabs-items-inner ltabs-slider">
												{
													loaderP == true ?
														products?.filter(({ category }) => category?.toUpperCase().search(productDetail.category?.toUpperCase()) >= 0).map((product) => (
															<Product
																product={product}
																AddtoBag={AddtoBag}
																AddtoLike={AddtoLike}
																AddtoComparison={AddtoComparison}
																key={Math.random()}
															/>
														))
														:
														<Loader />
												}
											</div>
										</div>
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

export default ProductDetail;
