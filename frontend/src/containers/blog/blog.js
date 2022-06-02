import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutSlide from "../../components/aboutSlide/aboutSlide";
import BlogCard from "../../components/blogCard/blogCard";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import API from "../utils/axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get(`/blogs`).then(res => setBlogs(res.data))
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
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <div className="row">
          <aside className="col-sm-4 col-md-3" id="column-left">
            <div className="module blog-category titleLine">
              <h3 className="modtitle">Blog Category</h3>
              <div className="modcontent">
                <ul className="list-group ">
                  <li className="list-group-item">
                    {" "}
                    <Link to="/blog-page" className="group-item">
                      Our Blog
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/blog-page" className="group-item">
                      Demo Category 2
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/blog-page" className="group-item">
                      Demo Category 3
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/blog-page" className="group-item">
                      Demo Category 4
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/blog-page" className="group-item">
                      Demo Category 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

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
                blogs.map((data) => {
                  return (
                    <BlogCard key={Math.random()} data={data} />
                  )
                })
              }
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
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
