import { useEffect, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires Link loader
import { Banner1, Banner2, Banner3, Slider1, Slider2, Slider3 } from "../../export/exportImg/exportImg";
import { Link } from "react-router-dom";

function Advertising() {
	const [widthWindows, setWidthWindows] = useState(window.innerWidth)
	const [advertisingsCount, setAdvertisingsCount] = useState(0)
	const [next, setNext] = useState(widthWindows)
	useEffect(() => {
		setInterval(() => {
			setWidthWindows(window.innerWidth)
		}, 1000)
	}, [widthWindows]);

	return (
		<Wrapper>

			<section className="so-slideshow ">
				<div id="so-slideshow">
					<div className="module slideshow no-margin">
						<div className="yt-content-slider yt-content-slider--arrow1" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column0="1" data-items_column1="1" data-items_column2="1" data-items_column3="1" data-items_column4="1" data-arrows="yes" data-pagination="no" data-lazyload="yes" data-loop="no" data-hoverpause="yes">
							<div className="owl2-controls">
								<div className="owl2-nav">
									<div className="owl2-prev" onClick={() => setNext(0)} ></div>
									<div className="owl2-next" onClick={() => advertisingsCount === 3 ? setNext(0) : setNext(widthWindows + next) && setAdvertisingsCount(advertisingsCount + 1)} ></div>
								</div>
								<div className="owl-dots">
								</div>
							</div>
							<div className="owl2-stage-outer">
								<div className="owl2-stage" style={{
									transform: `translate3d(-${next}px, 0px, 0px)`, transition: "all 0.6s ease 0s", minwidth: "80%", display: "flex"
								}}>
									<div className="owl2-item" style={{ minWidth: "100%", marginRight: "0px" }}>
										<div className="yt-content-slide">
											<Link to="#">
												<img src={Slider1} alt="slider1" className="img-responsive" />
											</Link>
										</div>
									</div>
									<div className="owl2-item" style={{ minWidth: "100%", marginRight: "0px" }}>
										<div className="yt-content-slide">
											<Link to="#">
												<img src={Slider2} alt="slider2" className="img-responsive" />
											</Link>
										</div>
									</div>
									<div className="owl2-item" style={{ minWidth: "100%", marginRight: "0px" }}>
										<div className="yt-content-slide">
											<Link to="#">
												<img src={Slider3} alt="slider3" className="img-responsive" />
											</Link>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>


				</div>
				<div className="module static-image">
					<ul className="eg-list-float blank">
						<li>
							<div className="banners">
								<div>
									<Link to="#"><img src={Banner1} alt="banner1" style={{ minWidth: "100%" }} /></Link>
								</div>
							</div>
						</li>
						<li className="hidden-xs">
							<div className="banners">
								<div>
									<Link to="#"><img src={Banner2} alt="banner1" style={{ minWidth: "100%" }} /></Link>
								</div>
							</div>
						</li>
						<li className="hidden-xs">
							<div className="banners">
								<div>
									<Link to="#"><img src={Banner3} alt="banner1" style={{ minWidth: "100%" }} /></Link>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<div id="content-top" className="clearfix" >

				<div className="modcontent clearfix">
					<div className="services-v1">
						<div className="policy policy1 col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="policy-inner"><span className="ico-policy"></span>
								<h2>30 days return</h2><Link to="#">money back</Link>
							</div>
						</div>
						<div className="policy policy2 col-lg-3 col-md-3 col-sm-6 col-xs-12">
							<div className="policy-inner"><span className="ico-policy"></span>
								<h2>free shipping</h2><Link to="#">on all orders over $99</Link>
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
    margin-bottom: 50px;
    position: relative;
	.thumbs  {
		display: none;
		align-items: center;
		justify-content: center;

	.thumb .selected {
		margin: 0;
		display: none;
    }
  }
`
