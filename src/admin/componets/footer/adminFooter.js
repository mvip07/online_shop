import { Link } from "react-router-dom";
import { Payment } from "../../../export/exportImg/exportImg";

function AdminFooter() {
    function Top() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <footer className="footer-container type_footer3">
            <section className="footer-top">
                <div className="container content">
                    <div className="row">

                        <div className="col-sm-6 col-md-3 box-information">
                            <div className="module clearfix">
                                <h3 className="modtitle">Information</h3>
                                <div className="modcontent">
                                    <ul className="menu">
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/faq">FAQ</Link></li>
                                        <li><Link to="/order-history">Order history</Link></li>
                                        <li><Link to="/order-information">Order information</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 box-service">
                            <div className="module clearfix">
                                <h3 className="modtitle">Customer Service</h3>
                                <div className="modcontent">
                                    <ul className="menu">
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/return">Returns</Link></li>
                                        <li><Link to="/gift-voucher">Gift Vouchers</Link></li>
                                        <li><Link to="/myAccount">My Account</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 collapsed-block ">
                            <div className="module clearfix">
                                <h3 className="modtitle">Contact Us	</h3>
                                <div className="modcontent">
                                    <ul className="contact-address">
                                        <li><span className="fa fa-map-marker"></span> My Company, 42 avenue des Champs Elysées 75000 Paris France</li>
                                        <li><span className="fa fa-envelope-o"></span> Email: <Link to="#"> sales@yourcompany.com</Link></li>
                                        <li><span className="fa fa-phone">&nbsp;</span> Phone 1: 0123456789 <br />Phone 2: (123) 4567890</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      
                        <hr className="footer-lines footer-lines--bottom" />
                    </div>
                </div>
            </section>

            <div className="footer-bottom-block ">
                <div className=" container">
                    <div className="row">
                        <div className="col-sm-5 copyright-text"> © 2022 Market. All Rights Reserved. </div>
                        <div className="col-sm-7">
                            <div className="block-payment text-right"><img src={Payment} alt="payment" title="payment" /></div>
                        </div>
                        <div onClick={Top} className="back-to-top"><i className="fa fa-angle-up"></i><span> Top </span></div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AdminFooter