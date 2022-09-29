import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Faq from "../../components/faq/faq";
import Footer from "../../components/footer/footer";
import Loader from "../../components/loader/loader";
import Navbar from "../../components/navbar/navbar";
import { allFaqs } from "../../utils/api";
import API from "../../utils/axios";

function Faqs() {
	const [faq, setFaq] = useState([])
	const [loader, setLoader] = useState(false)
	useEffect(() => {
		API.get(allFaqs)
			.then(res => {
				setFaq(res.data)
				setLoader(true)
			})
			.catch(err => console.log(err))
	}, [])
	return (
		<div id="wrapper" className="wrapper-full ">
			<Navbar />
			<div className="main-container container">
				<ul className="breadcrumb">
					<li>
						<Link to="/">
							<i className="fa fa-home"></i>
						</Link>
					</li>
					<li>
						<Link to="#">Faq</Link>
					</li>
				</ul>

				<div className="row">
					<div id="content" className="col-sm-12">
						<h3>Got Questions? We’ve Got Answers!</h3>
						<p>
							Asunt in anim uis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in anim id est laborum.
							Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in anim id est laborum.
						</p>
						<p>
							<br />
						</p>
						<div className="row">
							<div className="col-sm-12">
								<ul className="yt-accordion">
									{
										loader == true ? 
											faq.map((data) => (
												<Faq
													key={Math.random()}
													data={data}
												/>
											))
										: 
										<Loader />
									}

								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Faqs;
