import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CompareCard from "../../components/compare/compareCard";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

function Compare() {
  const [compare, setCompare] = useState(
    []
  );

  useEffect(() => {
    setCompare(JSON.parse(localStorage.getItem("onlineShopComparison")) || [])
  }, [])
  return (
    <div id="wrapper" className="wrapper-full ">
      <Navbar />
      <div className="main-container container">
        <ul className="breadcrumb">
          <li>
            <Link to="#">
              <i className="fa fa-home"> </i>
            </Link>
          </li>
          <li>
            <Link to="#">Product Comparison</Link>
          </li>
        </ul>

        <div className="row">
          <div id="content" className="col-sm-12">
            <h2 className="title">Product Comparison</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <td colSpan="4">
                      <strong>Product Details</strong>
                    </td>
                  </tr>
                </thead>
                {
                  compare.map((data) => (
                    <CompareCard data={data} key={Math.random()} />
                  ))
                }
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Compare;
