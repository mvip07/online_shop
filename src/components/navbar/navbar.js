import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/cart";
import {
  Gb,
  Lb,
  Logo,
} from "../../export/exportImg/exportImg";

function Navbar(setSearch) {
  const [languageMenu, setLanguageMenu] = useState("none")
  const [currency, setCurrency] = useState("none")
  const [more, setMore] = useState("none")
  const [allCategories, setAllCategories] = useState("none")
  const [allCategoriesLeft, setAllCategoriesLeft] = useState(0)
  const [navbar, setNavbar] = useState("none")
  const [navbarLeft, setNavbarLeft] = useState(0)
  const [features, setFeatures] = useState("none")

  // style
  return (

    <header id="header" className="variantleft type_6">
      <div className="header-top compact-hidden">
        <div className="container">
          <div className="row" style={{ display: "flex" }}>
            <div className="header-top-left form-inline col-sm-5 col-xs-12 compact-hidden">
              <div className="form-group languages-block ">
                <form action="/" method="post" encType="multipart/form-data" id="bt-language">
                  <Link to="#" className="btn dropdown-toggle" data-toggle="dropdown">
                    <img src={Gb} alt="English" title="English" className="mr-1" />
                    <span className="mr-1">English</span>

                    {
                      languageMenu === "none" ?
                        <span className="caret mr-1" onClick={() => setLanguageMenu("block")}></span>
                        :
                        <span className="caret mr-1 bottom" onClick={() => setLanguageMenu("none")}></span>
                    }
                  </Link>
                  <ul className="dropdown-menu" style={{ display: `${languageMenu}` }}>
                    <li><Link to="/"><img className="image_flag" src={Gb} alt="English" title="English" /> English </Link></li>
                    <li> <Link to="/"> <img className="image_flag" src={Lb} alt="Arabic" title="Arabic" /> Arabic </Link> </li>
                  </ul>
                </form>
              </div>

              <div className="form-group currencies-block">
                <form action="/" method="post" id="currency">
                  <Link to="#" className="btn dropdown-toggle" data-toggle="dropdown">
                    <span className="mr-1">US Dollar</span>

                    {
                      currency === "none" ?
                        <span className="caret mr-1" onClick={() => setCurrency("block")}></span>
                        :
                        <span className="caret mr-1 bottom" onClick={() => setCurrency("none")}></span>
                    }
                  </Link>
                  <ul className="dropdown-menu" style={{ display: `${currency}` }}>
                    <li> <Link to="#">(€)&nbsp;Euro</Link></li>
                    <li> <Link to="#">(£)&nbsp;Pounds	</Link></li>
                    <li> <Link to="#">($)&nbsp;US Dollar	</Link></li>
                  </ul>
                </form>
              </div>
            </div>
            <div className="header-top-right  text-right  col-sm-7 col-xs-12 compact-hidden">
              <div className="currencies-block" style={{ marginTop: "5px" }}>
                <Link to="#" className="btn dropdown-toggle" data-toggle="dropdown">
                  <span className="mr-1">More</span>

                  {
                    more === "none" ?
                      <span className="caret mr-1" onClick={() => setMore("block")}></span>
                      :
                      <span className="caret mr-1 bottom" onClick={() => setMore("none")}></span>
                  }
                </Link>
                <div className="tabBlock" id="TabBlock-1" style={{ display: `${more}` }}>
                  <ul className="top-link list-inline" >
                    <li className="account"><Link to="/myAccount" className="top-link-account" title="My Account"> <i className="fa fa-user" ></i> My Account </Link></li>
                    <li className="wishlist"><Link to="/wishlist" className="top-link-wishlist" title="wishlist"><i className="fa fa-heart" ></i> My Wish List</Link></li>
                    <li className="checkout"><Link to="/checkout" className="top-link-checkout" title="Checkout"><i className="fa fa-check-square-o" ></i> Checkout</Link></li>
                    <li className="signin"><Link to="/login" className="top-link-checkout" title="login"><i className="fa fa-lock" ></i> Sign In</Link></li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="header-center">
        <div className="container">
          <div className="row">
            <div className="navbar-logo col-md-3 col-sm-12 col-xs-12">
              <Link to="/"><img src={Logo} title="Your Store" alt="Your Store" /></Link>
            </div>
            <div id="sosearchpro" className="col-md-5 col-sm-7 search-pro">
              <form method="GET" action="/">
                <div id="search0" className="search input-group">
                  <div className="select_category filter_type icon-select">
                    <select className="no-border" name="category_id">
                      <option value="0">All Categories</option>
                      <option value="78">Apparel</option>
                      <option value="77">Cables &amp; Connectors</option>
                      <option value="82">Cameras &amp; Photo</option>
                      <option value="80">Flashlights &amp; Lamps</option>
                      <option value="81">Mobile Accessories</option>
                      <option value="79">Video Games</option>
                      <option value="20">Jewelry &amp; Watches</option>
                      <option value="76">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earings</option>
                      <option value="26">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wedding Rings</option>
                      <option value="27">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Men Watches</option>
                    </select>
                  </div>

                  <input className="autosearch-input form-control" type="text" size="50" autoComplete="off" placeholder="Enter keywords to search..." name="search" />
                  <span className="input-group-btn">
                    <button type="submit" className="button-search btn btn-primary" name="submit_search"><i className="fa fa-search"></i></button>
                  </span>
                </div>
                <input type="hidden" name="route" value="product/search" />
              </form>
            </div>

            <div className="phone-contact col-md-2  hidden-md hidden-sm hidden-xs">
              <div className="inner-info">
                <strong>Call us Now:</strong><br />
                <span>Toll free:  0123-456-789</span>
              </div>
            </div>

            <Cart />
          </div>

        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="sidebar-menu col-md-3 col-sm-6 col-xs-12  ">
              <div className="responsive so-megamenu ">
                <div className="so-vertical-menu no-gutter compact-hidden">
                  <nav className="navbar-default">
                    <div className="container-megamenu vertical">
                      <div id="menuHeading">
                        <div className="megamenuToogle-wrapper">
                          <div className="megamenuToogle-pattern">
                            <div className="container" >


                              {
                                allCategories === "none" ?
                                  <div onClick={() => setAllCategories("block")}>
                                    <span></span>
                                    <span></span>
                                    <span></span>

                                  </div>
                                  :
                                  <span className="caret mr-1 bottom" onClick={() => setAllCategories("none")}></span>
                              }
                              All Categories

                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="navbar-header">
                        <button
                          type="button"
                          id="show-verticalmenu"
                          data-toggle="collapse"
                          className="navbar-toggle fa fa-list-alt"
                          onClick={() => {
                            setAllCategories("block");
                            setAllCategoriesLeft(280)
                          }}>

                        </button>
                        All Categories
                      </div>
                      <div className="vertical-wrapper" style={{ display: `${allCategories}`, left: `${allCategoriesLeft}px` }}>
                        <span
                          id="remove-verticalmenu"
                          className="fa fa-times"
                          onClick={() => {
                            setAllCategories("none");
                            setAllCategoriesLeft(0)
                          }}>

                        </span>
                        <div className="megamenu-pattern">
                          <div className="container">
                            <ul className="megamenu">
                              <li className="item-vertical style1 with-sub-menu hover">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">
                                  <img src="image/theme/icons/9.png" alt="icon" />
                                  <span>Automotive &amp; Motocrycle</span>
                                </Link>

                              </li>
                              <li className="item-vertical">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">
                                  <img src="image/theme/icons/10.png" alt="icon" />
                                  <span>Electronic</span>

                                </Link>
                              </li>
                              <li className="item-vertical with-sub-menu hover">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">
                                  <span className="label"></span>
                                  <img src="image/theme/icons/3.png" alt="icon" />
                                  <span>Sports &amp; Outdoors</span>
                                </Link>

                              </li>
                              <li className="item-vertical with-sub-menu hover">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">
                                  <img src="image/theme/icons/2.png" alt="icon" />
                                  <span>Health &amp; Beauty</span>
                                </Link>

                              </li>
                              <li className="item-vertical css-menu with-sub-menu hover">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">

                                  <img src="image/theme/icons/2.png" alt="icon" />
                                  <span>Smartphone &amp; Tablets</span>
                                </Link>

                              </li>
                              <li className="item-vertical">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">
                                  <img src="image/theme/icons/11.png" alt="icon" />
                                  <span>Flashlights &amp; Lamps</span>

                                </Link>
                              </li>
                              <li className="item-vertical">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">
                                  <img src="image/theme/icons/4.png" alt="icon" />
                                  <span>Camera &amp; Photo</span>
                                </Link>
                              </li>

                              <li className="item-vertical">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">
                                  <img src="image/theme/icons/7.png" alt="icon" />
                                  <span>Outdoor &amp; Traveling Supplies</span>
                                </Link>
                              </li>

                              <li className="item-vertical">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">
                                  <img src="image/theme/icons/8.png" alt="icon" />
                                  <span>Toys &amp; Hobbies </span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">
                                  <img src="image/theme/icons/12.png" alt="icon" />
                                  <span>Jewelry &amp; Watches</span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <p className="close-menu"></p>
                                <Link to="#" className="clearfix">
                                  <img src="image/theme/icons/13.png" alt="icon" />
                                  <span>Bags, Holiday Supplies</span>
                                </Link>
                              </li>
                              <li className="loadmore">
                                <i className="fa fa-plus-square-o"></i>
                                <span className="more-view">More Categories</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>

            </div>
            <div className="megamenu-hori col-md-9 col-sm-6 col-xs-12 ">
              <div className="responsive so-megamenu ">
                <nav className="navbar-default">
                  <div className=" container-megamenu  horizontal">
                    <div className="navbar-header">
                      <button
                        type="button"
                        id="show-megamenu"
                        data-toggle="collapse"
                        className="navbar-toggle"
                        onClick={() => {
                          setNavbar("block")
                          setNavbarLeft(280)
                        }}
                      >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      Navigation
                    </div>

                    <div className="megamenu-wrapper" style={{ display: `${navbar}`, left: `${navbarLeft}px` }}>
                      <span
                        id="remove-megamenu"
                        className="fa fa-times"
                        onClick={() => {
                          setNavbar("none")
                          setNavbarLeft(0)
                        }}
                      >

                      </span>
                      <div className="megamenu-pattern">
                        <div className="container">
                          <ul className="megamenu " data-transition="slide" data-animationtime="250">
                            <li className="home hover">
                              <Link to="/">Home</Link>

                            </li>
                            <li className="with-sub-menu hover">
                              <p className="close-menu"></p>
                              <Link to="#" className="clearfix">
                                <strong className="mr-1">Features</strong>
                                {

                                  features === "none" ?
                                    <span className="caret mr-1" onClick={() => setFeatures("block")}></span>
                                    :
                                    <span className="caret mr-1 bottom" onClick={() => setFeatures("none")}></span>

                                }
                              </Link>
                              <div className="sub-menu" style={{ width: "100%", right: "auto", display: `${features}` }}>
                                <div className="content" style={{ display: `${features}` }} >
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="column">
                                        <Link to="#" className="title-submenu">Listing pages</Link>
                                        <div>
                                          <ul className="row-list">
                                            <li><Link to="/category">Category</Link></li>
                                          </ul>

                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="column">
                                        <Link to="#" className="title-submenu">Shopping pages</Link>
                                        <div>
                                          <ul className="row-list">
                                            <li><Link to="/shoppingCartPage">Shopping Cart</Link></li>
                                            <li><Link to="/checkout">Checkout</Link></li>
                                            <li><Link to="/compare">Compare</Link></li>
                                            <li><Link to="/wishlist">Wishlist</Link></li>

                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="column">
                                        <Link to="#" className="title-submenu">My Account pages</Link>
                                        <div>
                                          <ul className="row-list">
                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/register">Register</Link></li>
                                            <li><Link to="/myAccount">My Account</Link></li>
                                            <li><Link to="/order-history">Order History</Link></li>
                                            <li><Link to="/order-information">Order Information</Link></li>
                                            <li><Link to="/return">Product Returns</Link></li>
                                            <li><Link to="/gift-voucher">Gift Voucher</Link></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="">
                              <p className="close-menu"></p>
                              <Link to="/blog" className="clearfix">
                                <strong>Blog</strong>
                                <span className="label"></span>
                              </Link>
                            </li>

                            <li className="">
                              <p className="close-menu"></p>
                              <Link to="/about" className="clearfix">
                                <strong>About US</strong>
                                <span className="label"></span>
                              </Link>
                            </li>

                            <li className="">
                              <p className="close-menu"></p>
                              <Link to="/contact" className="clearfix">
                                <strong>Contact</strong>
                                <span className="label"></span>
                              </Link>
                            </li>

                            <li className="">
                              <p className="close-menu"></p>
                              <Link to="/faq" className="clearfix">
                                <strong>Faq</strong>
                                <span className="label"></span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div >
    </header >
  );
}
export default Navbar 
