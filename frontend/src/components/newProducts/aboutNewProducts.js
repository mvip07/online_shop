function AboutNewProducts() {
  // onclick
  return (
    <div id="wrapper" className="wrapper-full banners-effect-7">
      <section className="so-spotlight1 ">
        <div className="container">
          <div className="row">
            <div
              id="yt_header_right"
              className="col-lg-offset-3 col-lg-9 col-md-12"
            >
              <div className="slider-container ">
                <div className="module first-block">
                  <div className="modcontent clearfix">
                    <div id="custom_popular_search" className="clearfix">
                      <h5 className="so-searchbox-popular-title pull-left">
                        Top Search:
                      </h5>
                      <div className="so-searchbox-keyword">
                        <ul className="list-inline">
                          <li>
                            &nbsp;<a href="#">Acer,</a>
                          </li>
                          <li>
                            <a href="#">APPLE,</a>
                          </li>
                          <li>
                            <a href="#">Black,</a>
                          </li>
                          <li>
                            <a href="#">Canon,</a>
                          </li>
                          <li>
                            <a href="#">Cogs,</a>
                          </li>
                          <li>
                            <a href="#">Confi,</a>
                          </li>
                          <li>
                            <a href="#">Kate,</a>
                          </li>
                          <li>
                            <a href="#">Lor,</a>
                          </li>
                          <li>
                            <a href="#">Product,</a>
                          </li>
                          <li>
                            <a href="#">Zolof The Rock And Roll Destroyer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="so-slideshow"
                  className="col-lg-8 col-md-8 col-sm-12 col-xs-12 two-block"
                >
                  <div className="module no-margin">
                    <div
                      className="yt-content-slider yt-content-slider--arrow1"
                      data-rtl="yes"
                      data-autoplay="no"
                      data-autoheight="no"
                      data-delay="4"
                      data-speed="0.6"
                      data-margin="0"
                      data-items_column0="1"
                      data-items_column1="1"
                      data-items_column2="1"
                      data-items_column3="1"
                      data-items_column4="1"
                      data-arrows="yes"
                      data-pagination="no"
                      data-lazyload="yes"
                      data-loop="no"
                      data-hoverpause="yes"
                    >
                      <div className="yt-content-slide">
                        <a href="#">
                          <img
                            src={Slider1}
                            alt="slider1"
                            className="img-responsive"
                          />
                        </a>
                      </div>
                      <div className="yt-content-slide">
                        <a href="#">
                          <img
                            src="image/demo/slider/slider-2.png"
                            alt="slider2"
                            className="img-responsive"
                          />
                        </a>
                      </div>
                      <div className="yt-content-slide">
                        <a href="#">
                          <img
                            src="image/demo/slider/slider-3.png"
                            alt="slider3"
                            className="img-responsive"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="loadeding"></div>
                  </div>
                </div>

                <div className="module col-md-4  hidden-sm hidden-xs three-block ">
                  <div className="modcontent clearfix">
                    <div className="htmlcontent-block">
                      <ul className="htmlcontent-home">
                        <li>
                          <div className="banners">
                            <div>
                              <a href="#">
                                <img
                                  src="image/demo/cms/banner1.jpg"
                                  alt="banner1"
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="banners">
                            <div>
                              <a href="#">
                                <img
                                  src="image/demo/cms/banner2.jpg"
                                  alt="banner1"
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="banners">
                            <div>
                              <a href="#">
                                <img
                                  src="image/demo/cms/banner3.jpg"
                                  alt="banner1"
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="module hidden-xs col-sm-12 four-block">
                  <div className="modcontent clearfix">
                    <div className="policy-detail">
                      <div className="banner-policy">
                        <div className="policy policy1">
                          <a href="#">
                            <span className="ico-policy">&nbsp;</span> 90 day{" "}
                            <br /> money back
                          </a>
                        </div>
                        <div className="policy policy2">
                          <a href="#">
                            <span className="ico-policy">&nbsp;</span> In-store
                            exchange
                          </a>
                        </div>
                        <div className="policy policy3">
                          <a href="#">
                            <span className="ico-policy">&nbsp;</span> lowest
                            price guarantee
                          </a>
                        </div>
                        <div className="policy policy4">
                          <a href="#">
                            <span className="ico-policy">&nbsp;</span> shopping
                            guarantee
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutNewProducts;
