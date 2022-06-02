import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

function OrderInformation() {
  // style
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
            <a href="#">Order Infomation</a>
          </li>
        </ul>

        <div className="row">
          <div id="content" className="col-sm-9">
            <h2 className="title">Order Information</h2>

            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <td colSpan="2" className="text-left">
                    Order Details
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "50%" }} className="text-left">
                    {" "}
                    <b>Order ID:</b> #214521
                    <br />
                    <b>Date Added:</b> 20/06/2016
                  </td>
                  <td style={{ width: "50%" }} className="text-left">
                    {" "}
                    <b>Payment Method:</b> Cash On Delivery
                    <br />
                    <b>Shipping Method:</b> Flat Shipping Rate{" "}
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <td
                    style={{ width: "50%", verticalAlign: "top" }}
                    className="text-left"
                  >
                    Payment Address
                  </td>
                  <td
                    style={{ width: "50%", verticalAlign: "top" }}
                    className="text-left"
                  >
                    Shipping Address
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left">
                    Jhone Cary
                    <br />
                    Central Square
                    <br />
                    22 Hoi Wing Road
                    <br />
                    New Delhi
                    <br />
                    India
                  </td>
                  <td className="text-left">
                    Jhone Cary
                    <br />
                    Central Square
                    <br />
                    22 Hoi Wing Road
                    <br />
                    New Delhi
                    <br />
                    India
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <td className="text-left">Product Name</td>
                    <td className="text-left">Model</td>
                    <td className="text-right">Quantity</td>
                    <td className="text-right">Price</td>
                    <td className="text-right">Total</td>
                    <td style={{ width: "20px" }}></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">iPhone5 </td>
                    <td className="text-left">product 11</td>
                    <td className="text-right">1</td>
                    <td className="text-right">$123.20</td>
                    <td className="text-right">$123.20</td>
                    <td style={{ whiteSpace: "nowrap" }} className="text-right">
                      {" "}
                      <a
                        className="btn btn-primary"
                        title=""
                        data-toggle="tooltip"
                        href="#"
                        data-original-title="Reorder"
                      >
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                      <a
                        className="btn btn-danger"
                        title=""
                        data-toggle="tooltip"
                        href="return.html"
                        data-original-title="Return"
                      >
                        <i className="fa fa-reply"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3"></td>
                    <td className="text-right">
                      <b>Sub-Total</b>
                    </td>
                    <td className="text-right">$101.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="3"></td>
                    <td className="text-right">
                      <b>Flat Shipping Rate</b>
                    </td>
                    <td className="text-right">$5.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="3"></td>
                    <td className="text-right">
                      <b>Eco Tax (-2.00)</b>
                    </td>
                    <td className="text-right">$6.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="3"></td>
                    <td className="text-right">
                      <b>VAT (20%)</b>
                    </td>
                    <td className="text-right">$21.20</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="3"></td>
                    <td className="text-right">
                      <b>Total</b>
                    </td>
                    <td className="text-right">$133.20</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <h3>Order History</h3>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <td className="text-left">Date Added</td>
                  <td className="text-left">Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left">20/06/2016</td>
                  <td className="text-left">Processing</td>
                </tr>
                <tr>
                  <td className="text-left">21/06/2016</td>
                  <td className="text-left">Shipped</td>
                </tr>
                <tr>
                  <td className="text-left">24/06/2016</td>
                  <td className="text-left">Complete</td>
                </tr>
              </tbody>
            </table>
            <div className="buttons clearfix">
              <div className="pull-right">
                <a className="btn btn-primary" href="#">
                  Continue
                </a>
              </div>
            </div>
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
                  <a href="/wishlist">Wish List</a>
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

export default OrderInformation;
