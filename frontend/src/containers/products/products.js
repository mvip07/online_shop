import Product from "../../components/product/product";

function Products({ product, searchDefaultValue }) {
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
                        <Product product={product} searchDefaultValue={searchDefaultValue} />
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
                        <a href="#">Furniture</a>
                      </div>
                    </li>
                    <li className="collect collection_1">
                      <div className="color_co">
                        <a href="#">Gift idea</a>
                      </div>
                    </li>
                    <li className="collect collection_2">
                      <div className="color_co">
                        <a href="#">Cool gadgets</a>
                      </div>
                    </li>
                    <li className="collect collection_3">
                      <div className="color_co">
                        <a href="#">Outdoor activities</a>
                      </div>
                    </li>
                    <li className="collect collection_4">
                      <div className="color_co">
                        <a href="#">Accessories for</a>
                      </div>
                    </li>
                    <li className="collect collection_5">
                      <div className="color_co">
                        <a href="#">Women world</a>
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
  );
}

export default Products;
