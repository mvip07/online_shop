import { useEffect, useState } from "react";
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
} from "../../components/stars/stars";
import API from "../utils/axios";

function CategoryProduct({ inputSearch }) {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const navigate = useNavigate();
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

  useEffect(() => {
    API.get("/products").then((res) => {
      setCategoryProduct(res.data);
    });
  }, []);

  return categoryProduct
    .filter(
      (item) => item.title.toUpperCase().search(inputSearch.toUpperCase()) >= 0
    )
    .map((data) => {
      return (
        <div
          className="product-layout col-md-6 col-sm-6 col-xs-12 col-lg-12"
          key={Math.random()}
        >
          <div className="product-item-container">
            <div className="left-block col-md-4">
              <div className="product-image-container second_img ">
                <img
                  src={`${process.env.baseURL}/${data.image}`}
                  alt='Apple Cinema 30"'
                  className="img-responsive category-img"
                />
              </div>

              <div
                className="quickview iframe"
                data-fancybox-type="iframe"
                onClick={() => navigate(`/productDetail/${data.id}`)}
              >
                Quickview
              </div>
            </div>

            <div className="right-block col-md-8">
              <div className="caption">
                <h4>
                  <a href={`/productDetail/${data.id}`}>{data.title}</a>
                </h4>
                <div className="ratings">
                  <div className="rating-box">
                    {data.stars === "1" ? (
                      <One />
                    ) : "" || data.stars === "1.5" ? (
                      <OneAndHalf />
                    ) : "" || data.stars === "2" ? (
                      <Two />
                    ) : "" || data.stars === "2.5" ? (
                      <TwoAndHalf />
                    ) : "" || data.stars === "3" ? (
                      <Three />
                    ) : "" || data.stars === "3.5" ? (
                      <ThreeAndHalf />
                    ) : "" || data.stars === "4" ? (
                      <Four />
                    ) : "" || data.stars === "4.5" ? (
                      <FourAndHalf />
                    ) : "" || data.stars === "5" ? (
                      <Five />
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="price">
                  <span className="price-new">{data.price}</span>
                  <span className="price-old">$122.00</span>
                  <span className="label label-percent">-40%</span>
                </div>
                <div className="description item-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est .
                  </p>
                </div>
              </div>

              <div className="button-group">
                <button
                  className="addToCart"
                  type="button"
                  data-toggle="tooltip"
                  title="Add to Cart"
                  onClick={() => AddtoBag(data)}
                  style={{
                    display: bagElements?.includes(data.id) ? "none" : "",
                  }}
                >
                  <i className="fa fa-shopping-cart"></i>
                  <span className="hidden-xs">Add to Cart</span>
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
                  <i className="fa fa-heart"></i>
                </button>
                <button
                  className="compare"
                  type="button"
                  data-toggle="tooltip"
                  title="Compare this Product"
                  onClick={() => AddtoComparison(data)}
                  style={{
                    display: ComparisonElements?.includes(data.id)
                      ? "none"
                      : "",
                  }}
                >
                  <i className="fa fa-exchange"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
}

export default CategoryProduct;
