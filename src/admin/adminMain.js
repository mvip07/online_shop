import { useEffect, useState } from "react";
import styled from "styled-components";

import API from "../containers/utils/axios";
import AdminProduct from "./products/product";
import AdvertisingCard from "./advertising/advertising";
import BlogCard from "./blog/blog"
import AboutTeamMembear from "./aboutTeamMembear/aboutTeamMembear";
import AboutCompany from "./aboutCompany/aboutCompany";
import AdminLogin from "./adminLogin";
import AdminSignup from "./adminSignUp";
import AdminLogOut from "./adminLogOut";
import { Link } from "react-router-dom";
function AdminMain() {
  const [products, setProducts] = useState([]);
  const [advertisings, setAdvertisings] = useState([]);
  const [blogs, setBlogs] = useState([])
  const [aboutTeamMembear, setAboutTeamMembear] = useState([])
  const [aboutCompany, setAboutCompany] = useState([])
  const [components, setComponents] = useState("")
  const [dropdown, setDropdown] = useState("none")

  useEffect(() => {
    API.get(`/products`).then((res) => setProducts(res.data));

    API.get(`/advertisings`).then((res) => setAdvertisings(res.data));

    API.get(`/blogs`).then(res => setBlogs(res.data))

    API.get(`/aboutTeamMembars`).then(res => setAboutTeamMembear(res.data))

    API.get(`/aboutCompanys`).then(res => setAboutCompany(res.data))

  }, []);

  console.log(components)

  return (

    <Wrapper>
      <div className="navbar-admin">
        <div className="form-group currencies-block">
          <form post="/" method="post" id="currency">
            <Link to="#" className="btn dropdown-toggle" data-toggle="dropdown">
              <span className="mr-1">Page</span>


              {
                dropdown === "none" ?
                  <span className="caret mr-1" onClick={() => setDropdown("block")}></span>
                  :
                  <span className="caret mr-1 bottom" onClick={() => setDropdown("none")}></span>
              }

            </Link>
            <ul className="dropdown-menu" style={{ display: `${dropdown}` }} >
              <li onClick={() => setComponents("products")}> <Link to="#">Products</Link></li>
              <li> <Link to="/createProduct">Create Product</Link></li>
              <li onClick={() => setComponents("blogs")}> <Link to="#">Blogs</Link></li>
              <li> <Link to="/createBlog">Create Blog</Link></li>
              <li onClick={() => setComponents("advertisings")}> <Link to="#">Advertisings</Link></li>
              <li> <Link to="/createAdvertising">Create Advertising</Link></li>
              <li onClick={() => setComponents("aboutCompanys")}> <Link to="#">About Company</Link></li>
              <li> <Link to="/createAboutCompany">Create About Company</Link></li>
              <li onClick={() => setComponents("aboutTeamMembears")}> <Link to="#">About Team Membear</Link></li>
              <li> <Link to="/createAboutTeamMember">Create About Team Membear</Link></li>
              <li> <Link to="/adminSignUp">Register</Link></li>
              <li onClick={() => setComponents("logOut")}> <Link to="#">Log Out</Link></li>
            </ul>
          </form>
        </div>
      </div>

      {
        components === "products" ?
          <div className="container-admin">
            {products.map((data) => {
              return <AdminProduct key={Math.random()} data={data} />;
            })}
          </div>
          : ""
      }

      {
        components === "blogs" ?
          <div className="container-admin">
            {blogs.map((data) => {
              return <BlogCard key={Math.random()} data={data} />;
            })}
          </div>
          : ""
      }

      {
        components === "advertisings" ?
          <div className="container-admin">
            {advertisings.map((data) => {
              return <AdvertisingCard key={Math.random()} data={data} />;
            })}
          </div>
          : ""
      }

      {
        components === "aboutCompanys" ?
          <div className="container-admin">
            {aboutCompany.map((data) => {
              return <AboutCompany key={Math.random()} data={data} />;
            })}
          </div>
          : ""
      }

      {
        components === "aboutTeamMembears" ?
          <div className="container-admin">
            {aboutTeamMembear.map((data) => {
              return <AboutTeamMembear key={Math.random()} data={data} />;
            })}
          </div>
          : ""
      }

      {
        components === "login" ?
          <AdminLogin />
          : ""
      }

      {
        components === "register" ?
          <AdminSignup />
          : ""
      }

      {
        components === "logOut" ?
          <AdminLogOut />
          : ""
      }
    </Wrapper >
  );
}

export default AdminMain;
const Wrapper = styled.div`

  .navbar-admin {
    width: 100%;
    height: 35px;
    background-color: #232f3e;

    .form-group.currencies-block {
      width: 225px;
      height: 100%;
    }

    .caret {
      margin-left: 50px;
    }

    .btn.dropdown-toggle {
      color: #fff;
    }
  }

  .container-admin {
    position: fixed;
    top: 35px;
    width: 100%;
    height: 100%;
    padding: 20px 30px;
    background-color: red;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  span {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    font-size: 18px;
  } 
`



