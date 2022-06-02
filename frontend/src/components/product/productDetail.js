import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../containers/utils/axios";

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

import { Blue, Brown, Green } from "../../export/exportImg/exportImg";
function ProductDetail() {
  const navigate = useNavigate()
  const [productDetail, setproductDetail] = useState([]);
  const [count, setCount] = useState(1);
  const [oldPrice, setOldPrice] = useState("")
  const { id } = useParams();

  const [bag, setBag] = useState(
    JSON.parse(localStorage.getItem("onlineShopCart")) || []
  );

  const AddtoBag = (data) => {
    console.log(data);
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

  useEffect(() => {
    API.get(`/products`).then((res) => setproductDetail(res.data));
  }, []);
  return (
    <div id="wrapper" className="wrapper-full productDetailCenter">
      {productDetail
        .filter((item) => item.id === id)
        .map((data) => {
          return (
            <div className="main-container container" key={Math.random()}>
              <div className="row">
                <div id="content" className="col-md-12 col-sm-12">
                  <div className="product-view row">
                    <div className="left-content-product col-lg-12 col-xs-12">
                      <div className="row">
                        <div className="content-product-left  col-sm-6 col-xs-12 ">
                          <div className="large-image  ">
                            <img
                              className="product-image-zoom"
                              src={`http://localhost:8000/${data.image}`}
                              alt="bnt-Beef"
                            />
                          </div>

                          {/*<div id="thumb-slider" className="owl-theme owl-loaded owl-drag full_slider">*/}
                          {/*  <a*/}
                          {/*    data-index="0"*/}
                          {/*    className="img thumbnail "*/}
                          {/*  >*/}
                          {/*    <img src="../image/demo/shop/product/J9.jpg" alt="bint-Beef"/>*/}
                          {/*  </a>*/}
                          {/*  <a*/}
                          {/*    data-index="1"*/}
                          {/*    className="img thumbnail"*/}
                          {/*    data-image="../image/demo/shop/product/J6.jpg"*/}
                          {/*  >*/}
                          {/*    <img*/}
                          {/*      src="../image/demo/shop/product/J6.jpg"*/}
                          {/*      title="Bint Beef"*/}
                          {/*      alt="Bint Beef"*/}
                          {/*    />*/}
                          {/*  </a>*/}
                          {/*  <a*/}
                          {/*    data-index="2"*/}
                          {/*    className="img thumbnail"*/}
                          {/*    data-image="../image/demo/shop/product/J5.jpg"*/}
                          {/*    title="Bint Beef"*/}
                          {/*  >*/}
                          {/*    <img*/}
                          {/*      src="../image/demo/shop/product/J5.jpg"*/}
                          {/*      title="Bint Beef"*/}
                          {/*      alt="Bint Beef"*/}
                          {/*    />*/}
                          {/*  </a>*/}
                          {/*  <a*/}
                          {/*    data-index="3"*/}
                          {/*    className="img thumbnail"*/}
                          {/*    data-image="../image/demo/shop/product/J4.jpg"*/}
                          {/*    title="Bint Beef"*/}
                          {/*  >*/}
                          {/*    <img*/}
                          {/*      src="../image/demo/shop/product/J4.jpg"*/}
                          {/*      title="Bint Beef"*/}
                          {/*      alt="Bint Beef"*/}
                          {/*    />*/}
                          {/*  </a>*/}
                          {/*</div>*/}
                          {/*</div>*/}
                        </div>
                        <div className="content-product-right col-sm-6 col-xs-12">
                          <div className="title-product">
                            <h1>{data.title}</h1>
                          </div>
                          <div className="box-review form-group">
                            <div className="ratings">
                              {data.stars === "1" ? <One /> : ""}
                              {data.stars === "1.5" ? <OneAndHalf /> : ""}
                              {data.stars === "2" ? <Two /> : ""}
                              {data.stars === "2.5" ? <TwoAndHalf /> : ""}
                              {data.stars === "3" ? <Three /> : ""}
                              {data.stars === "3.5" ? <ThreeAndHalf /> : ""}
                              {data.stars === "4" ? <Four /> : ""}
                              {data.stars === "4.5" ? <FourAndHalf /> : ""}
                              {data.stars === "5" ? <Five /> : ""}
                            </div>
                            <a className="reviews_button" href="#">
                              0 reviews{" "}
                            </a>
                          </div>

                          <div className="product-label form-group">
                            <div
                              className="product_page_price price"
                              itemProp="offerDetails"
                              itemScope=""
                            >
                              <span className="price-new" itemProp="price">
                                {data.price}
                              </span>
                              {" "}
                              <span className="price-old">$ {(Number(data.price) / 100 + Number(data.price)).toFixed(2)}</span>
                            </div>
                            <div className="stock">
                              <span>Availability: </span>
                              <span className="status-stock">In Stock </span>
                            </div>
                          </div>

                          <div className="product-box-desc">
                            <div className="inner-box-desc">
                              <div className="price-tax">
                                <span>Model: </span> {data.model}
                              </div>
                              <div className="reward">
                                <span>Discount: </span> {data.discount} %
                              </div>
                              <div className="brand">
                                <span>Brand: </span>
                                <a href="#">{data.brand} </a>
                              </div>
                              <div className="model">
                                <span>Product Code: </span> Product 15
                              </div>
                              <div className="reward">
                                <span>Description: </span> {data.description}
                              </div>
                            </div>
                          </div>

                          <div id="product">
                            <h4>Available Options </h4>
                            <div className="image_option_type form-group required">
                              <label className="control-label">Colors </label>
                              <ul
                                className="product-options clearfix"
                                id="input-option231"
                              >

                                {
                                  data.color.map((items) => {

                                    return (
                                      items.map((item) => {

                                        return (
                                          <li className="radio" key={Math.random()}>

                                            <div
                                              style={{ background: `${item}` }}
                                              className="img-thumbnail icon icon-color"
                                            ></div>
                                            <i className="fa fa-check"> </i>
                                          </li>
                                        )

                                      })
                                    )

                                  })
                                }
                              </ul>
                            </div>

                            {/*<div className="box-checkbox form-group required">*/}
                            {/*  <label className="control-label">Checkbox </label>*/}
                            {/*  <div id="input-option232">*/}
                            {/*    <div className="checkbox">*/}
                            {/*      <label>*/}
                            {/*        <input*/}
                            {/*          type="checkbox"*/}
                            {/*          name="option[232][]"*/}
                            {/*          defaultValue="36"*/}
                            {/*        />*/}
                            {/*        Checkbox 1 (+$12.00){" "}*/}
                            {/*      </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="checkbox">*/}
                            {/*      <label>*/}
                            {/*        <input*/}
                            {/*          type="checkbox"*/}
                            {/*          name="option[232][]"*/}
                            {/*          defaultValue="37"*/}
                            {/*        />*/}
                            {/*        Checkbox 2 (+$36.00){" "}*/}
                            {/*      </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="checkbox">*/}
                            {/*      <label>*/}
                            {/*        <input*/}
                            {/*          type="checkbox"*/}
                            {/*          name="option[232][]"*/}
                            {/*          defaultValue="38"*/}
                            {/*        />*/}
                            {/*        Checkbox 3 (+$24.00){" "}*/}
                            {/*      </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="checkbox">*/}
                            {/*      <label>*/}
                            {/*        <input*/}
                            {/*          type="checkbox"*/}
                            {/*          name="option[232][]"*/}
                            {/*          defaultValue="39"*/}
                            {/*        />*/}
                            {/*        Checkbox 4 (+$48.00){" "}*/}
                            {/*      </label>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}

                            <div className="form-group box-info-product d-flex">
                              <div className="option quantity">
                                <div
                                  className="input-group quantity-control"
                                  style={{
                                    display: bagElements?.includes(data.id)
                                      ? "none"
                                      : "",
                                    WebkitUserSelect: "none",
                                  }}
                                >
                                  <label>Qty </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="quantity"
                                    defaultValue={count}
                                  />
                                  <input type="hidden" />
                                  <span
                                    className="input-group-addon product_quantity_down"
                                    onClick={() =>
                                      count > 1 ? setCount(count - 1) : ""
                                    }
                                  >
                                    −
                                  </span>
                                  <span
                                    className="input-group-addon product_quantity_up"
                                    onClick={() => setCount(count + 1)}
                                  >
                                    +
                                  </span>
                                </div>
                              </div>
                              <div
                                className="cart"
                                onClick={() => AddtoBag(data)}
                                style={{
                                  display: bagElements?.includes(data.id)
                                    ? "none"
                                    : "",
                                }}
                              >
                                <input
                                  type="button"
                                  data-toggle="tooltip"
                                  defaultValue="Add to Cart"
                                  data-loading-text="Loading..."
                                  id="button-cart"
                                  className="btn btn-mega btn-lg"
                                  data-original-title="Add to Cart"
                                />
                              </div>
                              <div
                                className="cart" onClick={() => navigate(-1)}>
                                <input
                                  type="button"
                                  data-toggle="tooltip"
                                  defaultValue="Back"
                                  data-loading-text="Loading..."
                                  id="button-cart"
                                  className="btn btn-mega btn-lg"
                                />
                              </div>
                              <div className="add-to-links wish_comp">
                                <ul className="blank list-inline">
                                  <li
                                    className="wishlist"
                                    onClick={() => AddtoLike(data)}
                                    style={{
                                      display: LikeElements?.includes(data.id)
                                        ? "none"
                                        : "",
                                    }}
                                  >
                                    <a
                                      className="icon"
                                      data-toggle="tooltip"
                                      data-original-title="Add to Wish List"
                                    >
                                      <i className="fa fa-heart"> </i>
                                    </a>
                                  </li>
                                  <li
                                    className="compare"
                                    onClick={() => AddtoComparison(data)}
                                    style={{
                                      display: ComparisonElements?.includes(
                                        data.id
                                      )
                                        ? "none"
                                        : "",
                                    }}
                                  >
                                    <a
                                      className="icon"
                                      data-toggle="tooltip"
                                      data-original-title="Compare this Product"
                                    >
                                      <i className="fa fa-exchange"> </i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div >
  );
}

export default ProductDetail;
