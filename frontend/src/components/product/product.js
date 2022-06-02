import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Five,
  Four,
  FourAndHalf,
  One,
  OneAndHalf,
  Three,
  ThreeAndHalf,
  Two,
  TwoAndHalf,
} from "../stars/stars";

function Product({ product }) {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [bag, setBag] = useState(
    JSON.parse(localStorage.getItem("onlineShopCart")) || []
  );

  const AddtoBag = (data) => {
    setBag([...bag, data]);
    localStorage.setItem("onlineShopCart", JSON.stringify([...bag, data]));
  };

  const bagElements = JSON.parse(localStorage.getItem("onlineShopCart"))?.map(
    ({ id }) => id
  );

  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem("onlineShopLike")) || []
  );

  const AddtoLike = (data) => {
    setLike([...like, data]);
    localStorage.setItem("onlineShopLike", JSON.stringify([...like, data]));
  };

  const LikeElements = JSON.parse(localStorage.getItem("onlineShopLike"))?.map(
    ({ id }) => id
  );

  const [comparison, setComparison] = useState(
    JSON.parse(localStorage.getItem("onlineShopComparison")) || []
  );

  const AddtoComparison = (data) => {
    setComparison([...comparison, data]);
    localStorage.setItem(
      "onlineShopComparison",
      JSON.stringify([...comparison, data])
    );
  };

  const ComparisonElements = JSON.parse(
    localStorage.getItem("onlineShopComparison")
  )?.map(({ id }) => id);

  return product.map((data) => {
    return (
      <div className="ltabs-item product-layout" key={Math.random()}>
        <div className="product-item-container">
          <div className="left-block">
            <div className="product-image-container second_img product-img">
              <img
                src={`http://localhost:8000/${data.image}`}
                alt='Apple Cinema 30"'
                className="img-responsive"
              />
            </div>
            <span className="label label-sale">{data.discount} %</span>
            <div
              className="quickview iframe"
              data-fancybox-type="iframe"
              onClick={() => navigate(`/productDetail/${data.id}`)}
            >
              Quickview
            </div>
          </div>
          <div className="right-block">
            <div className="caption">
              <h4>
                <p href="/product">{data.title}</p>
              </h4>
              <div className="ratings">
                {data.stars == "1" ? <One /> : ""}
                {data.stars == "1.5" ? <OneAndHalf /> : ""}
                {data.stars == "2" ? <Two /> : ""}
                {data.stars == "2.5" ? <TwoAndHalf /> : ""}
                {data.stars == "3" ? <Three /> : ""}
                {data.stars == "3.5" ? <ThreeAndHalf /> : ""}
                {data.stars == "4" ? <Four /> : ""}
                {data.stars == "4.5" ? <FourAndHalf /> : ""}
                {data.stars == "5" ? <Five /> : ""}
              </div>
              <div className="price">
                <span className="price-new">{data.price}</span>
                <span className="price-old">$623.00</span>
              </div>
            </div>
            <div className="button-group">
              <button
                style={{
                  display: bagElements?.includes(data.id) ? "none" : "",
                }}
                className="addToCart"
                type="button"
                data-toggle="tooltip"
                title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"> </i>{" "}
                <span onClick={() => AddtoBag(data)}>Add to Cart</span>
              </button>
              <button
                className="wishlist"
                type="button"
                data-toggle="tooltip"
                title="Add to Wish List"
                onClick={() => AddtoLike(data)}
                style={{
                  display: LikeElements?.includes(data.id) ? "none" : "",
                }}
              >
                <i className="fa fa-heart"> </i>
              </button>
              <button
                className="compare"
                type="button"
                data-toggle="tooltip"
                title="Compare this Product"
                onClick={() => AddtoComparison(data)}
                style={{
                  display: ComparisonElements?.includes(data.id) ? "none" : "",
                }}
              >
                <i className="fa fa-exchange"> </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Product;
