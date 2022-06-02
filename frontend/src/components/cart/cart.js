import { useState } from "react";
import { Icons53 } from "../../export/exportImg/exportImg";

function Cart({ bag }) {
  const [bagData, setBagData] = useState(bag || []);

  return (
    <div className="col-md-2 col-sm-5 col-xs-12 shopping_cart pull-right">
      <div id="cart" className=" btn-group btn-shopping-cart">
        <a
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
        </a>

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
                        <a href="/">
                          <img
                            src={`http://localhost:8000/${image}`}
                            style={{ width: "70px" }}
                            alt="Canon EOS 5D"
                            title="Canon EOS 5D"
                            className="preview"
                          />{" "}
                        </a>
                      </td>
                      <td className="text-left">
                        <a className="cart_product_name" href="/">
                          {title}
                        </a>
                      </td>
                      <td className="text-center"> x1 </td>
                      <td className="text-center"> {price} </td>
                      <td className="text-right">
                        <a href="/" className="fa fa-edit">
                          {" "}
                        </a>
                      </td>
                      <td className="text-right">
                        <a className="fa fa-times fa-delete"> </a>
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
                <a className="btn view-cart" href="/shoppingCartPage">
                  <i className="fa fa-shopping-cart"> </i>View Cart
                </a>
                &nbsp;&nbsp;&nbsp;
                <a className="btn btn-mega checkout-cart" href="/checkout">
                  <i className="fa fa-share"> </i>Checkout
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
