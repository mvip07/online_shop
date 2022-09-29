import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/blogCard/blogCard";
import Footer from "../../components/footer/footer";
import Loader from "../../components/loader/loader";
import Navbar from "../../components/navbar/navbar";
import { allBlogs } from "../../utils/api";
import API from "../../utils/axios";

function Blog() {
	const [blogs, setBlogs] = useState([]);
	const [loader, setLoader] = useState(false)

	useEffect(() => {
		API.get(`${allBlogs}`)
			.then(res => {
				setBlogs(res.data)
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
							<i className="fa fa-home"> </i>
						</Link>
					</li>
					<li>
						<Link to="#">Blog</Link>
					</li>
				</ul>

				<div className="row">
					<div id="content" className="col-md-9 col-sm-8">
						<div className="blog-header">
							<h3>Our Blog</h3>
							<p>
								Ac tincidunt Suspendisse malesuada velit in Nullam elit magnis
								netus Vestibulum.
							</p>
						</div>
						<div className="blog-listitem">

							{

								loader == true ?
									blogs.map((data) => {
										return (
											<BlogCard key={Math.random()} data={data} />
										)
									})
								:
								<Loader />
							}
							{/* <ul className="pagination">
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
							</ul> */}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Blog;
