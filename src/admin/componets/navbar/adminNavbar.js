import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Logo } from "../../../export/exportImg/exportImg"
import { allSearchCategorys } from "../../../utils/api"

function AdminNavbar() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("onlineShopCart")) || [])
    const [languageMenu, setLanguageMenu] = useState("none")
    const [currency, setCurrency] = useState("none")
    const [more, setMore] = useState("none")
    const [allCategories, setAllCategories] = useState("none")
    const [allCategoriesLeft, setAllCategoriesLeft] = useState(0)
    const [navbar, setNavbar] = useState("none")
    const [navbarLeft, setNavbarLeft] = useState(0)
    const [features, setFeatures] = useState("none")
    const [cartMenu, setCartMenu] = useState("none")
    const [searchCategory, setSearchCategory] = useState([])
    // useEffect(() => {
    // 	setInterval(() => { if (cart) setCart(JSON.parse(localStorage.getItem("onlineShopCart")) || []) }, 1000)
    // 	API.get(allSearchCategorys)
    // 		.then(res => setSearchCategory(res.data))
    // 		.catch(err => console.log(err.data))
    // }, [])



    return (
        <header id="header" className="variantleft type_6">
            <div className="header-center">
                <div className="container">
                    <div className="row">
                        <div className="navbar-logo col-md-3 col-sm-12 col-xs-12">
                            <Link to="/"><img src={Logo} title="Your Store" alt="Your Store" /></Link>
                        </div>
                        <div className="header-top-right  text-right  col-sm-7 col-xs-12 compact-hidden">
                            <div className="tabBlock" id="TabBlock-1">
                                <ul className="top-link list-inline" >
                                    <li className="account"><Link to="/myAccount" className="top-link-account" title="My Account"> <i className="fa fa-user" ></i> My Account </Link></li>
                                </ul>
                            </div>
                        </div>
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
                                                                    <span className="fas fa-times mr-1" style={{ fontSize: "16px", marginRight: "14px" }} onClick={() => setAllCategories("none")}></span>
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
                                                                <Link to="/all/product" className="clearfix">
                                                                    <span>Products</span>
                                                                </Link>
                                                            </li>
                                                            <li className="item-vertical style1 with-sub-menu hover">
                                                                <p className="close-menu"></p>
                                                                <Link to="/all/blog" className="clearfix">
                                                                    <span>Blogs</span>
                                                                </Link>
                                                            </li>
                                                            <li className="item-vertical style1 with-sub-menu hover">
                                                                <p className="close-menu"></p>
                                                                <Link to="/all/advertising" className="clearfix">
                                                                    <span>Advetisings</span>
                                                                </Link>
                                                            </li>
                                                            <li className="item-vertical style1 with-sub-menu hover">
                                                                <p className="close-menu"></p>
                                                                <Link to="/all/about/team/member" className="clearfix">
                                                                    <span>About Team Membears</span>
                                                                </Link>
                                                            </li>
                                                            <li className="item-vertical style1 with-sub-menu hover">
                                                                <p className="close-menu"></p>
                                                                <Link to="/all/about/company" className="clearfix">
                                                                    <span>About Companes</span>
                                                                </Link>
                                                            </li>
                                                            <li className="item-vertical style1 with-sub-menu hover">
                                                                <p className="close-menu"></p>
                                                                <Link to="/all/search/category" className="clearfix">
                                                                    <span>Search Categores</span>
                                                                </Link>
                                                            </li>
                                                            <li className="item-vertical style1 with-sub-menu hover">
                                                                <p className="close-menu"></p>
                                                                <Link to="/all/faq" className="clearfix">
                                                                    <span>Faq</span>
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
                                                            <Link to="/admin">Home</Link>

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
                                                                        <div className="col-md-6">
                                                                            <div className="column">
                                                                                <Link to="#" className="title-submenu">All Pages</Link>
                                                                                <div>
                                                                                    <ul className="row-list">
                                                                                        <li><Link to="/all/product">Products</Link></li>
                                                                                        <li><Link to="/all/blog">Blogs</Link></li>
                                                                                        <li><Link to="/all/advertising">Advetisings</Link></li>
                                                                                        <li><Link to="/all/about/team/member">About Team Membears</Link></li>
                                                                                        <li><Link to="/all/about/company">About Companes</Link></li>
                                                                                        <li><Link to="/all/search/category">Search Categores</Link></li>
                                                                                        <li><Link to="/all/faq">Faqs</Link></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="column">
                                                                                <Link to="#" className="title-submenu">Create pages</Link>
                                                                                <div>
                                                                                    <ul className="row-list">
                                                                                    <li><Link to="/create/product">Create Product</Link></li>
                                                                                        <li><Link to="/create/blog">Create Blog</Link></li>
                                                                                        <li><Link to="/create/advertising">Create Advetising</Link></li>
                                                                                        <li><Link to="/create/about/team/member">Create About Team Membear</Link></li>
                                                                                        <li><Link to="/create/about/company">Create About Compane</Link></li>
                                                                                        <li><Link to="/create/search/category">Create Search Categore</Link></li>
                                                                                        <li><Link to="/create/faq">Create Faq</Link></li>
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
    )
}

export default AdminNavbar