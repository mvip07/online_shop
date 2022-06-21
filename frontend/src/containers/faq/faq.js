import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

function Faq() {
  return (
    <div id="wrapper" className="wrapper-full ">
      <Navbar />
      <div className="main-container container">
        <ul className="breadcrumb">
          <li>
            <Link to="#">
              <i className="fa fa-home"></i>
            </Link>
          </li>
          <li>
            <Link to="#">Faq</Link>
          </li>
        </ul>

        <div className="row">
          <div id="content" className="col-sm-12">
            <h3>Got Questions? We’ve Got Answers!</h3>
            <p>
              Asunt in anim uis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in anim id est laborum.
              Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in anim id est laborum.
            </p>
            <p>
              <br />
            </p>
            <div className="row">
              <div className="col-sm-12">
                <ul className="yt-accordion">
                  <li className="accordion-group">
                    <h3 className="accordion-heading">
                      <i className="fa fa-plus-square"></i>
                      <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                      </span>
                    </h3>
                    <div className="accordion-inner">
                      <p>
                        Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                        aliquet. Phasellus id nisi vitae odio pretium aliquam.
                        Pellentesque Link leo. Donec consequat lectus sed felis.
                        Quisque vestibulum massa. Nulla ornare. Nulla libero.
                        Donec et mi eu massa ultrices scelerisque.{" "}
                      </p>
                      <p>
                        Nullam ac nisi non eros gravida venenatis. Ut euismod,
                        turpis sollicitudin lobortis pellentesque, libero massa
                        dapibus dui, eu dictum justo urna et mi. Integer dictum
                        est vitae sem. Vestibulum justo. Nulla mauris ipsum,
                        convallis ut, vestibulum eu, tincidunt vel, nisi.
                      </p>
                    </div>
                  </li>
                  <li className="accordion-group">
                    <h3 className="accordion-heading">
                      <i className="fa fa-plus-square"></i>
                      <span>
                        Donec eros tellus scelerisque nec rhoncus eget laoreet
                        sit amet
                      </span>
                    </h3>
                    <div className="accordion-inner">
                      <p>
                        Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                        aliquet. Phasellus id nisi vitae odio pretium aliquam.
                        Pellentesque Link leo. Donec consequat lectus sed felis.
                        Quisque vestibulum massa. Nulla ornare. Nulla libero.
                        Donec et mi eu massa ultrices scelerisque.{" "}
                      </p>
                      <p>
                        Nullam ac nisi non eros gravida venenatis. Ut euismod,
                        turpis sollicitudin lobortis pellentesque, libero massa
                        dapibus dui, eu dictum justo urna et mi. Integer dictum
                        est vitae sem. Vestibulum justo. Nulla mauris ipsum,
                        convallis ut, vestibulum eu, tincidunt vel, nisi.
                      </p>
                    </div>
                  </li>
                  <li className="accordion-group">
                    <h3 className="accordion-heading">
                      <i className="fa fa-plus-square"></i>
                      <span>
                        Curabitur molestie euismod erat. Proin eros odio?
                      </span>
                    </h3>
                    <div className="accordion-inner">
                      <p>
                        Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                        aliquet. Phasellus id nisi vitae odio pretium aliquam.
                        Pellentesque Link leo. Donec consequat lectus sed felis.
                        Quisque vestibulum massa. Nulla ornare. Nulla libero.
                        Donec et mi eu massa ultrices scelerisque.
                      </p>
                      <p>
                        {" "}
                        Nullam ac nisi non eros gravida venenatis. Ut euismod,
                        turpis sollicitudin lobortis pellentesque, libero massa
                        dapibus dui, eu dictum justo urna et mi. Integer dictum
                        est vitae sem. Vestibulum justo. Nulla mauris ipsum,
                        convallis ut, vestibulum eu, tincidunt vel, nisi.
                      </p>
                    </div>
                  </li>
                  <li className="accordion-group">
                    <h3 className="accordion-heading">
                      <i className="fa fa-plus-square"></i>
                      <span>In scelerisque sem at dolor. Maecenas mattis</span>
                    </h3>
                    <div className="accordion-inner">
                      <p>
                        Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                        aliquet. Phasellus id nisi vitae odio pretium aliquam.
                        Pellentesque Link leo. Donec consequat lectus sed felis.
                        Quisque vestibulum massa. Nulla ornare. Nulla libero.
                        Donec et mi eu massa ultrices scelerisque. Nullam ac
                        nisi non eros gravida venenatis. Ut euismod, turpis
                        sollicitudin lobortis pellentesque, libero massa dapibus
                        dui, eu dictum justo urna et mi. Integer dictum est
                        vitae sem. Vestibulum justo. Nulla mauris ipsum,
                        convallis ut, vestibulum eu, tincidunt vel, nisi.
                      </p>
                    </div>
                  </li>
                  <li className="accordion-group">
                    <h3 className="accordion-heading">
                      <i className="fa fa-plus-square"></i>
                      <span>Nunc feugiat mi Link tellus consequat imperdiet</span>
                    </h3>
                    <div className="accordion-inner">
                      <p>
                        Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                        aliquet. Phasellus id nisi vitae odio pretium aliquam.
                        Pellentesque Link leo. Donec consequat lectus sed felis.
                        Quisque vestibulum massa. Nulla ornare. Nulla libero.
                        Donec et mi eu massa ultrices scelerisque. Nullam ac
                        nisi non eros gravida venenatis. Ut euismod, turpis
                        sollicitudin lobortis pellentesque, libero massa dapibus
                        dui, eu dictum justo urna et mi. Integer dictum est
                        vitae sem. Vestibulum justo. Nulla mauris ipsum,
                        convallis ut, vestibulum eu, tincidunt vel, nisi.
                      </p>
                    </div>
                  </li>
                  <li className="accordion-group">
                    <h3 className="accordion-heading">
                      <i className="fa fa-plus-square"></i>
                      <span>
                        Vestibulum ante ipsum primis in faucibus orci luctus{" "}
                      </span>
                    </h3>
                    <div className="accordion-inner">
                      <p>
                        Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                        aliquet. Phasellus id nisi vitae odio pretium aliquam.
                        Pellentesque Link leo. Donec consequat lectus sed felis.
                        Quisque vestibulum massa. Nulla ornare. Nulla libero.
                        Donec et mi eu massa ultrices scelerisque. Nullam ac
                        nisi non eros gravida venenatis. Ut euismod, turpis
                        sollicitudin lobortis pellentesque, libero massa dapibus
                        dui, eu dictum justo urna et mi. Integer dictum est
                        vitae sem. Vestibulum justo. Nulla mauris ipsum,
                        convallis ut, vestibulum eu, tincidunt vel, nisi.
                      </p>
                    </div>
                  </li>
                  <li className="accordion-group">
                    <h3 className="accordion-heading">
                      <i className="fa fa-plus-square"></i>
                      <span>
                        SmartAddons membership fee is one-time fee, or I have to
                        pay extra?
                      </span>
                    </h3>
                    <div className="accordion-inner">
                      <p>
                        Fusce eu dui. Integer vel nibh sit amet turpis vulputate
                        aliquet. Phasellus id nisi vitae odio pretium aliquam.
                        Pellentesque Link leo. Donec consequat lectus sed felis.
                        Quisque vestibulum massa. Nulla ornare. Nulla libero.
                        Donec et mi eu massa ultrices scelerisque. Nullam ac
                        nisi non eros gravida venenatis. Ut euismod, turpis
                        sollicitudin lobortis pellentesque, libero massa dapibus
                        dui, eu dictum justo urna et mi. Integer dictum est
                        vitae sem. Vestibulum justo. Nulla mauris ipsum,
                        convallis ut, vestibulum eu, tincidunt vel, nisi.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
