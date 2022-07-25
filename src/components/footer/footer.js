import { Link } from "react-router-dom";
import styled from "styled-components";
import { Payment } from "../../export/exportImg/exportImg";

function Footer() {
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
                    <li><Link to="#">Site Map</Link></li>
                    <li><Link to="/myAccount">My Account</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 box-account">
              <div className="module clearfix">
                <h3 className="modtitle">My Account</h3>
                <div className="modcontent">
                  <ul className="menu">
                    <li><Link to="#">Brands</Link></li>
                    <li><Link to="/gift-voucher">Gift Vouchers</Link></li>
                    <li><Link to="#">Affiliates</Link></li>
                    <li><Link to="#">Specials</Link></li>
                    <li><Link to="#">Our Blog</Link></li>
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

            <hr className="footer-lines" />

            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="module clearfix modLine">
                <h3 className="modtitle">Sign up for newsletter	</h3>
                <div className="modcontent align-center">
                  <div className="subscribe-home">
                    <form className="form subscribe" method="post" id="newsletter-validate-detail">
                      <div className="input-group">
                        <input name="email" type="email" className="form-control" placeholder="Your email address" />
                        <span className="input-group-btn">
                          <button type="submit" className="button-search btn btn-primary" name="submit_search">Subscribe</button>
                        </span>
                      </div>

                    </form>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="module clearfix modLine footer--social">
                <h3 className="modtitle">Follow Us</h3>
                <div className="modcontent">
                  <div className="icons-social">

                    <div className="list-inline">
                      <Link title="Facebook" to="http://www.facebook.com/MagenTech" target="_blank">
                        <span className="fa fa-facebook icon-circled icon-color"></span>
                      </Link>

                      <Link title="Twitter" to="https://twitter.com/magentech" target="_blank">
                        <span className="fa fa-twitter icon-circled icon-color"></span>
                      </Link>

                      <Link title="Google+" to="https://plus.google.com/u/0/+Smartaddons" target="_blank">
                        <span className="fa fa-google-plus icon-circled icon-color"></span>
                      </Link>


                      <Link title="Pinterest" to="#" target="_blank">
                        <span className="fa fa-instagram icon-circled icon-color"></span>
                      </Link>


                    </div>

                  </div>

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
            <div className="col-sm-5 copyright-text"> © 2016 Market. All Rights Reserved. </div>
            <div className="col-sm-7">
              <div className="block-payment text-right"><img src={Payment} alt="payment" title="payment" /></div>
            </div>
            <div onClick={Top} className="back-to-top"><i className="fa fa-angle-up"></i><span> Top </span></div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const Wraos = styled.div`
  transition: all 5s;
`