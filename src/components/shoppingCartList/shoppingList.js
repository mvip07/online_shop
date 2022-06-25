import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { host } from "../../containers/utils/url";

function ShoppingList({ data }) {
  const [total, setTotal] = useState(1)
  return (
    <tr>
      <td className="text-center">
        <Link to="#">
          <img
            width="70px"
            src={`${host}/${data.image}`}
            alt="Img"
            title="Aspire Ultrabook Laptop"
            className="img-thumbnail"
          />
        </Link>
      </td>
      <td className="text-left">
        <Link to="#">{data.title}</Link>
        <br />
      </td>
      <td className="text-left">{data.model}</td>
      <td className="text-left grid">
        {
          data.color.map((items) => (
            <div
              key={Math.random()}
              className="color"
              style={{ background: `${items}`, width: "20px", height: "20px" }}
            ></div>
          )
          )
        }
      </td>
      <td className="text-left" width="200px">
        <div className="input-group btn-block quantity">
          <input
            type="text"
            name="quantity"
            defaultValue={total}
            onChange={({ target }) => setTotal(target.value)}
            size="1"
            className="form-control"
            style={{ width: "100px" }}
          />
          <span className="input-group-btn">
            <button
              type="submit"
              data-toggle="tooltip"
              title="Update"
              className="btn btn-primary"
            >
              <i className="fa fa-clone"></i>
            </button>
            <button
              type="button"
              data-toggle="tooltip"
              title="Remove"
              className="btn btn-danger"
            >
              <i className="fa fa-times-circle"></i>
            </button>
          </span>
        </div>
      </td>
      <td className="text-right">$ {data.price}</td>
      <td className="text-right">$ {(data.price * total).toFixed(2)}</td>
    </tr>
  );
}

export default memo(ShoppingList);