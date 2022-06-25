import { useState } from "react";
import { Link } from "react-router-dom";
import { host } from "../../containers/utils/url";

function WishlistCard({ data }) {
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

  return (
    <tr key={Math.random()}>
      <td className="text-center">
        <Link to="/product">
          <img
            width="70px"
            src={`${host}/${data.image}`}
            alt="Xitefun Causal Wear Fancy Shoes"
            title="Xitefun Causal Wear Fancy Shoes"
          />
        </Link>
      </td>
      <td className="text-left">
        <Link to="/product">{data.title}</Link>
      </td>
      <td className="text-left">{data.model}</td>
      <td className="text-right">{data.discount}</td>
      <td className="text-right">
        <div className="price">
          <span className="price-new">{data.price}</span>
        </div>
      </td>
      <td className="text-right">
        <button
          className="btn btn-primary"
          title=""
          data-toggle="tooltip"
          type="button"
          data-original-title="Add to Cart"
          onClick={() => AddtoBag(data)}
          style={{
            display: bagElements?.includes(data.id) ? "none" : "",
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

}

export default WishlistCard;