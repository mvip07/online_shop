import { useEffect, useState } from "react";
import AboutTeamMembearCard from "../../components/aboutSlide/aboutSlide";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires Link loader
import { Carousel } from "react-responsive-carousel";
import API from "../../utils/axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { allAboutCompanys, allAboutTeamMembears } from "../../utils/api";
import Loader from "../../components/loader/loader";
function About() {
	const [aboutTeamMembearData, setAboutTeamMembearData] = useState([]);
	const [aboutCompany, setAboutCompany] = useState([]);
	const [loaderAC, setLoaderAC] = useState(false)
	const [loaderATM, setLoaderATM] = useState(false)

	useEffect(() => {
		API.get(allAboutTeamMembears)
			.then((res) => {
				setAboutTeamMembearData(res.data)
				setLoaderATM(true)
			})
			.catch((err) => console.log(err));

		API.get(allAboutCompanys)
			.then((res) => {
				setAboutCompany(res.data)
				setLoaderAC(true)
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div style={{ margin: "0px" }}>
			<Navbar />
			<div className="main-container container">

				<ul className="breadcrumb">
					<li>
						<Link to="/">
							<i className="fa fa-home"> </i>
						</Link>
					</li>
					<li>
						<Link to="#">About Us</Link>
					</li>
				</ul>

				<div className="row">
					<div id="content" className="col-xxl-12">
						<div className="about-us about-demo-2">
							<div className="row">
								<div className="col-lg-12 col-md-12 about-us-center">
									<Carousel >
										{
											loaderAC == true ?
												aboutCompany.map((data) => {
													return (
														<div className="yt-content-slide yt-clearfix yt-content-wrap" key={Math.random()}>
															<img src={`${data.image}`} alt="About Us" />
														</div>
													)
												})
												:
												<Loader />
										}
									</Carousel>

									<div className="content-description">
										<h2 className="about-title">About Us</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
											natoque penatibus et magnis dis parturient montes,
											nascetur ridiculus mus. Donec quam felis, ultricies nec,
											pellentesque eu, pretium quis, sem. Nulla consequat massa
											quis enim. Donec pede justo, fringilla vel, aliquet nec,
											vulputate eget, arcu.Lorem ipsum dolor sit amet,
											consectetuer adipiscing elit. Aenean commodo ligula eget
											dolor. Aenean massa. Cum sociis natoque penatibus et
											magnis dis parturient montes, nascetur ridiculus mus.
											Donec quam felis, ultricies nec, pellentesque eu, pretium
											quis, sem. Nulla consequat massa quis enim.{" "}
										</p>
										<p>
											Donec pede justo, fringilla vel, aliquet nec, vulputate
											eget, arcu.Lorem ipsum dolor sit amet, consectetuer
											adipiscing elit. Aenean commodo ligula eget dolor. Aenean
											massa. Cum sociis natoque penatibus et magnis dis
											parturient montes, nascetur ridiculus mus. Donec quam
											felis, ultricies nec, pellentesque eu, pretium quis, sem.
											Nulla consequat massa quis enim. Donec pede justo,
											fringilla vel, aliquet nec, vulputate eget, arcu.
										</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12 col-md-12 our-team">
									<div className="our-team-content">
										<div className="our-team-slider">

											<Wrapper>
												{
													loaderATM == true ?
														aboutTeamMembearData.map((data) => {
															return (
																<AboutTeamMembearCard data={data} key={Math.random()} />
															)
														})
														:
														<Loader />
												}
											</Wrapper>
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

export default About;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;
