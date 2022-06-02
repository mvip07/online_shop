import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import API from "../containers/utils/axios";
import AdminProduct from "./products/product";
import AdvertisingCard from "./advertising/advertising";
import BlogCard from "./blog/blog"
import AboutTeamMembear from "./aboutTeamMembear/aboutTeamMembear";
import AboutCompany from "./aboutCompany/aboutCompany";
function AdminMain() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [advertisings, setAdvertisings] = useState([]);
  const [blogs, setBlogs] = useState([])
  const [aboutTeamMembearData, setAboutTeamMembearData] = useState([])
  const [aboutCompany, setAboutCompany] = useState([])

  useEffect(() => {
    API.get(`/products`).then((res) => setProducts(res.data));

    API.get(`/advertisings`).then((res) => setAdvertisings(res.data));

    API.get(`/blogs`).then(res => setBlogs(res.data))

    API.get(`/aboutTeamMembars`).then(res => setAboutTeamMembearData(res.data))

    API.get(`/aboutCompanys`).then(res => setAboutCompany(res.data))

  }, []);

  return (
    <Wrapper>
      <Product>
        <button
          className="addToCart m-1 p-1"
          type="button"
          data-toggle="tooltip"
          title="Create Product"
          onClick={() => navigate("/createProduct")}
        >
          <i className="fa-solid fa-circle-plus  mr-1"></i> Create Product
        </button>
        <span className="p-1">Product Admin Panel</span>
        <div className="flex-center">
          {products.map((data) => {
            return <AdminProduct key={Math.random()} data={data} />;
          })}
        </div>
      </Product>
      <Advertising>
        <button
          className="addToCart m-1 p-1"
          type="button"
          data-toggle="tooltip"
          title="Create Product"
          onClick={() => navigate("/createAdvertising")}
        >
          <i className="fa-solid fa-circle-plus mr-1"></i> Create Advertising
        </button>
        <span className="p-1">Advertising Admin Panel</span>
        <div className="flex-center">
          {advertisings.map((data) => {
            return <AdvertisingCard key={Math.random()} data={data} />;
          })}
        </div>
      </Advertising>
      <Blog>
        <button
          className="addToCart m-1 p-1"
          type="button"
          data-toggle="tooltip"
          title="Create Product"
          onClick={() => navigate("/createBlog")}
        >
          <i className="fa-solid fa-circle-plus mr-1"></i> Create Blog
        </button>
        <span className="p-1">Blog Admin Panel</span>
        <div className="flex-center">
          {blogs.map((data) => {
            return (<BlogCard key={Math.random()} data={data} />)
          })}
        </div>
      </Blog>
      <AboutTeamMembears>
        <button
          className="addToCart m-1 p-1"
          type="button"
          data-toggle="tooltip"
          title="Create Product"
          onClick={() => navigate("/createAboutTeamMember")}
        >
          <i className="fa-solid fa-circle-plus mr-1"></i> Create About Team Membear
        </button>
        <span className="p-1">About Team Membear Admin Panel</span>

        <div className="flex-center ">
          {
            aboutTeamMembearData.map((data) => {
              return (
                <AboutTeamMembear data={data} key={Math.random()} />
              )
            })
          }
        </div>
      </AboutTeamMembears>

      <AboutCompanys>
        <button
          className="addToCart m-1 p-1"
          type="button"
          data-toggle="tooltip"
          title="Create Product"
          onClick={() => navigate("/createAboutCompany")}
        >
          <i className="fa-solid fa-circle-plus mr-1"></i> Create About Company
        </button>
        <span className="p-1">About Company Admin Panel</span>
        <div className="flex-center">
          {
            aboutCompany.map((data) => {
              return (
                <AboutCompany data={data} key={Math.random()} />
              )
            })
          }
        </div>
      </AboutCompanys>
    </Wrapper>
  );
}

export default AdminMain;
const Wrapper = styled.div`

  span {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    font-size: 18px;
  }

  .flex-center {
    margin: 50px 0;
    padding:0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    height: 100%;
  }

  
`;

const Product = styled.div`
  height: 100vh;
  background-color: red;
  overflow-x: scroll;

  .product-item-container {
    padding: 10px 30px;
    width: 300px;
    height: 100%;
    background-color: #f1f1f1;
  }

`;
const Advertising = styled.div`
  width: 100%;
  height: 100vh;
  background-color: yellow;
  overflow-y: scroll;

  .flex-center {
    width: 100%;
    overflow-y: scroll;

    .yt-content-slide {
    padding: 10px;
    width: 300px;
    height: 100%;
    background-color: #f1f1f1;
  }
  }

  .img-responsive {
    width: 100%;
    height: 350px;
  }
`;
const Blog = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100vh;
  background-color: green;
  overflow-x: scroll;
`;
const AboutTeamMembears = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100vh;
  background-color: gold;
  overflow-y: scroll;

  .social-member {
    display: flex;
    gap: 10px;
    list-style: none;
  }

  span {
    font-size: 14px;
  }
`;
const AboutCompanys = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100vh;
  background-color: blue;
  overflow-x: scroll;

  .img-responsive {
    margin: 10px 0;
    width: 400px;
    height: 300px;
  }


`

