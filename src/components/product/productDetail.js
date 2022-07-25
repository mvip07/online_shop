import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectedProduct } from "../../utils/api";
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

function ProductDetail() {
	const navigate = useNavigate()
	const [productDetail, setproductDetail] = useState([]);
	const { id } = useParams();
	const [count, setCount] = useState(1);

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
		API.get(`${selectedProduct}/${id}`).then((res) => setproductDetail(res.data));
	}, [id]);

	return (
		<div id="wrapper" className="wrapper-full productDetailCenter">
			<div
				className="cart mr-1" onClick={() => navigate(-1)}>
				<input
					type="button"
					data-toggle="tooltip"
					defaultValue="Back"
					data-loading-text="Loading..."
					id="button-cart"
					className="btn btn-mega btn-lg"
				/>
			</div>

			<div className="main-container container">
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

										{/* <div id="thumb-slider" className="owl-theme owl-loaded owl-drag full_slider">
                            <Link
                              data-index="0"
                              className="img thumbnail "
                            >
                              <img src={`http://localhost:8000/${data.image}`} alt="bint-Beef" />
                            </Link>
                            <Link
                              data-index="1"
                              className="img thumbnail"
                              data-image={`http://localhost:8000/${data.image}`}
                            >
                              <img
                                src={`http://localhost:8000/${data.image}`}
                                title="Bint Beef"
                                alt="Bint Beef"
                              />
                            </Link>
                            <Link
                              data-index="2"
                              className="img thumbnail"
                              data-image={`http://localhost:8000/${data.image}`}
                              title="Bint Beef"
                            >
                              <img
                                src={`http://localhost:8000/${data.image}`}
                                title="Bint Beef"
                                alt="Bint Beef"
                              />
                            </Link>
                            <Link
                              data-index="3"
                              className="img thumbnail"
                              data-image={`http://localhost:8000/${data.image}`}
                              title="Bint Beef"
                            >
                              <img
                                src={`http://localhost:8000/${data.image}`}
                                title="Bint Beef"
                                alt="Bint Beef"
                              />
                            </Link>
                          </div> */}
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
													{productDetail.price}
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
												<div className="price-tax">
													<span>Model: </span> {productDetail.model}
												</div>
												<div className="reward">
													<span>Discount: </span> {productDetail.discount} %
												</div>
												<div className="brand">
													<span>Brand: </span>
													<Link to="#">{productDetail.brand} </Link>
												</div>
												<div className="model">
													<span>Product Code: </span> Product 15
												</div>
												<div className="reward">
													<span>Description: </span> {productDetail.description}
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
														)
														)
													}
												</ul>
											</div>

											<div className="form-group box-info-product">
												<div className="option quantity">
													<div className="input-group quantity-control">
														<label>Qty </label>
														<input
															className="form-control"
															type="text"
															name="quantity"
															defaultValue={count}
														/>
														<input type="hidden" />
														<span
															className="input-group-addon product_quantity_down"
															onClick={() =>
																count > 1 ? setCount(count - 1) : ""
															}
														>
															−
														</span>
														<span
															className="input-group-addon product_quantity_up"
															onClick={() => setCount(count + 1)}
														>
															+
														</span>
													</div>
												</div>
												<div
													className="cart"
													onClick={() => AddtoBag(productDetail)}
													style={{
														display: bagElements.includes(productDetail._id) ? "none" : ""

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
																display: LikeElements?.includes(productDetail._id)
																	? "none"
																	: "",
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
																display: ComparisonElements?.includes(
																	productDetail._id
																)
																	? "none"
																	: "",
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
			</div >
		</div>
	);
}

export default ProductDetail;
