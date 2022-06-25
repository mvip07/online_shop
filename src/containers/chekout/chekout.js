import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import ShoppingList from "../../components/shoppingCartList/shoppingList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("onlineShopCart")) || []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("onlineShopCart")) || [])
  }, [])

  return (
    <div id="wrapper" className="wrapper-full ">
      <Navbar />
      <div className="main-container container">
        <ul className="breadcrumb">
          <li>
            <Link to="#">
              <i className="fa fa-home"></i>
            </Link>
          </li>
          <li>
            <Link to="#">Checkout</Link>
          </li>
        </ul>

        <div className="row">
          {" "}
          <div id="content" className="col-sm-12">
            <h2 className="title">Checkout</h2>
            <div className="so-onepagecheckout ">
              <div className="col-left col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <i className="fa fa-sign-in"></i> Create an Account or
                      Login
                    </h4>
                  </div>
                  <div className="panel-body">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          defaultValue="register"
                          name="account"
                        />
                        Register Account
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          defaultChecked="checked"
                          defaultValue="guest"
                          name="account"
                        />
                        Guest Checkout
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          defaultValue="returning"
                          name="account"
                        />
                        Returning Customer
                      </label>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <i className="fa fa-user"></i> Your Personal Details
                    </h4>
                  </div>
                  <div className="panel-body">
                    <fieldset id="account">
                      <div className="form-group required">
                        <label
                          htmlFor="input-payment-firstname"
                          className="control-label"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-payment-firstname"
                          placeholder="First Name"
                          defaultValue=""
                          name="firstname"
                        />
                      </div>
                      <div className="form-group required">
                        <label
                          htmlFor="input-payment-lastname"
                          className="control-label"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-payment-lastname"
                          placeholder="Last Name"
                          defaultValue=""
                          name="lastname"
                        />
                      </div>
                      <div className="form-group required">
                        <label
                          htmlFor="input-payment-email"
                          className="control-label"
                        >
                          E-Mail
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-payment-email"
                          placeholder="E-Mail"
                          defaultValue=""
                          name="email"
                        />
                      </div>
                      <div className="form-group required">
                        <label
                          htmlFor="input-payment-telephone"
                          className="control-label"
                        >
                          Telephone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-payment-telephone"
                          placeholder="Telephone"
                          defaultValue=""
                          name="telephone"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="input-payment-fax"
                          className="control-label"
                        >
                          Fax
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-payment-fax"
                          placeholder="Fax"
                          defaultValue=""
                          name="fax"
                        />
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <i className="fa fa-book"></i> Your Address
                    </h4>
                  </div>
                  <div className="panel-body">
                    <fieldset id="address" className="required">
                      <div className="form-group">
                        <label
                          htmlFor="input-payment-company"
                          className="control-label"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-payment-company"
                          placeholder="Company"
                          defaultValue=""
                          name="company"
                        />
                      </div>
                      <div className="form-group required">
                        <label
                          htmlFor="input-payment-address-1"
                          className="control-label"
                        >
                          Address 1
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-payment-address-1"
                          placeholder="Address 1"
                          defaultValue=""
                          name="address_1"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="input-payment-address-2"
                          className="control-label"
                        >
                          Address 2
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-payment-address-2"
                          placeholder="Address 2"
                          defaultValue=""
                          name="address_2"
                        />
                      </div>
                      <div className="form-group required">
                        <label
                          htmlFor="input-payment-city"
                          className="control-label"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-payment-city"
                          placeholder="City"
                          defaultValue=""
                          name="city"
                        />
                      </div>
                      <div className="form-group required">
                        <label
                          htmlFor="input-payment-postcode"
                          className="control-label"
                        >
                          Post Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input-payment-postcode"
                          placeholder="Post Code"
                          defaultValue=""
                          name="postcode"
                        />
                      </div>
                      <div className="form-group required">
                        <label
                          htmlFor="input-payment-country"
                          className="control-label"
                        >
                          Country
                        </label>
                        <select
                          className="form-control"
                          id="input-payment-country"
                          name="country_id"
                        >
                          <option defaultValue="">
                            {" "}
                            --- Please Select ---{" "}
                          </option>
                          <option defaultValue="244">Aaland Islands</option>
                          <option defaultValue="1">Afghanistan</option>
                          <option defaultValue="2">Albania</option>
                          <option defaultValue="3">Algeria</option>
                          <option defaultValue="4">American Samoa</option>
                          <option defaultValue="5">Andorra</option>
                          <option defaultValue="6">Angola</option>
                          <option defaultValue="7">Anguilla</option>
                          <option defaultValue="8">Antarctica</option>
                          <option defaultValue="9">Antigua and Barbuda</option>
                          <option defaultValue="10">Argentina</option>
                          <option defaultValue="11">Armenia</option>
                          <option defaultValue="12">Aruba</option>
                          <option defaultValue="252">
                            Ascension Island (British)
                          </option>
                          <option defaultValue="13">Australia</option>
                          <option defaultValue="14">Austria</option>
                          <option defaultValue="15">Azerbaijan</option>
                          <option defaultValue="16">Bahamas</option>
                          <option defaultValue="17">Bahrain</option>
                        </select>
                      </div>
                      <div className="form-group required">
                        <label
                          htmlFor="input-payment-zone"
                          className="control-label"
                        >
                          Region / State
                        </label>
                        <select
                          className="form-control"
                          id="input-payment-zone"
                          name="zone_id"
                        >
                          <option defaultValue="">
                            {" "}
                            --- Please Select ---{" "}
                          </option>
                          <option defaultValue="3513">Aberdeen</option>
                          <option defaultValue="3514">Aberdeenshire</option>
                          <option defaultValue="3515">Anglesey</option>
                          <option defaultValue="3516">Angus</option>
                          <option defaultValue="3517">Argyll and Bute</option>
                          <option defaultValue="3518">Bedfordshire</option>
                          <option defaultValue="3519">Berkshire</option>
                          <option defaultValue="3520">Blaenau Gwent</option>
                          <option defaultValue="3521">Bridgend</option>
                          <option defaultValue="3522">Bristol</option>
                        </select>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            defaultChecked="checked"
                            defaultValue="1"
                            name="shipping_address"
                          />
                          My delivery and billing addresses are the same.
                        </label>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className="col-right col-sm-8">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="panel panel-default no-padding">
                      <div className="col-sm-6 checkout-shipping-methods">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <i className="fa fa-truck"> </i> Delivery Method
                          </h4>
                        </div>
                        <div className="panel-body ">
                          <p>
                            Please select the preferred shipping method to use
                            on this order.
                          </p>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                defaultValue="DeliveryMethod"
                                name="Free Shipping"
                              />
                              Free Shipping - $0.00
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                defaultChecked="checked"
                                name="Flat Shipping Rate"
                              />
                              Flat Shipping Rate - $7.50
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6  checkout-payment-methods">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <i className="fa fa-credit-card"> </i> Payment Method
                          </h4>
                        </div>
                        <div className="panel-body">
                          <p>
                            Please select the preferred payment method to use on
                            this order.
                          </p>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                name="Cash On Delivery"
                                defaultValue="PaymentMethod"
                              />
                              Cash On Delivery
                            </label>
                          </div>

                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                defaultChecked="checked"
                                name="Paypal"
                              />
                              Paypal
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <i className="fa fa-ticket"></i> Do you Have Link Coupon
                          or Voucher?
                        </h4>
                      </div>
                      <div className="panel-body row">
                        <div
                          className="col-sm-6"
                          style={{ marginBottom: "10px" }}
                        >
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="input-coupon"
                              placeholder="Enter your coupon here"
                              defaultValue=""
                              name="coupon"
                            />
                            <span className="input-group-btn">
                              <input
                                type="button"
                                className="btn btn-primary"
                                data-loading-text="Loading..."
                                id="button-coupon"
                                defaultValue="Apply Coupon"
                              />
                            </span>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="input-voucher"
                              placeholder="Enter your gift voucher code here"
                              defaultValue=""
                              name="voucher"
                            />
                            <span className="input-group-btn">
                              <input
                                type="submit"
                                className="btn btn-primary"
                                data-loading-text="Loading..."
                                id="button-voucher"
                                defaultValue="Apply Voucher"
                              />
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <i className="fa fa-shopping-cart"></i> Shopping cart
                        </h4>
                      </div>
                      <div className="panel-body">
                        <div className="table-responsive">
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
                                cart.map((data) => {
                                  return (
                                    <ShoppingList data={data} key={Math.random()} />
                                  )
                                })
                              }

                            </tbody>
                            <tfoot>
                              <tr>
                                <td className="text-right" colSpan="5">
                                  <strong>Sub-Total:</strong>
                                </td>
                                <td className="text-right">$93.73</td>
                              </tr>
                              <tr>
                                <td className="text-right" colSpan="5">
                                  <strong>Flat Shipping Rate:</strong>
                                </td>
                                <td className="text-right">$4.69.00</td>
                              </tr>
                              <tr>
                                <td className="text-right" colSpan="5">
                                  <strong>Eco Tax (-2.00):</strong>
                                </td>
                                <td className="text-right">$3.75.00</td>
                              </tr>
                              <tr>
                                <td className="text-right" colSpan="5">
                                  <strong>VAT (20%):</strong>
                                </td>
                                <td className="text-right">$19.68</td>
                              </tr>
                              <tr>
                                <td className="text-right" colSpan="5">
                                  <strong>Total:</strong>
                                </td>
                                <td className="text-right">$121.85</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <i className="fa fa-pencil"></i> Add Comments About
                          Your Order
                        </h4>
                      </div>
                      <div className="panel-body">
                        <textarea
                          rows="4"
                          className="form-control"
                          id="confirm_comment"
                          name="comments"
                        ></textarea>
                        <br />
                        <label
                          className="control-label"
                          htmlFor="confirm_agree"
                        >
                          <input
                            type="checkbox"
                            defaultChecked="checked"
                            defaultValue="1"
                            required=""
                            className="validate required"
                            id="confirm_agree"
                            name="confirm agree"
                          />
                          <span>
                            I have read and agree to the{" "}
                            <Link className="agree" to="#">
                              <b>Terms &amp; Conditions</b>
                            </Link>
                          </span>{" "}
                        </label>
                        <div className="buttons">
                          <div className="pull-right">
                            <input
                              type="button"
                              className="btn btn-primary"
                              id="button-confirm"
                              defaultValue="Confirm Order"
                            />
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
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
