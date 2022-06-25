import { Link } from "react-router-dom";
import { host } from "../../containers/utils/url";

function Cart({ data }) {
  return (
    <li className="table-overflow-scroll">
      <table
        className="table table-striped table-bordered"
      >
        <tbody>
          <tr>
            <td className="text-center" style={{ width: "70px" }}>
              <Link to="/">
                <img
                  src={`${host}/${data.image}`}
                  style={{ width: "70px" }}
                  alt="Canon EOS 5D"
                  title="Canon EOS 5D"
                  className="preview"
                />{" "}
              </Link>
            </td>
            <td className="text-left">
              <Link className="cart_product_name" to="/">
                {data.title}
              </Link>
            </td>
            <td className="text-center"> x1 </td>
            <td className="text-center"> {data.price} </td>
            <td className="text-right">
              <Link to="/" className="fa fa-edit">
                {" "}
              </Link>
            </td>
            <td className="text-right">
              <Link to="#" className="fa fa-times fa-delete"> </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}

export default Cart;
