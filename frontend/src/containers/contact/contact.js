import { useRef } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('onlineShop', 'onlineShopContact', form.current, '7LwV_dO-zVUJxhGVE')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="wrapper" className="wrapper-full ">
      <Navbar />
      <div className="main-container container">
        <ul className="breadcrumb">
          <li>
            <Link to="/">
              <i className="fa fa-home"></i>
            </Link>
          </li>
          <li>
            <Link to="#">Contact us</Link>
          </li>
        </ul>

        <div className="row">
          <div id="content" className="col-sm-12">
            <div className="page-title">
              <h2>Contact Us</h2>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.586011453405!2d69.22688651641079!3d41.32709507543071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb7a0ebbae3%3A0xf9e01b5d45fc68cd!2sPDP%20Academy!5e0!3m2!1sen!2s!4v1653732685434!5m2!1sen!2s"
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen
            ></iframe>
            <div className="info-contact clearfix">
              <div className="col-lg-4 col-sm-4 col-xs-12 info-store">
                <div className="row">
                  <div className="name-store">
                    <h3>Your Store</h3>
                  </div>
                  <address>
                    <div className="address clearfix form-group">
                      <div className="icon">
                        <i className="fa fa-home"></i>
                      </div>
                      <div className="text">
                        My Company, 42 avenue des Champs Elysées 75000 Paris
                        France
                      </div>
                    </div>
                    <div className="phone form-group">
                      <div className="icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="text">Phone : 0123456789</div>
                    </div>
                    <div className="comment">
                      Maecenas euismod felis et purus consectetur, quis
                      fermentum velition. Aenean egestas quis turpis
                      vehicula.Maecenas euismod felis et purus consectetur, quis
                      fermentum velition. Aenean egestas quis turpis vehicula.It
                      is Link long established fact that Link reader will be
                      distracted by the readable content of Link page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has Link more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </div>
                  </address>
                </div>
              </div>
              <div className="col-lg-8 col-sm-8 col-xs-12 contact-form">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="form-horizontal"
                >
                  <fieldset>
                    <legend>Contact Form</legend>
                    <div className="form-group required">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="input-name"
                      >
                        Your Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          name="name"
                          id="input-name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group required">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="input-email"
                      >
                        E-Mail Address
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          name="email"
                          id="input-email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group required">
                      <label
                        className="col-sm-2 control-label"
                        htmlFor="input-enquiry"
                      >
                        Enquiry
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          name="message"
                          rows="10"
                          id="input-enquiry"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </fieldset>
                  <div className="buttons">
                    <div className="pull-right">
                      <button
                        className="btn btn-default buttonGray"
                        type="submit"
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
