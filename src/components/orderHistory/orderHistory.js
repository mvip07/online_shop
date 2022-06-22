import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { Product4, Product5 } from "../../export/exportImg/exportImg";
import { Link } from "react-router-dom";

function OrderHistory() {
  return (
    <div id="wrapper" className="wrapper-full ">
      <Navbar />
      <div className="main-container container">
        <ul className="breadcrumb">
          <li>
            <Link to="/">
              <i className="fa fa-home"> </i>
            </Link>
          </li>
          <li>
            <Link to="#">Order History</Link>
          </li>
        </ul>

        <div className="row">
          <div className="col-sm-9" id="content">
            <h2 className="title">Order History</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <td className="text-center">Image</td>
                    <td className="text-left">Product Name</td>
                    <td className="text-center">Order ID</td>
                    <td className="text-center">Qty</td>
                    <td className="text-center">Status</td>
                    <td className="text-center">Date Added</td>
                    <td className="text-right">Total</td>
                    <td> </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <Link to="/product">
                        <img
                          width="85"
                          className="img-thumbnail"
                          title="Aspire Ultrabook Laptop"
                          alt="Aspire Ultrabook Laptop"
                          src={Product4}
                        />
                      </Link>
                    </td>
                    <td className="text-left">
                      <Link to="/product">Aspire Ultrabook Laptop</Link>
                    </td>
                    <td className="text-center">#214521</td>
                    <td className="text-center">1</td>
                    <td className="text-center">Shipped</td>
                    <td className="text-center">21/06/2016</td>
                    <td className="text-right">$228.00</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-info"
                        title=""
                        data-toggle="tooltip"
                        to="/order-information"
                        data-original-title="View"
                      >
                        <i className="fa fa-eye"> </i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <Link to="/product">
                        <img
                          width="85"
                          className="img-thumbnail"
                          title="Xitefun Causal Wear Fancy Shoes"
                          alt="Xitefun Causal Wear Fancy Shoes"
                          src={Product5}
                        />
                      </Link>
                    </td>
                    <td className="text-left">
                      <Link to="/product">Xitefun Causal Wear Fancy Shoes</Link>
                    </td>
                    <td className="text-center">#1565245</td>
                    <td className="text-center">1</td>
                    <td className="text-center">Shipped</td>
                    <td className="text-center">20/06/2016</td>
                    <td className="text-right">$133.20</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-info"
                        title=""
                        data-toggle="tooltip"
                        to="/order-information"
                        data-original-title="View"
                      >
                        <i className="fa fa-eye"> </i>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <aside className="col-sm-3 hidden-xs" id="column-right">
            <h2 className="subtitle">Account</h2>
            <div className="list-group">
              <ul className="list-item">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
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
                  <Link to="/wishlist">Wish List</Link>
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

export default OrderHistory;
