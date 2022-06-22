import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function MyAccount() {
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
            <Link to="#">Account</Link>
          </li>
          <li>
            <Link to="#">My Account</Link>
          </li>
        </ul>

        <div className="row">
          <div className="col-sm-9" id="content">
            <h2 className="title">My Account</h2>
            <p className="lead">
              Hello, <strong>Jhone Cary!</strong> - To update your account
              information.
            </p>
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <fieldset id="personal-details">
                    <legend>Personal Details</legend>
                    <div className="form-group required">
                      <label
                        htmlFor="input-firstname"
                        className="control-label"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-firstname"
                        placeholder="First Name"
                        defaultValue=""
                        name="firstname"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-lastname" className="control-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-lastname"
                        placeholder="Last Name"
                        defaultValue=""
                        name="lastname"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-email" className="control-label">
                        E-Mail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input-email"
                        placeholder="E-Mail"
                        defaultValue=""
                        name="email"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-telephone" className="control-label">
                        Telephone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="input-telephone"
                        placeholder="Telephone"
                        defaultValue=""
                        name="telephone"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="input-fax" className="control-label">
                        Fax
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-fax"
                        placeholder="Fax"
                        defaultValue=""
                        name="fax"
                      />
                    </div>
                  </fieldset>
                  <br />
                </div>
                <div className="col-sm-6">
                  <fieldset>
                    <legend>Change Password</legend>
                    <div className="form-group required">
                      <label htmlFor="input-password" className="control-label">
                        Old Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="input-password"
                        placeholder="Old Password"
                        defaultValue=""
                        name="old-password"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-password" className="control-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="input-password"
                        placeholder="New Password"
                        defaultValue=""
                        name="new-password"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-confirm" className="control-label">
                        New Password Confirm
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="input-confirm"
                        placeholder="New Password Confirm"
                        defaultValue=""
                        name="new-confirm"
                      />
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend>Newsletter</legend>
                    <div className="form-group">
                      <label className="col-md-2 col-sm-3 col-xs-3 control-label">
                        Subscribe
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-9">
                        <label className="radio-inline">
                          <input
                            type="radio"
                            defaultValue="1"
                            name="newsletter"
                          />{" "}
                          Yes
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            htmlFor="checked"
                            defaultValue="0"
                            name="newsletter"
                          />{" "}
                          No
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <fieldset id="address">
                    <legend>Payment Address</legend>
                    <div className="form-group">
                      <label htmlFor="input-company" className="control-label">
                        Company
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="input-company"
                        placeholder="Company"
                        defaultValue=""
                        name="company"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-address-1" className="control-label">
                        Address 1
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-address-1"
                        placeholder="Address 1"
                        defaultValue=""
                        name="address_1"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-city" className="control-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-city"
                        placeholder="City"
                        defaultValue=""
                        name="city"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-postcode" className="control-label">
                        Post Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-postcode"
                        placeholder="Post Code"
                        defaultValue=""
                        name="postcode"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-country" className="control-label">
                        Country
                      </label>
                      <select
                        className="form-control"
                        id="input-country"
                        name="country_id"
                      >
                        <option defaultValue=""> --- Please Select --- </option>
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
                      </select>
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-zone" className="control-label">
                        Region / State
                      </label>
                      <select
                        className="form-control"
                        id="input-zone"
                        name="zone_id"
                      >
                        <option defaultValue=""> --- Please Select --- </option>
                        <option defaultValue="3513">Aberdeen</option>
                        <option defaultValue="3514">Aberdeenshire</option>
                        <option defaultValue="3515">Anglesey</option>
                        <option defaultValue="3516">Angus</option>
                        <option defaultValue="3517">Argyll and Bute</option>
                        <option defaultValue="3518">Bedfordshire</option>
                        <option defaultValue="3519">Berkshire</option>
                      </select>
                    </div>
                  </fieldset>
                </div>
                <div className="col-sm-6">
                  <fieldset id="shipping-address">
                    <legend>Shipping Address</legend>
                    <div className="form-group">
                      <label htmlFor="input-company" className="control-label">
                        Company
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-company"
                        placeholder="Company"
                        defaultValue=""
                        name="company"
                      />
                    </div>
                    <div className="form-group required">
                      <label
                        htmlFor="input-address-1"
                        className="control-label"
                      >
                        Address 1
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-address-1"
                        placeholder="Address 1"
                        defaultValue=""
                        name="address_1"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-city" className="control-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-city"
                        placeholder="City"
                        defaultValue=""
                        name="city"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-postcode" className="control-label">
                        Post Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-postcode"
                        placeholder="Post Code"
                        defaultValue=""
                        name="postcode"
                      />
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-country" className="control-label">
                        Country
                      </label>
                      <select
                        className="form-control"
                        id="input-country"
                        name="country_id"
                      >
                        <option defaultValue=""> --- Please Select --- </option>
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
                      </select>
                    </div>
                    <div className="form-group required">
                      <label htmlFor="input-zone" className="control-label">
                        Region / State
                      </label>
                      <select
                        className="form-control"
                        id="input-zone"
                        name="zone_id"
                      >
                        <option defaultValue=""> --- Please Select --- </option>
                        <option defaultValue="3513">Aberdeen</option>
                        <option defaultValue="3514">Aberdeenshire</option>
                        <option defaultValue="3515">Anglesey</option>
                        <option defaultValue="3516">Angus</option>
                        <option defaultValue="3517">Argyll and Bute</option>
                        <option defaultValue="3518">Bedfordshire</option>
                        <option defaultValue="3519">Berkshire</option>
                      </select>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="buttons clearfix">
                <div className="pull-right">
                  <input
                    type="submit"
                    className="btn btn-md btn-primary"
                    defaultValue="Save Changes"
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
                  <Link to="login.html">Login</Link>
                </li>
                <li>
                  <Link to="register.html">Register</Link>
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
                  <Link to="wishlist.html">Wish List</Link>
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
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyAccount;
