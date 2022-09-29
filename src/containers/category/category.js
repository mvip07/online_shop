import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import CategoryProduct from "../../components/category/categoryProduct";
import {
	Electronic,
	Product10,
	Product11,
	Product2,
	Product8,
	Product9,
} from "../../export/exportImg/exportImg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Category() {
	const [search, setSearch] = useState({inputValue: "", price: 1});
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
						<Link to="#">Smartphone & Tablets</Link>
					</li>
				</ul>
				<div className="row">
					<aside className="col-sm-4 col-md-3" id="column-left">
						<div className="module latest-product titleLine">
							<h3 className="modtitle">Filter </h3>
							<div className="modcontent ">
								<form className="type_2">
									<div className="table_layout filter-shopby">
										<div className="table_row">
											<div className="table_cell" style={{ zIndex: "103" }}>
												<legend>Search</legend>
												<input
													className="form-control"
													type="text"
													size="50"
													placeholder="Search"
													onChange={({target}) => setSearch({inputValue: target.value, price: search.price})}

												/>
											</div>
											<div className="table_cell">
												<fieldset>
													<legend>Price</legend>
													<div className="range">
														Range :<span className="min_val">$ 1</span> -{" "}
														<span className="max_val">$ 10000</span>
														<input
															type="range"
															min="1"
															max="10000"
															className="min_value"
															onChange={({target}) => setSearch({inputValue: search.inputValue, price: target.value})}
														/>
													</div>
													<span className="ui-slider ui-slider-handle">$ 1 - $ {search.price}</span>
												</fieldset>
											</div>
										</div>
										<footer className="bottom_box">
											<div className="buttons_row">
												<div
													className="button_grey button_submit"
												>
													Search
												</div>
												<button
													className="button_grey filter_reset"
												>
													Reset
												</button>
											</div>
										</footer>
									</div>
								</form>
							</div>
						</div>
						<div className="module tags-product titleLine">
							<h3 className="modtitle">Tags</h3>
							<div className="modcontent ">
								<ul className="tags_cloud">
									<li>
										<Link to="#" className="button_grey">
											allergy
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											baby
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											beauty
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											ear care
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											for her
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											for him
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											first aid
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											gift sets
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											spa
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											hair care
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											herbs
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											medicine
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											natural
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											oral care
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											pain
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											pedicure
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											personal care
										</Link>
									</li>
									<li>
										<Link to="#" className="button_grey">
											probiotics
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</aside>
					<div id="content" className="col-md-9 col-sm-8">
						<div className="products-category">
							<div className="category-derc form-group">
								<div className="row">
									<div className="col-sm-12">
										<p>
											<img src={Electronic} alt='Apple Cinema 30"' />
											<br />
										</p>
										<p>
											Mauris accumsan nulla vel diam. Sed in lacus ut enim
											adipiscing aliquet. Nulla venenatis. In pede mi, aliquet
											sit amet, euismod in, auctor ut, ligula. Aliquam dapibus
											tincidunt metus. Praesent justo dolor, lobortis quis,
											lobortis dignissim, pulvinar ac, lorem. Vestibulum sed
											ante. Donec sagittis euismod purus. Sed ut perspiciatis
											sit voluptatem accusantim doloremque laudantim.
										</p>
									</div>
								</div>
							</div>
							<div className="refine-search form-group">
								<div className="row">
									<div className="form-group col-md-15 col-sm-4 col-xs-4 ">
										<Link to="#" className="thumbnail">
											<img src={Product8} alt="Car Alarms and Security" />
										</Link>
										<Link to="#">Car Alarms and Security</Link>
									</div>
									<div className="form-group col-md-15 col-sm-4 col-xs-4 ">
										<Link to="#" className="thumbnail">
											<img src={Product2} alt="Car Audio &amp; Speakers" />
										</Link>
										<Link to="#">Car Audio &amp; Speakers</Link>
									</div>
									<div className="form-group col-md-15 col-sm-4 col-xs-4 ">
										<Link to="#" className="thumbnail">
											<img src={Product9} alt="Gadgets &amp; Auto Parts" />
										</Link>
										<Link to="#">Gadgets &amp; Auto Parts</Link>
									</div>
									<div className="form-group col-md-15 col-sm-4 col-xs-4 ">
										<Link to="#" className="thumbnail">
											<img src={Product10} alt="More Car Accessories" />
										</Link>
										<Link to="#">More Car Accessories</Link>
									</div>
									<div className="form-group col-md-15 col-sm-4 col-xs-4">
										<Link to="#" className="thumbnail">
											<img src={Product11} alt="More Car Accessories" />
										</Link>
										<Link to="#">More Car Accessories</Link>
									</div>
								</div>
							</div>
							
							<div className="products-list row list">
								<CategoryProduct inputSearch={search}/>
							</div>
							{
							/* <div className="product-filter product-filter-bottom filters-panel">
								<div className="row">
									<div className="col-md-2 hidden-sm hidden-xs"> </div>
									<div className="short-by-show text-center col-md-7 col-sm-8 col-xs-12">
										<div className="form-group" style={{ margin: "7px 10px" }}>
											Showing 1 to 9 of 10 (2 Pages)
										</div>
									</div>
									<div className="box-pagination col-md-3 col-sm-4 text-right">
										<ul className="pagination">
											<li className="active">
												<span>1</span>
											</li>
											<li>
												<Link to="#">2</Link>
											</li>
											<li>
												<Link to="#">&gt;</Link>
											</li>
											<li>
												<Link to="#">&gt;|</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							*/}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Category;
