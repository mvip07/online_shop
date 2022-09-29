import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "../../components/stars/stars";
import { allProducts } from "../../utils/api";
import API from "../../utils/axios";

function CategoryProduct({ inputSearch }) {
	const [categoryProduct, setCategoryProduct] = useState([]);
	const [defaultCategory, setDefaultCategory] = useState([])
	const [sortBy, setSortBy] = useState("Default");
	const navigate = useNavigate();

	const [bag, setBag] = useState(
		JSON.parse(localStorage.getItem("onlineShopCart")) || []
	);

	const AddtoBag = (data) => {
		setBag([...bag, data]);
		localStorage.setItem("onlineShopCart", JSON.stringify([...bag, data]));
	};

	const bagElements = JSON.parse(localStorage.getItem("onlineShopCart"))?.map(
		({ _id }) => _id
	);


	const [like, setLike] = useState(
		JSON.parse(localStorage.getItem("onlineShopLike")) || []
	);

	const AddtoLike = (data) => {
		setLike([...like, data]);
		localStorage.setItem("onlineShopLike", JSON.stringify([...like, data]));
	};

	const LikeElements = JSON.parse(localStorage.getItem("onlineShopLike"))?.map(
		({ _id }) => _id
	);


	const [comparison, setComparison] = useState(
		JSON.parse(localStorage.getItem("onlineShopComparison")) || []
	);

	const AddtoComparison = (data) => {
		setComparison([...comparison, data]);
		localStorage.setItem(
			"onlineShopComparison",
			JSON.stringify([...comparison, data])
		);
	};

	const ComparisonElements = JSON.parse(
		localStorage.getItem("onlineShopComparison")
	)?.map(({ _id }) => _id);


	useEffect(() => {
		API.get(`${allProducts}`)
			.then((res) => {
				setCategoryProduct(res.data);
				setDefaultCategory(res.data);
			})
			.catch(err => console.log(err))
	}, [allProducts]);

	useEffect(() => {
		switch (sortBy) {
			case "Default":
				return setCategoryProduct([...defaultCategory])
			case "Name (A - Z)":
				return setCategoryProduct(categoryProduct.sort((a, b) => a.title.localeCompare(b.title)))
			case "Name (Z - A)":
				return setCategoryProduct(categoryProduct.sort((a, b) => (a.title > b.title ? -1 : 1)))
			case "Price (Low - High)":
				return setCategoryProduct(categoryProduct.sort((a, b) => Number(a.price - b.price)))
			case "Price (High - Low)":
				return setCategoryProduct(categoryProduct.sort((a, b) => Number(b.price - a.price)))
		}
		// if (inputSearch?.inputValue.trim() != "" && inputSearch?.price != 1) setCategoryProduct(categoryProduct.filter(({ title, price }) => title.toUpperCase().search(inputSearch.inputValue?.toUpperCase()) >= 0 && Number(price <= inputSearch?.price)))
	}, [sortBy])

	useEffect(() => {
		
	}, [categoryProduct])
	return (
		<div>
			<div className="product-filter filters-panel">
				<div className="row">
					<div className="col-md-2 visible-md-2">
						<div className="view-mode">
							<div className="list-view ">
								{/* <button
													className="btn btn-default grid"
													data-view="grid"
													data-toggle="tooltip"
													data-original-title="Grid"
												>
													<i className="fa fa-th"> </i>
												</button> */}
								<button
									className="btn btn-default list active"
									data-view="list"
									data-toggle="tooltip"
									data-original-title="List"
								>
									<i className="fa fa-th-list"> </i>
								</button>
							</div>
						</div>
					</div>
					<div className="short-by-show form-inline text-right col-md-7 col-sm-8 col-xs-12">
						<div className="form-group short-by">
							<label className="control-label" htmlFor="input-sort">
								Sort By:
							</label>
							<select id="input-sort" className="form-control" onChange={({ target }) => setSortBy(target.value)}>
								<option defaultValue="default">Default</option>
								<option defaultValue="nameAZ">Name (A - Z)</option>
								<option defaultValue="nameZA">Name (Z - A)</option>
								<option defaultValue="priceLH">Price (Low - High)</option>
								<option defaultValue="priceHV">Price (High - Low)</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			{
				categoryProduct.map((data) => (
					<div className="product-layout col-md-4 col-sm-6 col-xs-12 col-lg-12" key={Math.random()}>
						<div className="product-item-container">
							<div className="left-block col-md-4">
								<div className="product-image-container second_img ">
									<img
										src={`${data.image}`}
										alt='Apple Cinema 30"'
										className="img-responsive category-img"
									/>
								</div>

								<div
									className="quickview iframe"
									data-fancybox-type="iframe"
									onClick={() => navigate(`/productDetail/${data._id}`)}
								>
									Quickview
								</div>
							</div>

							<div className="right-block col-md-8">
								<div className="caption">
									<h4>
										<Link to={`/productDetail/${data._id}`}>{data.title}</Link>
									</h4>
									<div className="ratings">
										<div className="rating-box">
											{data.stars === "1" ? (
												<One />
											) : "" || data.stars === "1.5" ? (
												<OneAndHalf />
											) : "" || data.stars === "2" ? (
												<Two />
											) : "" || data.stars === "2.5" ? (
												<TwoAndHalf />
											) : "" || data.stars === "3" ? (
												<Three />
											) : "" || data.stars === "3.5" ? (
												<ThreeAndHalf />
											) : "" || data.stars === "4" ? (
												<Four />
											) : "" || data.stars === "4.5" ? (
												<FourAndHalf />
											) : "" || data.stars === "5" ? (
												<Five />
											) : (
												""
											)}
										</div>
									</div>

									<div className="price">
										<span className="price-new mr-1">$ {data.price}</span>
										{
											data.discount == "No" ? "" : <span className="label label-percent"> % {data.discount}</span>

										}
									</div>
									<div className="description item-desc">
										<p>{data.description}</p>
									</div>
								</div>

								<div className="button-group">
									<button
										className="addToCart"
										type="button"
										data-toggle="tooltip"
										title="Add to Cart"
										onClick={() => AddtoBag(data)}
										style={{
											display: bagElements?.includes(data._id) ? "none" : "",
										}}
									>
										<i className="fa fa-shopping-cart"></i>
										<span className="hidden-xs">Add to Cart</span>
									</button>
									<button
										className="wishlist"
										type="button"
										data-toggle="tooltip"
										title="Add to Wish List"
										onClick={() => AddtoLike(data)}
										style={{
											display: LikeElements?.includes(data._id) ? "none" : "",
										}}
									>
										<i className="fa fa-heart"></i>
									</button>
									<button
										className="compare"
										type="button"
										data-toggle="tooltip"
										title="Compare this Product"
										onClick={() => AddtoComparison(data)}
										style={{
											display: ComparisonElements?.includes(data._id)
												? "none"
												: "",
										}}
									>
										<i className="fa fa-exchange"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				)
				)
			}
		</div >
	);
}

export default CategoryProduct;