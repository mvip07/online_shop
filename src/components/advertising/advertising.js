import { useEffect, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires Link loader
import { Link } from "react-router-dom";
import API from "../../utils/axios";
import { allAdvertisings } from "../../utils/api";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires Link loader
import Loader from "../loader/loader";

function Advertising() {
	const [advertisings, setAdvertisings] = useState([])
	const [advertisingsCount, setAdvertisingsCount] = useState(1)
	const [next, setNext] = useState(0)
	const [loader, setLoader] = useState(false)

	useEffect(() => {
		API.get(allAdvertisings)
			.then(res => {
				setAdvertisings(res.data)
				setLoader(true)
			})
			.catch(err => console.log(err.data))
	}, [allAdvertisings]);
	return (
		<Wrapper>
			<div id="so-slideshow">
				<div className="module slideshow no-margin">
					<div className="yt-content-slider yt-content-slider--arrow1" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1" data-items_column3="1" data-items_column4="1" data-arrows="yes" data-pagination="no" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
						<div className="owl2-controls">
							<div className="owl2-nav">
								<div className="owl2-prev" onClick={() => setNext(0)} ></div>
								<div className="owl2-next" onClick={() => {
									advertisingsCount == advertisings.length ? setNext(0) : setNext(100 + next);
									advertisingsCount >= advertisings.length ? setAdvertisingsCount(1) : setAdvertisingsCount(advertisingsCount + 1)
								}} ></div>
							</div>
							<div className="owl-dots">
							</div>
						</div>
						<div className="owl2-stage-outer">
							<div className="owl2-stage" style={{
								transform: `translate3d(-${next}%, 0px, 0px)`, transition: "all 0.6s ease 0s", minwidth: "80%", display: "flex"
							}}>
								{
									loader == true ?
										advertisings.map((data) => (
											<div className="owl2-item" style={{ minWidth: "100%", marginRight: "0px" }} key={Math.random()}>
												<div className="yt-content-slide">
													<Link to="#">
														{
															data.type == "video/mp4" ?
																<video
																	src={data.image}
																	alt="slider1"
																	className="img-responsive"
																	controls="true"
																/>
																:
																<img
																	src={data.image}
																	alt="slider1"
																	className="img-responsive"
																/>
														}
													</Link>
												</div>
											</div>
										))
										:
										<Loader />
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="content-top" className="clearfix">
				<div className="modcontent clearfix">
					<div className="services-v1">
						<div className="policy policy1 col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="policy-inner"><span className="ico-policy"></span>
								<h2>30 days return</h2><Link to="#">money back</Link>
							</div>
						</div>
						<div className="policy policy2 col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="policy-inner">
								<span className="ico-policy"></span>
								<h2>free shipping</h2>
								<Link to="#">on all orders over $99</Link>
							</div>
						</div>
						<div className="policy policy3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="policy-inner"><span className="ico-policy"></span><Link to="#"><h2>lowest price</h2>guarantee </Link>
							</div>
						</div>
						<div className="policy policy4 col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="policy-inner"><span className="ico-policy"></span><Link to="#"><h2>safe shopping</h2>guarantee </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper >
	);
}

export default Advertising;
const Wrapper = styled.div`
	.module {
		margin-top: 20px;
	}
`