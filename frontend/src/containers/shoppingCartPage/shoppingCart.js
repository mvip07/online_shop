import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import {useState} from "react";
import ShoppingList from "../../components/shoppingCartList/shoppingList";

function ShoppingCart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("onlineShopCart")) || []);
  const [total, setTotal] =useState(1)

  return (
    <div id="wrapper" className="wrapper-full ">
      <Navbar />
      <div className="main-container container">
        <ul className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-home"></i>
            </a>
          </li>
          <li>
            <a href="#">Shopping Cart</a>
          </li>
        </ul>

        <div className="row">
          <div id="content" className="col-md-12">
            <h2 className="title">Shopping Cart</h2>
            <div className="table-responsive form-group">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td className="text-center">Image</td>
                    <td className="text-left">Product Name</td>
                    <td className="text-left">Model</td>
                    <td className="text-left">Quantity</td>
                    <td className="text-right">Unit Price</td>
                    <td className="text-right">Total</td>
                  </tr>
                </thead>
                <tbody>
                {
                  cart.map(({title, image, model, price}) => {
                    return (
                    <ShoppingList title={title} image={image} model={model} price={price} key={Math.random()} />
                    )
                  })
                }

                </tbody>
              </table>
            </div>
            <h3 className="subtitle no-margin">
              What would you like to do next?
            </h3>
            <p>
              Choose if you have a discount code or reward points you want to
              use or would like to estimate your delivery cost.
            </p>
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      href="#collapse-coupon"
                      className="accordion-toggle"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      aria-expanded="true"
                    >
                      Use Coupon Code
                      <i className="fa fa-caret-down"></i>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse-coupon"
                  className="panel-collapse collapse in"
                  aria-expanded="true"
                >
                  <div className="panel-body">
                    <label
                      className="col-sm-2 control-label"
                      htmlFor="input-coupon"
                    >
                      Enter your coupon here
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="coupon"
                        placeholder="Enter your coupon here"
                        id="input-coupon"
                        className="form-control"
                      />
                      <span className="input-group-btn">
                        <input
                          type="button"
                          id="button-coupon"
                          data-loading-text="Loading..."
                          className="btn btn-primary"
                          defaultValue="Apply Coupon"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      href="#collapse-shipping"
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      aria-expanded="false"
                    >
                      Estimate Shipping &amp; Taxes
                      <i className="fa fa-caret-down"></i>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse-shipping"
                  className="panel-collapse collapse"
                  aria-expanded="false"
                  style={{ height: "0px" }}
                >
                  <div className="panel-body">
                    <p>Enter your destination to get a shipping estimate.</p>
                    <div className="form-horizontal">
                      <div className="form-group required">
                        <label
                          className="col-sm-2 control-label"
                          htmlFor="input-country"
                        >
                          Country
                        </label>
                        <div className="col-sm-10">
                          <select
                            name="country_id"
                            id="input-country"
                            className="form-control"
                          >
                            <option> --- Please Select --- </option>
                            <option defaultValue="244">Aaland Islands</option>
                            <option defaultValue="1">Afghanistan</option>
                            <option defaultValue="2">Albania</option>
                            <option defaultValue="3">Algeria</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group required">
                        <label
                          className="col-sm-2 control-label"
                          htmlFor="input-zone"
                        >
                          Region / State
                        </label>
                        <div className="col-sm-10">
                          <select
                            name="zone_id"
                            id="input-zone"
                            className="form-control"
                          >
                            <option> --- Please Select --- </option>
                            <option defaultValue="3513">Aberdeen</option>
                            <option defaultValue="3514">Aberdeenshire</option>
                            <option defaultValue="3515">Anglesey</option>
                            <option defaultValue="3516">Angus</option>
                            <option defaultValue="3517">Argyll and Bute</option>
                            <option defaultValue="3518">Bedfordshire</option>
                            <option defaultValue="3519">Berkshire</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group required">
                        <label
                          className="col-sm-2 control-label"
                          htmlFor="input-postcode"
                        >
                          Post Code
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="text"
                            name="postcode"
                            placeholder="Post Code"
                            id="input-postcode"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        id="button-quote"
                        data-loading-text="Loading..."
                        className="btn btn-primary"
                      >
                        Get Quotes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      href="#collapse-voucher"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      className="accordion-toggle collapsed"
                      aria-expanded="false"
                    >
                      Use Gift Certificate
                      <i className="fa fa-caret-down"></i>
                    </a>
                  </h4>
                </div>
                <div
                  id="collapse-voucher"
                  className="panel-collapse collapse"
                  aria-expanded="false"
                  style={{ height: "0px" }}
                >
                  <div className="panel-body">
                    <label
                      className="col-sm-2 control-label"
                      htmlFor="input-voucher"
                    >
                      Enter your gift certificate code here
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="voucher"
                        placeholder="Enter your gift certificate code here"
                        id="input-voucher"
                        className="form-control"
                      />
                      <span className="input-group-btn">
                        <input
                          type="submit"
                          htmlFor="Apply Gift Certificate"
                          id="button-voucher"
                          data-loading-text="Loading..."
                          className="btn btn-primary"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 col-sm-offset-8">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td className="text-right">
                        <strong>Sub-Total:</strong>
                      </td>
                      <td className="text-right">$168.71</td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <strong>Flat Shipping Rate:</strong>
                      </td>
                      <td className="text-right">$4.69</td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <strong>Eco Tax (-2.00):</strong>
                      </td>
                      <td className="text-right">$5.62</td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <strong>VAT (20%):</strong>
                      </td>
                      <td className="text-right">$34.68</td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <strong>Total:</strong>
                      </td>
                      <td className="text-right">$213.70</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="buttons">
              <div className="pull-left">
                <a href="index.html" className="btn btn-primary">
                  Continue Shopping
                </a>
              </div>
              <div className="pull-right">
                <a href="checkout.html" className="btn btn-primary">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShoppingCart;
