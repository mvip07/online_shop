import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import {
  Product12,
  Product13,
  Product14,
} from "../../export/exportImg/exportImg";
import CompareCard from "./compareCard";

function Compare() {
  //

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
            <a href="#">Product Comparison</a>
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
                <CompareCard />
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
