import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { Product4, Product5 } from "../../export/exportImg/exportImg";

function OrderHistory() {
  return (
    <div id="wrapper" className="wrapper-full ">
      <Navbar />
      <div className="main-container container">
        <ul className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-home"> </i>
            </a>
          </li>
          <li>
            <a href="#">Order History</a>
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
                      <a href="/product">
                        <img
                          width="85"
                          className="img-thumbnail"
                          title="Aspire Ultrabook Laptop"
                          alt="Aspire Ultrabook Laptop"
                          src={Product4}
                        />
                      </a>
                    </td>
                    <td className="text-left">
                      <a href="/product">Aspire Ultrabook Laptop</a>
                    </td>
                    <td className="text-center">#214521</td>
                    <td className="text-center">1</td>
                    <td className="text-center">Shipped</td>
                    <td className="text-center">21/06/2016</td>
                    <td className="text-right">$228.00</td>
                    <td className="text-center">
                      <a
                        className="btn btn-info"
                        title=""
                        data-toggle="tooltip"
                        href="/order-information"
                        data-original-title="View"
                      >
                        <i className="fa fa-eye"> </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <a href="/product">
                        <img
                          width="85"
                          className="img-thumbnail"
                          title="Xitefun Causal Wear Fancy Shoes"
                          alt="Xitefun Causal Wear Fancy Shoes"
                          src={Product5}
                        />
                      </a>
                    </td>
                    <td className="text-left">
                      <a href="/product">Xitefun Causal Wear Fancy Shoes</a>
                    </td>
                    <td className="text-center">#1565245</td>
                    <td className="text-center">1</td>
                    <td className="text-center">Shipped</td>
                    <td className="text-center">20/06/2016</td>
                    <td className="text-right">$133.20</td>
                    <td className="text-center">
                      <a
                        className="btn btn-info"
                        title=""
                        data-toggle="tooltip"
                        href="/order-information"
                        data-original-title="View"
                      >
                        <i className="fa fa-eye"> </i>
                      </a>
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
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/register">Register</a>
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

export default OrderHistory;
