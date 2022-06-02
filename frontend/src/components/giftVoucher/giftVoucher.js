import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function GiftVoucher() {
  // defaultValue
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
            <a href="#">Gift Voucher</a>
          </li>
        </ul>

        <div className="row">
          <div id="content" className="col-sm-9">
            <h2 className="title">Purchase a Gift Card</h2>
            <p>
              This gift card will be emailed to the recipient after your order
              has been paid for.
            </p>

            <form className="form-horizontal">
              <div className="form-group required">
                <label
                  htmlFor="input-to-name"
                  className="col-sm-2 control-label"
                >
                  Recipient's Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="input-to-name"
                    defaultValue=""
                    name="to_name"
                  />
                </div>
              </div>
              <div className="form-group required">
                <label
                  htmlFor="input-to-email"
                  className="col-sm-2 control-label"
                >
                  Recipient's e-mail
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="input-to-email"
                    defaultValue=""
                    name="to_email"
                  />
                </div>
              </div>
              <div className="form-group required">
                <label
                  htmlFor="input-from-name"
                  className="col-sm-2 control-label"
                >
                  Your Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="input-from-name"
                    defaultValue=""
                    name="from_name"
                  />
                </div>
              </div>
              <div className="form-group required">
                <label
                  htmlFor="input-from-email"
                  className="col-sm-2 control-label"
                >
                  Your e-mail
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="input-from-email"
                    defaultValue=""
                    name="from_email"
                  />
                </div>
              </div>
              <div className="form-group required">
                <label className="col-sm-2 control-label">
                  Gift Certificate Theme
                </label>
                <div className="col-sm-10">
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        defaultValue="8"
                        name="voucher_theme_id"
                      />{" "}
                      General
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        defaultValue="7"
                        name="voucher_theme_id"
                      />{" "}
                      Birthday
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        defaultValue="6"
                        name="voucher_theme_id"
                      />{" "}
                      Christmas
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="input-message"
                  className="col-sm-2 control-label"
                >
                  <span
                    title=""
                    data-toggle="tooltip"
                    data-original-title="Optional"
                  >
                    Message
                  </span>
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="input-message"
                    rows="5"
                    cols="40"
                    name="message"
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="input-amount"
                  className="col-sm-2 control-label"
                >
                  <span
                    title=""
                    data-toggle="tooltip"
                    data-original-title="Card value can range from between $10.00 and $1,000.00"
                  >
                    Amount
                  </span>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    size="5"
                    className="form-control"
                    id="input-amount"
                    defaultValue="10"
                    name="amount"
                  />
                </div>
              </div>
              <div className="buttons clearfix">
                <div className="pull-right">
                  I understand that gift certificates are non-refundable.
                  <input type="checkbox" defaultValue="1" name="agree" /> &nbsp;
                  <input
                    type="submit"
                    className="btn btn-primary"
                    defaultValue="Continue"
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
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
                <li>
                  <a href="#">Forgotten Password</a>
                </li>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Address Books</a>
                </li>
                <li>
                  <a href="wishlist.html">Wish List</a>
                </li>
                <li>
                  <a href="#">Order History</a>
                </li>
                <li>
                  <a href="#">Downloads</a>
                </li>
                <li>
                  <a href="#">Reward Points</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Transactions</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Recurring payments</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GiftVoucher;
