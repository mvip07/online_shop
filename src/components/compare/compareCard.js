import { useState } from "react";
import { host } from "../../containers/utils/url";
import {
  One,
  OneAndHalf,
  Two,
  TwoAndHalf,
  Three,
  ThreeAndHalf,
  Four,
  FourAndHalf,
  Five,
} from "../stars/stars";

function CompareCard({ data }) {


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

  return (
    <tbody >
      <tr>
        <td>Product</td>
        <td>
          <p>{data.title}</p>
        </td>
      </tr>
      <tr>
        <td>Image</td>
        <td className="text-center">
          <img
            className="img-thumbnail"
            title="Laptop Silver black"
            alt="Laptop Silver black"
            width="200px"
            src={`${host}/${data.image}`}
          />
        </td>
      </tr>
      <tr>
        <td>Price</td>
        <td>
          <div className="price">
            <span className="price-new">$ {data.price}</span>
            <span className="price-old">$ {data.price}</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>Model</td>
        <td>{data.model}</td>
      </tr>
      <tr>
        <td>Brand</td>
        <td>{data.brand}</td>
      </tr>
      <tr>
        <td>Availability</td>
        <td>In Stock</td>
      </tr>
      <tr>
        <td>Rating</td>
        <td className="rating">
          {data.stars === "1" ? <One /> : ""}
          {data.stars === "1.5" ? <OneAndHalf /> : ""}
          {data.stars === "2" ? <Two /> : ""}
          {data.stars === "2.5" ? <TwoAndHalf /> : ""}
          {data.stars === "3" ? <Three /> : ""}
          {data.stars === "3.5" ? <ThreeAndHalf /> : ""}
          {data.stars === "4" ? <Four /> : ""}
          {data.stars === "4.5" ? <FourAndHalf /> : ""}
          {data.stars === "5" ? <Five /> : ""}
        </td>
      </tr>
      <tr>
        <td>Summary</td>
        <td className="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        </td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>1.50kg</td>
      </tr>
      <tr>
        <td>Dimensions (L x W x H)</td>
        <td>0.00mm x 0.00mm x 0.00mm</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <input
            type="button"
            className="btn btn-primary btn-block"
            value="Add to Cart"
            onClick={() => AddtoBag(data)}
            style={{
              display: bagElements?.includes(data.id) ? "none" : "",
            }}
          />
          <p className="btn btn-danger btn-block">Remove</p>
        </td>
      </tr>
    </tbody>

  );
}

export default CompareCard;
