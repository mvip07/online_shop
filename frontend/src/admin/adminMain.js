import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
function AdminMain() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [advertisings, setAdvertisings] = useState([]);
  const [blogs, setBlogs] = useState([])
  const [aboutTeamMembear, setAboutTeamMembear] = useState([])
  const [aboutCompany, setAboutCompany] = useState([])

  const [components, setComponents] = useState("")

  useEffect(() => {
    API.get(`/products`).then((res) => setProducts(res.data));

    API.get(`/advertisings`).then((res) => setAdvertisings(res.data));

    API.get(`/blogs`).then(res => setBlogs(res.data))

    API.get(`/aboutTeamMembars`).then(res => setAboutTeamMembear(res.data))

    API.get(`/aboutCompanys`).then(res => setAboutCompany(res.data))

  }, []);

  return (

    <Wrapper>
      <div className="navbar-admin">
        <button onClick={() => setComponents("products")}>Products</button>
        <button onClick={() => setComponents("blogs")}> Blogs</button>
        <button onClick={() => setComponents("advertisings")}>Advertisings</button>
        <button onClick={() => setComponents("aboutCompanys")}>About Companys</button>
        <button onClick={() => setComponents("aboutTeamMembears")}>About Team Membears</button>
        <button onClick={() => setComponents("login")}>Login</button>
        <button onClick={() => setComponents("register")}>Register</button>
        <button onClick={() => setComponents("logOut")}>Log Out</button>
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
    </Wrapper>
  );
}

export default AdminMain;
const Wrapper = styled.div`
  overflow-x: hidden;
  .navbar-admin {
    width: 100%;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #232f3e;

  }

  button {
    padding: 8px 16px;
  }

  @media (max-width: 1030px) {
    .navbar-admin {
      width: 1030px;
      overflow-x: scroll;
    }
  }

  .container-admin {
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

  
`;



