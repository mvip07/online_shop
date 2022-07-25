import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

function ProductReturn() {
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
            <Link to="#">Return</Link>
          </li>
        </ul>

        <div className="row">
          <div id="content" className="col-sm-9">
            <h2 className="title">Product Returns</h2>
            <p>Please complete the form below to request product returns.</p>

            <form className="form-horizontal">
              <fieldset>
                <legend>Order Information</legend>
                <div className="form-group required">
                  <label
                    htmlFor="input-firstname"
                    className="col-sm-2 control-label"
                  >
                    First Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="input-firstname"
                      placeholder="First Name"
                      defaultValue=""
                      name="firstname"
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label
                    htmlFor="input-lastname"
                    className="col-sm-2 control-label"
                  >
                    Last Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="input-lastname"
                      placeholder="Last Name"
                      defaultValue=""
                      name="lastname"
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label
                    htmlFor="input-email"
                    className="col-sm-2 control-label"
                  >
                    E-Mail
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="input-email"
                      placeholder="E-Mail"
                      defaultValue=""
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label
                    htmlFor="input-telephone"
                    className="col-sm-2 control-label"
                  >
                    Telephone
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="input-telephone"
                      placeholder="Telephone"
                      defaultValue=""
                      name="telephone"
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label
                    htmlFor="input-order-id"
                    className="col-sm-2 control-label"
                  >
                    Order ID
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="input-order-id"
                      placeholder="Order ID"
                      defaultValue=""
                      name="order_id"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="input-date-ordered"
                    className="col-sm-2 control-label"
                  >
                    Order Date
                  </label>
                  <div className="col-sm-3">
                    <div className="input-group date">
                      <input
                        type="text"
                        className="form-control"
                        id="input-date-ordered"
                        data-date-format="YYYY-MM-DD"
                        placeholder="Order Date"
                        defaultValue=""
                        name="date_ordered"
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button">
                          <i className="fa fa-calendar"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Product Information</legend>
                <div className="form-group required">
                  <label
                    htmlFor="input-product"
                    className="col-sm-2 control-label"
                  >
                    Product Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="input-product"
                      placeholder="Product Name"
                      defaultValue=""
                      name="product"
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label
                    htmlFor="input-model"
                    className="col-sm-2 control-label"
                  >
                    Product Code
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="input-model"
                      placeholder="Product Code"
                      defaultValue=""
                      name="model"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="input-quantity"
                    className="col-sm-2 control-label"
                  >
                    Quantity
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="input-quantity"
                      placeholder="Quantity"
                      defaultValue="1"
                      name="quantity"
                    />
                  </div>
                </div>
                <div className="form-group required">
                  <label className="col-sm-2 control-label">
                    Reason for Return
                  </label>
                  <div className="col-sm-10">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          defaultValue="1"
                          name="return_reason_id"
                        />{" "}
                        Dead On Arrival
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          defaultValue="3"
                          name="return_reason_id"
                        />{" "}
                        Order Error
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          defaultValue="2"
                          name="return_reason_id"
                        />{" "}
                        Received Wrong Item
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          defaultValue="5"
                          name="return_reason_id"
                        />{" "}
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group required">
                  <label className="col-sm-2 control-label">
                    Product is opened
                  </label>
                  <div className="col-sm-10">
                    <label className="radio-inline">
                      <input type="radio" defaultValue="1" name="opened" /> Yes
                    </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        defaultChecked="for"
                        defaultValue="0"
                        name="opened"
                      />{" "}
                      No
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="input-comment"
                    className="col-sm-2 control-label"
                  >
                    Other details
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      id="input-comment"
                      placeholder="Other details"
                      rows="10"
                      name="comment"
                    ></textarea>
                  </div>
                </div>
              </fieldset>
              <div className="buttons clearfix">
                <div className="pull-left">
                  <Link className="btn btn-default buttonGray" to="">
                    Back
                  </Link>
                </div>
                <div className="pull-right">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    defaultValue="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
          <aside className="col-sm-3 hidden-xs" id="column-right">
            <h2 className="subtitle">Account</h2>
            <div className="list-group">
              <ul className="list-item">
                <li>
                  <Link to="#">Login</Link>
                </li>
                <li>
                  <Link to="#">Register</Link>
                </li>
                <li>
                  <Link to="#">Forgotten Password</Link>
                </li>
                <li>
                  <Link to="#">My Account</Link>
                </li>
                <li>
                  <Link to="#">Address Books</Link>
                </li>
                <li>
                  <Link to="#">Wish List</Link>
                </li>
                <li>
                  <Link to="#">Order History</Link>
                </li>
                <li>
                  <Link to="#">Downloads</Link>
                </li>
                <li>
                  <Link to="#">Reward Points</Link>
                </li>
                <li>
                  <Link to="#">Returns</Link>
                </li>
                <li>
                  <Link to="#">Transactions</Link>
                </li>
                <li>
                  <Link to="#">Newsletter</Link>
                </li>
                <li>
                  <Link to="#">Recurring payments</Link>
                </li>
              </ul>
            </div>{" "}
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductReturn;
