import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import WishlistCard from "../../components/wishlist/wishlistCard";

function Wishlist() {
  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem("onlineShopLike")) || []
  );

  useEffect(() => {
    setLike(JSON.parse(localStorage.getItem("onlineShopLike")) || [])
  }, [])

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
            <Link to="#">My Wish List</Link>
          </li>
        </ul>

        <div className="row">
          <div id="content" className="col-sm-9">
            <h2 className="title">My Wish List</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <td className="text-center">Image</td>
                    <td className="text-left">Product Name</td>
                    <td className="text-left">Model</td>
                    <td className="text-right">Stock</td>
                    <td className="text-right">Unit Price</td>
                    <td className="text-right">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    like.map((data) => (
                      <WishlistCard data={data} key={Math.random()} />
                    ))
                  }
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

export default Wishlist;
