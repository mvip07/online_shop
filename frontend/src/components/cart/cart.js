import { useState } from "react";
import { Link } from "react-router-dom";
import { host } from "../../containers/utils/url";
import { Icons53 } from "../../export/exportImg/exportImg";

function Cart({ bag }) {
  const [bagData, setBagData] = useState(bag || []);

  return (
    <div className="col-md-2 col-sm-5 col-xs-12 shopping_cart pull-right">
      <div id="cart" className=" btn-group btn-shopping-cart">
        <Link
          to="/"
          data-loading-text="Loading..."
          className="top_cart dropdown-toggle"
          data-toggle="dropdown"
        >
          <div className="shopcart">
            <span className="handle pull-left"></span>
            <span className="title">My cart</span>
            <p className="text-shopping-cart cart-total-full">
              {bagData.length} item(s)
            </p>
          </div>
        </Link>

        <ul
          className="tab-content content dropdown-menu pull-right shoppingcart-box"
          role="menu"
        >
          <li className="table-overflow-scroll">
            {bagData.map(({ title, price, image }) => {
              return (
                <table
                  className="table table-striped table-bordered"
                  key={Math.random()}
                >
                  <tbody>
                    <tr>
                      <td className="text-center" style={{ width: "70px" }}>
                        <Link to="/">
                          <img
                            src={`${host}/${image}`}
                            style={{ width: "70px" }}
                            alt="Canon EOS 5D"
                            title="Canon EOS 5D"
                            className="preview"
                          />{" "}
                        </Link>
                      </td>
                      <td className="text-left">
                        <Link className="cart_product_name" to="/">
                          {title}
                        </Link>
                      </td>
                      <td className="text-center"> x1 </td>
                      <td className="text-center"> {price} </td>
                      <td className="text-right">
                        <Link to="/" className="fa fa-edit">
                          {" "}
                        </Link>
                      </td>
                      <td className="text-right">
                        <Link className="fa fa-times fa-delete"> </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </li>
          <li>
            <div>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="text-left">
                      <strong>Sub-Total</strong>
                    </td>
                    <td className="text-right">$1,060.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">
                      <strong>Eco Tax (-2.00)</strong>
                    </td>
                    <td className="text-right">$2.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">
                      <strong>VAT (20%)</strong>
                    </td>
                    <td className="text-right">$200.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">
                      <strong>Total</strong>
                    </td>
                    <td className="text-right">$1,262.00</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-right">
                <Link className="btn view-cart" to="/shoppingCartPage">
                  <i className="fa fa-shopping-cart"> </i>View Cart
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link className="btn btn-mega checkout-cart" to="/checkout">
                  <i className="fa fa-share"> </i>Checkout
                </Link>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
