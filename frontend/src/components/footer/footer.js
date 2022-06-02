import { Payment } from "../../export/exportImg/exportImg";

function Footer() {
  return (
    <footer className="footer-container type_footer1">
      <section className="footer-top">
        <div className="container content">
          <div className="row">
            <div className="col-sm-6 col-md-3 box-information">
              <div className="module clearfix">
                <h3 className="modtitle">Information</h3>
                <div className="modcontent">
                  <ul className="menu">
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                    <li>
                      <a href="/order-history">Order history</a>
                    </li>
                    <li>
                      <a href="/order-information">Order information</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 box-service">
              <div className="module clearfix">
                <h3 className="modtitle">Customer Service</h3>
                <div className="modcontent">
                  <ul className="menu">
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="return.html">Returns</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 box-account">
              <div className="module clearfix">
                <h3 className="modtitle">My Account</h3>
                <div className="modcontent">
                  <ul className="menu">
                    <li>
                      <a href="#">Brands</a>
                    </li>
                    <li>
                      <a href="/gift-voucher">Gift Vouchers</a>
                    </li>
                    <li>
                      <a href="#">Affiliates</a>
                    </li>
                    <li>
                      <a href="#">Specials</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Our Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 collapsed-block ">
              <div className="module clearfix">
                <h3 className="modtitle">Contact Us </h3>
                <div className="modcontent">
                  <ul className="contact-address">
                    <li>
                      <span className="fa fa-map-marker"> </span> My Company, 42
                      avenue des Champs Elysées 75000 Paris France
                    </li>
                    <li>
                      <span className="fa fa-envelope-o"> </span> Email:
                      <a href="#">sales@yourcompany.com</a>
                    </li>
                    <li>
                      <span className="fa fa-phone">&nbsp;</span> Phone 1:
                      0123456789 <br />
                      Phone 2: (123) 4567890
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-12 collapsed-block footer-links">
              <div className="module clearfix">
                <div className="modcontent">
                  <hr className="footer-lines" />
                  <div className="footer-directory-title">
                    <h4 className="label-link">
                      Top Stores : Brand Directory | Store Directory
                    </h4>
                    <ul className="footer-directory">
                      <li>
                        <h4>MOST SEARCHED KEYWORDS MARKET:</h4>
                        <a href="#">Xiaomi Mi3</a> |
                        <a href="#">Digiflip Pro XT 712 Tablet</a>|
                        <a href="#">Mi 3 Phones</a> | <a href="#">View all</a>
                      </li>
                      <li>
                        <h4>MOBILES:</h4>
                        <a href="#">Moto E</a> | <a href="#">Samsung Mobile</a>|{" "}
                        <a href="#">Micromax Mobile</a> |
                        <a href="#">Nokia Mobile</a> |<a href="#">HTC Mobile</a>{" "}
                        | <a href="#">Sony Mobile</a>|{" "}
                        <a href="#">Apple Mobile</a> |<a href="#">LG Mobile</a>{" "}
                        |<a href="#">Karbonn Mobile</a> |
                        <a href="#">View all</a>
                      </li>
                      <li>
                        <h4>CAMERA:</h4>
                        <a href="#">Nikon Camera</a>
                        <a href="#">Canon Camera</a> |
                        <a href="#">Sony Camera</a> |
                        <a href="#">Samsung Camera</a>
                        <a href="#">Point shoot camera</a> |
                        <a href="#">Camera Lens</a> |
                        <a href="#">Camera Tripod</a> |
                        <a href="#">Camera Bag</a> | <a href="#">View all</a>
                      </li>
                      <li>
                        <h4>LAPTOPS:</h4>
                        <a href="#">Apple Laptop</a> |
                        <a href="#">Acer Laptop</a> |<a href="#">Sony Laptop</a>{" "}
                        |<a href="#">Dell Laptop</a>
                        <a href="#">Asus Laptop</a> |
                        <a href="#">Toshiba Laptop</a> |
                        <a href="#">LG Laptop</a> | <a href="#">HP Laptop</a> |
                        <a href="#">Notebook</a> | <a href="#">View all</a>
                      </li>
                      <li>
                        <h4>TVS:</h4>
                        <a href="#">Sony TV</a> | <a href="#">Samsung TV</a> |
                        <a href="#">LG TV</a> | <a href="#">Panasonic TV</a> |
                        <a href="#">Onida TV</a> |<a href="#">Toshiba TV</a> |
                        <a href="#">Philips TV</a> | <a href="#">Micromax TV</a>
                        | <a href="#">LED TV</a> | <a href="#">LCD TV</a> |
                        <a href="#">Plasma TV</a> | <a href="#">3D TV</a> |
                        <a href="#">Smart TV</a> | <a href="#">View all</a>
                      </li>
                      <li>
                        <h4>TABLETS:</h4>
                        <a href="#">Micromax Tablets</a> |
                        <a href="#">HCL Tablets</a> |
                        <a href="#">Samsung Tablets</a> |
                        <a href="#">Lenovo Tablets</a> |
                        <a href="#">Karbonn Tablets</a> |
                        <a href="#">Asus Tablets</a>
                        <a href="#">Apple Tablets</a> | <a href="#">View all</a>
                      </li>
                      <li>
                        <h4>WATCHES:</h4>
                        <a href="#">FCUK Watches</a> |
                        <a href="#">Titan Watches</a> |
                        <a href="#">Casio Watches</a> |
                        <a href="#">Fastrack Watches</a> |
                        <a href="#">Timex Watches</a> |
                        <a href="#">Fossil Watches</a> |
                        <a href="#">Diesel Watches</a> |
                        <a href="#">Luxury Watches</a> |<a href="#">View all</a>
                      </li>
                      <li>
                        <h4>CLOTHING:</h4>
                        <a href="#">Shirts</a> | <a href="#">Jeans</a> |
                        <a href="#">T shirts</a> | <a href="#">Kurtis</a>
                        <a href="#">Sarees</a> | <a href="#">Levis Jeans</a> |
                        <a href="#">Killer Jeans</a> |<a href="#">Pepe Jeans</a>{" "}
                        |<a href="#">Arrow Shirts</a> |
                        <a href="#">Ethnic Wear</a> |
                        <a href="#">Formal Shirts</a> |
                        <a href="#">Peter England Shirts</a> |
                        <a href="#">View all</a>
                      </li>
                      <li>
                        <h4>FOOTWEAR:</h4>
                        <a href="#">Shoes</a> | <a href="#">Casual Shoes</a>
                        <a href="#">Adidas Shoes</a> | <a href="#">Gas Shoes</a>
                        | <a href="#">Puma Shoes</a> |
                        <a href="#">Reebok Shoes</a> |
                        <a href="#">Woodland Shoes</a> |
                        <a href="#">Red tape Shoes</a> |
                        <a href="#">Nike Shoes</a> | <a href="#">View all</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-bottom-block ">
        <div className=" container">
          <div className="row">
            <div className="col-sm-5 copyright-text">
              © 2016 Market. All Rights Reserved.
            </div>
            <div className="col-sm-7">
              <div className="block-payment text-right">
                <img src={Payment} alt="payment" title="payment" />
              </div>
            </div>
            <div className="back-to-top">
              <i className="fa fa-angle-up"> </i>
              <span> Top </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
