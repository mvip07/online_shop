import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../cart/cart";
import {
  Gb,
  Lb,
  Logo,
  Icons2,
  Icons4,
  Icons7,
  Icons10,
  Icons12,
  Icons13,
  Icons15,
  Icons17,
  Icons19,
  Icons20,
  Icons28,
} from "../../export/exportImg/exportImg";

function Navbar(setSearch) {
  const navigate = useNavigate()
  const bag = JSON.parse(localStorage.getItem("onlineShopCart"));
  const [searchDefaultValue, setSearchDefaultValue] = useState("");
  const [open, setOpen] = useState("none")
  const [menuOpen, setMenuOpen] = useState("none")
  const [menuOpenLeft, setMenuOpenLeft] = useState(0)
  const [dropdownLague, setDropdownLague] = useState("none")
  const [dropdownCredit, setDropdownCredit] = useState("none")
  const [myAccount, setMyAccount] = useState("none")
  const [navigatorOpen, setNavigatorOpen] = useState(0)
  const [moreOpen, setMoreOpen] = useState("none")
  return (
    <header id="header" className=" variantleft type_1">
      <div className="header-top compact-hidden">
        <div className="container">
          <div className="row">
            <div className="header-top-left form-inline col-sm-6 col-xs-12 compact-hidden">
              <div className="form-group languages-block ">
                <form id="bt-language">
                  <Link to="#"
                    className="btn btn-xs dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img src={Gb} alt="English" title="English" />
                    <span className="mr-1">English</span>
                    {
                      dropdownLague === "none" ?
                        <span className="fa fa-angle-down mr-1" onClick={() => setDropdownLague("block")}> </span>
                        :
                        <span className="fa fa-angle-up mr-1" onClick={() => setDropdownLague("none")}>  </span>
                    }

                  </Link>
                  <ul className="dropdown-menu" style={{ display: `${dropdownLague}` }}>
                    <li>
                      <Link to="/">
                        <img
                          className="image_flag "
                          src={Lb}
                          alt="English"
                          title="English"
                        />
                        <span className="mr-1">English</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img
                          className="image_flag"
                          src={Lb}
                          alt="Russia"
                          title="Russia"
                        />
                        <span className="mr-1">Russia</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img
                          className="image_flag"
                          src={Gb}
                          alt="Arabic"
                          title="Arabic"
                        />
                        <span className="mr-1">Arabic</span>
                      </Link>
                    </li>
                  </ul>
                </form>
              </div>
              {" "}
              <div className="form-group currencies-block">
                <form id="currency">
                  <Link
                    to="/"
                    className="btn btn-xs dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span className="icon icon-credit "> </span> US Dollar
                    {
                      dropdownCredit === "none" ?
                        <span className="fa fa-angle-down mr-1" onClick={() => setDropdownCredit("block")}> </span>
                        :
                        <span className="fa fa-angle-up mr-1" onClick={() => setDropdownCredit("none")}>  </span>

                    }
                  </Link>
                  <ul className="dropdown-menu" style={{ display: `${dropdownCredit}` }}>
                    <li>
                      <Link to="#">(€)&nbsp;Euro</Link>
                    </li>
                    <li>
                      <Link to="#">(£)&nbsp;Rubl </Link>
                    </li>
                    <li>
                      <Link to="#">($)&nbsp;US Dollar </Link>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className="header-top-right collapsed-block text-right  col-sm-6 col-xs-12 compact-hidden">
              <h5 className="tabBlockTitle visible-xs">
                More
                <Link to="/" className="expander" >
                  {
                    moreOpen === "none" ?
                      <span className="fa arrow-circle fa-chevron-circle-down mr-1" onClick={() => setMoreOpen("block")}> </span>
                      :
                      <span className="fa arrow-circle fa-chevron-circle-up mr-1" onClick={() => setMoreOpen("none")}>  </span>

                  }
                </Link>
              </h5>
              <div className="tabBlock" id="TabBlock-1" style={{ display: `${moreOpen}` }}>
                <ul className="top-link list-inline">
                  <li className="account">
                    <Link
                      to="#"
                      title="My Account"
                    >
                      <Link to="/myAccount" style={{ color: "#fff", padding: "0" }}>My Account </Link>
                      {
                        myAccount === "none" ?
                          <span className="fa arrow-circle fa-chevron-circle-down mr-1" onClick={() => setMyAccount("block")}> </span>
                          :
                          <span className="fa arrow-circle fa-chevron-circle-up mr-1" onClick={() => setMyAccount("none")}>  </span>

                      }
                    </Link>
                    <ul className="dropdown-menu " style={{ display: `${myAccount}` }}>
                      <li>
                        <Link to="/register ">
                          <i className="fa fa-user"> </i> Register
                        </Link>
                      </li>
                      <li>
                        <Link to="/login">
                          <i className="fa fa-pencil-square-o"> </i> Login
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="wishlist">
                    <Link
                      to="/wishlist"
                      id="wishlist-total"
                      className="top-link-wishlist"
                      title="Wish List (2)"
                    >
                      <span>Wish List</span>
                    </Link>
                  </li>
                  <li className="checkout">
                    <Link
                      to="/checkout"
                      className="top-link-checkout"
                      title="Checkout"
                    >
                      <span>Checkout</span>
                    </Link>
                  </li>
                  <li className="login">
                    <Link to="/shoppingCartPage" title="Shopping Cart">
                      <span>Shopping Cart</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-center left">
        <div className="container">
          <div className="row">
            <div className="navbar-logo col-md-3 col-sm-12 col-xs-12">
              <Link to="/">
                <img src={Logo} title="Your Store" alt="Your Store" />
              </Link>
            </div>

            <div id="sosearchpro" className="col-sm-7 search-pro">
              <form method="GET" action="/">
                <div id="search0" className="search input-group">
                  <div className="select_category filter_type icon-select">
                    <select
                      className="no-border"
                      name="category_id"
                      onChange={({ target }) => {

                        setSearchDefaultValue(target.value)
                      }
                      }
                    >
                      <option defaultValue="">All Categories</option>
                      <option defaultValue="Apparel">Apparel</option>
                      <option defaultValue="Cables">
                        Cables
                      </option>
                      <option defaultValue="Cameras">
                        Cameras
                      </option>
                      <option defaultValue="Flashlights &amp; Lamps">
                        Flashlights &amp; Lamps
                      </option>
                      <option defaultValue="Jewelry">
                        Jewelry
                      </option>
                      <option defaultValue="Watches">
                        Watches
                      </option>
                      <option defaultValue="Earings ">Earings</option>
                      <option defaultValue="Notebook Computer">
                        Notebook Computer
                      </option>
                      <option defaultValue="Tablet">
                        Tablet
                      </option>
                      <option defaultValue="Bags">
                        Bags
                      </option>
                      <option defaultValue="Headphones">
                        Headphones
                      </option>
                    </select>
                  </div>
                  <input
                    className="autosearch-input form-control"
                    type="text"
                    size="100"
                    placeholder="Search"
                    name="search"
                    defaultValue={searchDefaultValue}
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      className="button-search btn btn-primary"
                      name="submit_search"
                    >
                      <i className="fa fa-search"> </i>
                    </button>
                  </span>
                </div>
                <input
                  type="hidden"
                  name="route"
                  defaultValue="product/search"
                />
              </form>
            </div>

            <Cart bag={bag} />
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="sidebar-menu col-md-3 col-sm-6 col-xs-12 ">
              <div className="responsive so-megamenu ">
                <div className="so-vertical-menu no-gutter compact-hidden">
                  <nav className="navbar-default">
                    <div className="container-megamenu vertical open">
                      <div id="menuHeading">
                        <div className="megamenuToogle-wrapper">
                          <div className="megamenuToogle-pattern">
                            <div className="container">

                              {
                                menuOpen === "block" ?
                                  ""
                                  :
                                  <div onClick={() => setMenuOpen("block")}>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                  </div>
                              }

                              {
                                menuOpen === "block" ? <i className="fa pull-right arrow-circle fa-chevron-circle-up" onClick={() => setMenuOpen("none")}>  {" "}
                                </i> : ""
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
                            setMenuOpenLeft(280);
                            setMenuOpen("block");
                          }}

                        >
                          {" "}
                        </button>
                        All Categories
                      </div>
                      <div className="vertical-wrapper" style={{ display: `${menuOpen}`, left: `${menuOpenLeft}px` }}>
                        <span
                          id="remove-verticalmenu"
                          className="fa fa-times"
                          onClick={() => {
                            setMenuOpenLeft(0);
                            setMenuOpen("none");
                          }}>
                          {" "}
                        </span>
                        <div className="megamenu-pattern">
                          <div className="container">
                            <ul className="megamenu">
                              <li className="item-vertical">
                                <Link to="/" className="clearfix">
                                  <img src={Icons15} alt="icon" />
                                  <span>Automotive &amp; Motocrycle</span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="/" className="clearfix">
                                  <img src={Icons10} alt="icon" />
                                  <span>Electronic</span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="#" className="clearfix">
                                  <span className="label"></span>
                                  <img src={Icons17} alt="icon" />
                                  <span>Sports &amp; Outdoors</span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="#" className="clearfix">
                                  <img src={Icons4} alt="icon" />
                                  <span>Health &amp; Beauty</span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="#" className="clearfix">
                                  <img src={Icons2} alt="icon" />
                                  <span>Smartphone &amp; Tablets</span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="#" className="clearfix">
                                  <img src={Icons13} alt="icon" />
                                  <span>Flashlights &amp; Lamps</span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="#" className="clearfix">
                                  <img src={Icons20} alt="icon" />
                                  <span>Camera &amp; Photo</span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="#" className="clearfix">
                                  <img src={Icons7} alt="icon" />
                                  <span>Outdoor &amp; Traveling Supplies</span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="#" className="clearfix">
                                  <img src={Icons28} alt="icon" />
                                  <span>Toys &amp; Hobbies </span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="#" className="clearfix">
                                  <img src={Icons12} alt="icon" />
                                  <span>Jewelry &amp; Watches</span>
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="#" className="clearfix">
                                  <img src={Icons19} alt="icon" />
                                  <span>Bags, Holiday Supplies</span>{" "}
                                </Link>
                              </li>
                              <li className="item-vertical">
                                <Link to="#" className="clearfix">
                                  <img src={Icons13} alt="icon" />
                                  <span>More Car Accessories</span>
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
            <div className="megamenu-hori header-bottom-right  col-md-9 col-sm-6 col-xs-12 ">
              <div className="responsive so-megamenu ">
                <nav className="navbar-default">
                  <div className=" container-megamenu  horizontal">
                    <div className="navbar-header">
                      <button
                        type="button"
                        id="show-megamenu"
                        data-toggle="collapse"
                        className="navbar-toggle"
                        onClick={() => setNavigatorOpen(280)}
                      >
                        <span className="icon-bar"> </span>
                        <span className="icon-bar"> </span>
                        <span className="icon-bar"> </span>
                      </button>
                      Navigator
                    </div>

                    <div className="megamenu-wrapper" style={{ left: `${navigatorOpen}px` }}>
                      <span id="remove-megamenu" className="fa fa-times" onClick={() => setNavigatorOpen(0)}></span>
                      <div className="megamenu-pattern">
                        <div className="container">
                          <ul
                            className="megamenu "
                            data-transition="slide"
                            data-animationtime="250"
                          >
                            <li className="home hover">
                              <Link to="/">Home</Link>
                            </li>
                            <li className="with-sub-menu hover">
                              <Link to="#" >
                                <strong>Features</strong>

                                {
                                  open === "block" ?
                                    <i className="fa fa-chevron-circle-up mr-1" onClick={() => setOpen("none")}></i>
                                    :
                                    <b className="caret mr-1" style={{ display: "inline-block" }} onClick={() => setOpen("block")}> </b>
                                }
                              </Link>
                              <div
                                className="sub-menu"
                                style={{ width: "100%", right: "auto", display: `${open}` }}
                              >
                                <div className="content"
                                  style={{ display: `${open}` }}
                                >
                                  <div className="row">
                                    <div className="col-md-3">
                                      <div className="column">
                                        <Link to="#" className="title-submenu">
                                          Listing pages
                                        </Link>
                                        <div>
                                          <ul className="row-list">
                                            <li>
                                              <Link to="/category">
                                                Category
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="column">
                                        <Link to="#" className="title-submenu">
                                          Shopping pages
                                        </Link>
                                        <div>
                                          <ul className="row-list">
                                            <li>
                                              <Link to="/shoppingCartPage">
                                                Shopping Cart Page
                                              </Link>
                                            </li>
                                            <li>
                                              <Link to="/checkout">
                                                Checkout Page
                                              </Link>
                                            </li>
                                            <li>
                                              <Link to="/compare">
                                                Compare Page
                                              </Link>
                                            </li>
                                            <li>
                                              <Link to="/wishlist">
                                                Wishlist Page
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="column">
                                        <Link to="#" className="title-submenu">
                                          My Account pages
                                        </Link>
                                        <div>
                                          <ul className="row-list">
                                            <li>
                                              <Link to="/order-history">
                                                Order History
                                              </Link>
                                            </li>
                                            <li>
                                              <Link to="/order-information">
                                                Order Information
                                              </Link>
                                            </li>
                                            <li>
                                              <Link to="/return">
                                                Product Returns
                                              </Link>
                                            </li>
                                            <li>
                                              <Link to="/gift-voucher">
                                                Gift Voucher
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <p className="close-menu"> </p>
                              <Link to="/blog" className="clearfix">
                                <strong>Blog</strong>
                                <span className="label"> </span>
                              </Link>
                            </li>

                            <li>
                              <p className="close-menu"> </p>
                              <Link to="/about" className="clearfix">
                                <strong>About Us</strong>
                              </Link>
                            </li>

                            <li>
                              <p className="close-menu"> </p>
                              <Link to="/contact" className="clearfix">
                                <strong>Contact</strong>
                              </Link>
                            </li>

                            <li>
                              <p className="close-menu"> </p>
                              <Link to="/faq" className="clearfix">
                                <strong>FAQ</strong>
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
        </div >
      </div >
    </header >
  );
}
export default Navbar 
