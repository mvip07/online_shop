import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { host } from "../../containers/utils/url";
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
  const [bag, setBag] = useState(
    JSON.parse(localStorage.getItem("onlineShopCart")) || []
  );

  const AddtoBag = (product) => {
    setBag([...bag, product]);
    localStorage.setItem("onlineShopCart", JSON.stringify([...bag, product]));
  };

  const bagElements = JSON.parse(localStorage.getItem("onlineShopCart"))?.map(
    ({ id }) => id
  );

  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem("onlineShopLike")) || []
  );

  const AddtoLike = (product) => {
    setLike([...like, product]);
    localStorage.setItem("onlineShopLike", JSON.stringify([...like, product]));
  };

  const LikeElements = JSON.parse(localStorage.getItem("onlineShopLike"))?.map(
    ({ id }) => id
  );

  const [comparison, setComparison] = useState(
    JSON.parse(localStorage.getItem("onlineShopComparison")) || []
  );

  const AddtoComparison = (product) => {
    setComparison([...comparison, product]);
    localStorage.setItem(
      "onlineShopComparison",
      JSON.stringify([...comparison, product])
    );
  };

  const ComparisonElements = JSON.parse(
    localStorage.getItem("onlineShopComparison")
  )?.map(({ id }) => id);

  return (
    <div className="ltabs-item product-layout">
      <div className="product-item-container">
        <div className="left-block">
          <div className="product-image-container second_img product-img">
            <img
              src={`${host}/${product.image}`}
              alt='Apple Cinema 30"'
              className="img-responsive"
            />
          </div>
          {
            product.discount === "No" || product.discount === "" ?
              ""
              :
              <span className="label label-sale">{product.discount} %</span>
          }
          <div
            className="quickview iframe"
            data-fancybox-type="iframe"
            onClick={() => navigate(`/productDetail/${product.id}`)}
          >
            Quickview
          </div>
        </div>
        <div className="right-block">
          <div className="caption">
            <h4>
              <p href="/product">{product.title}</p>
            </h4>
            <div className="ratings">
              {product.stars === "1" ? <One /> : ""}
              {product.stars === "1.5" ? <OneAndHalf /> : ""}
              {product.stars === "2" ? <Two /> : ""}
              {product.stars === "2.5" ? <TwoAndHalf /> : ""}
              {product.stars === "3" ? <Three /> : ""}
              {product.stars === "3.5" ? <ThreeAndHalf /> : ""}
              {product.stars === "4" ? <Four /> : ""}
              {product.stars === "4.5" ? <FourAndHalf /> : ""}
              {product.stars === "5" ? <Five /> : ""}
            </div>
            <div className="price">
              <span className="price-new">${product.price}</span>

              {

                product.discount === "No" || product.discount === ""
                  ?
                  ""
                  :
                  <span className="price-old mr-1">$ {Number(((product.price * product.discount) / 100).toFixed(2)) + Number(product.price)}</span>
              }

            </div>
          </div>
          <div className="button-group">
            <button
              style={{
                display: bagElements?.includes(product.id) ? "none" : "",
              }}
              className="addToCart"
              type="button"
              data-toggle="tooltip"
              title="Add to Cart"
            >
              <i className="fa fa-shopping-cart"> </i>{" "}
              <span onClick={() => AddtoBag(product)}>Add to Cart</span>
            </button>
            <button
              className="wishlist"
              type="button"
              data-toggle="tooltip"
              title="Add to Wish List"
              onClick={() => AddtoLike(product)}
              style={{
                display: LikeElements?.includes(product.id) ? "none" : "",
              }}
            >
              <i className="fa fa-heart"> </i>
            </button>
            <button
              className="compare"
              type="button"
              data-toggle="tooltip"
              title="Compare this Product"
              onClick={() => AddtoComparison(product)}
              style={{
                display: ComparisonElements?.includes(product.id) ? "none" : "",
              }}
            >
              <i className="fa fa-exchange"> </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
