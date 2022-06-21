import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { host } from "../../containers/utils/url";

function WishlistCard() {
  const [likeData, setLikeData] = useState(
    JSON.parse(localStorage.getItem("onlineShopLike")) || []
  );

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

  return likeData.map((item) => {
    return (
      <tr key={Math.random()}>
        <td className="text-center">
          <Link to="/product">
            <img
              width="70px"
              src={`${host}/${item.image}`}
              alt="Xitefun Causal Wear Fancy Shoes"
              title="Xitefun Causal Wear Fancy Shoes"
            />
          </Link>
        </td>
        <td className="text-left">
          <Link to="/product">{item.title}</Link>
        </td>
        <td className="text-left">{item.model}</td>
        <td className="text-right">{item.discount}</td>
        <td className="text-right">
          <div className="price">
            <span className="price-new">{item.price}</span>
          </div>
        </td>
        <td className="text-right">
          <button
            className="btn btn-primary"
            title=""
            data-toggle="tooltip"
            type="button"
            data-original-title="Add to Cart"
            onClick={() => AddtoBag(item)}
            style={{
              display: bagElements?.includes(item.id) ? "none" : "",
            }}
          >
            <i className="fa fa-shopping-cart"> </i>
          </button>
          <Link
            className="btn btn-danger"
            title=""
            data-toggle="tooltip"
            to=""
            data-original-title="Remove"
          >
            <i className="fa fa-times"> </i>
          </Link>
        </td>
      </tr>
    );
  });
}

export default WishlistCard;
const Wrapper = styled.div``;
