import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/product/product";
import { allProducts } from "../../utils/api";
import API from "../../utils/axios";

function Products() {
  const [products, setproduct] = useState([]);
  useEffect(() => {
    API.get(`${allProducts}`)
      .then((res) => {
        setproduct(res.data);
      }).catch(err => console.log(err))
  }, []);

  return (
    <div id="wrapper" className="wrapper-full banners-effect-7">
      <div className="main-container container">
        <div className="row">
          <div id="content" className="col-sm-12">
            <div className="module tab-slider titleLine">
              <h3 className="modtitle">New Products</h3>
              <div
                id="so_listing_tabs_2"
                className="so-listing-tabs first-load module"
              >
                <div className="ltabs-wrap">
                  <div
                    className="ltabs-tabs-container"
                    data-rtl="yes"
                    data-delay="300"
                    data-duration="600"
                    data-effect="starwars"
                    data-ajaxurl=""
                    data-type_source="0"
                    data-lg="4"
                    data-md="3"
                    data-sm="2"
                    data-xs="1"
                    data-margin="30"
                  >
                    <div className="ltabs-tabs-wrap"></div>
                  </div>
                  <div className="ltabs-items-container">
                    <div
                      className="ltabs-items ltabs-items-selected items-category-20 grid"
                      data-total="10"
                    >
                      <div className="ltabs-items-inner ltabs-slider">

                        {
                          products.map((product) => (
                            <Product product={product} key={Math.random()} />
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="module no-margin titleLine ">
              <h3 className="modtitle">COLLECTIONS</h3>
              <div className="modcontent clearfix">
                <div id="collections_block" className="clearfix  block">
                  <ul className="width6">
                    <li className="collect collection_0">
                      <div className="color_co">
                        <Link to="#">Furniture</Link>
                      </div>
                    </li>
                    <li className="collect collection_1">
                      <div className="color_co">
                        <Link to="#">Gift idea</Link>
                      </div>
                    </li>
                    <li className="collect collection_2">
                      <div className="color_co">
                        <Link to="#">Cool gadgets</Link>
                      </div>
                    </li>
                    <li className="collect collection_3">
                      <div className="color_co">
                        <Link to="#">Outdoor activities</Link>
                      </div>
                    </li>
                    <li className="collect collection_4">
                      <div className="color_co">
                        <Link to="#">Accessories for</Link>
                      </div>
                    </li>
                    <li className="collect collection_5">
                      <div className="color_co">
                        <Link to="#">Women world</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
