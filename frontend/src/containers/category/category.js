import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import CategoryProduct from "./categoryProduct";
import {
  Electronic,
  Product10,
  Product11,
  Product2,
  Product8,
  Product9,
} from "../../export/exportImg/exportImg";
import { useState } from "react";

function Category() {
  const [inputSearch, setInputSearch] = useState("");
  const maxvalue = document.querySelector(".max_value");
  console.log(maxvalue);
  return (
    <div id="wrapper" className="wrapper-full ">
      <Navbar />
      <div className="main-container container">
        <ul className="breadcrumb">
          <li>
            <a href="/">
              <i className="fa fa-home"> </i>
            </a>
          </li>
          <li>
            <a href="#">Smartphone & Tablets</a>
          </li>
        </ul>
        <div className="row">
          <div id="content" className="col-md-9 col-sm-8">
            <div className="products-category">
              <div className="category-derc form-group">
                <div className="row">
                  <div className="col-sm-12">
                    <p>
                      <img src={Electronic} alt='Apple Cinema 30"' />
                      <br />
                    </p>
                    <p>
                      Mauris accumsan nulla vel diam. Sed in lacus ut enim
                      adipiscing aliquet. Nulla venenatis. In pede mi, aliquet
                      sit amet, euismod in, auctor ut, ligula. Aliquam dapibus
                      tincidunt metus. Praesent justo dolor, lobortis quis,
                      lobortis dignissim, pulvinar ac, lorem. Vestibulum sed
                      ante. Donec sagittis euismod purus. Sed ut perspiciatis
                      sit voluptatem accusantim doloremque laudantim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="refine-search form-group">
                <div className="row">
                  <div className="form-group col-md-15 col-sm-4 col-xs-4 ">
                    <a href="#" className="thumbnail">
                      <img src={Product8} alt="Car Alarms and Security" />
                    </a>
                    <a href="#">Car Alarms and Security</a>
                  </div>
                  <div className="form-group col-md-15 col-sm-4 col-xs-4 ">
                    <a href="#" className="thumbnail">
                      <img src={Product2} alt="Car Audio &amp; Speakers" />
                    </a>
                    <a href="#">Car Audio &amp; Speakers</a>
                  </div>
                  <div className="form-group col-md-15 col-sm-4 col-xs-4 ">
                    <a href="#" className="thumbnail">
                      <img src={Product9} alt="Gadgets &amp; Auto Parts" />
                    </a>
                    <a href="#">Gadgets &amp; Auto Parts</a>
                  </div>
                  <div className="form-group col-md-15 col-sm-4 col-xs-4 ">
                    <a href="#" className="thumbnail">
                      <img src={Product10} alt="More Car Accessories" />
                    </a>
                    <a href="#">More Car Accessories</a>
                  </div>
                  <div className="form-group col-md-15 col-sm-4 col-xs-4">
                    <a href="#" className="thumbnail">
                      <img src={Product11} alt="More Car Accessories" />
                    </a>
                    <a href="#">More Car Accessories</a>
                  </div>
                </div>
              </div>
              <div className="product-filter filters-panel">
                <div className="row">
                  <div className="col-md-2 visible-md-2">
                    <div className="view-mode">
                      <div className="list-view ">
                        <button
                          className="btn btn-default grid"
                          data-view="grid"
                          data-toggle="tooltip"
                          data-original-title="Grid"
                        >
                          <i className="fa fa-th"> </i>
                        </button>
                        <button
                          className="btn btn-default list active"
                          data-view="list"
                          data-toggle="tooltip"
                          data-original-title="List"
                        >
                          <i className="fa fa-th-list"> </i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="short-by-show form-inline text-right col-md-7 col-sm-8 col-xs-12">
                    <div className="form-group short-by">
                      <label className="control-label" htmlFor="input-sort">
                        Sort By:
                      </label>
                      <select id="input-sort" className="form-control">
                        <option>Default</option>
                        <option>Name (A - Z)</option>
                        <option>Name (Z - A)</option>
                        <option>Price (Low &gt; High)</option>
                        <option>Price (High &gt; Low)</option>
                        <option>Model (A - Z)</option>
                        <option>Model (Z - A)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list row list">
                <CategoryProduct inputSearch={inputSearch} />
              </div>
              <div className="product-filter product-filter-bottom filters-panel">
                <div className="row">
                  <div className="col-md-2 hidden-sm hidden-xs"> </div>
                  <div className="short-by-show text-center col-md-7 col-sm-8 col-xs-12">
                    <div className="form-group" style={{ margin: "7px 10px" }}>
                      Showing 1 to 9 of 10 (2 Pages)
                    </div>
                  </div>
                  <div className="box-pagination col-md-3 col-sm-4 text-right">
                    <ul className="pagination">
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">&gt;</a>
                      </li>
                      <li>
                        <a href="#">&gt;|</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="col-sm-4 col-md-3" id="column-left">
            <div className="module latest-product titleLine">
              <h3 className="modtitle">Filter </h3>
              <div className="modcontent ">
                <form className="type_2">
                  <div className="table_layout filter-shopby">
                    <div className="table_row">
                      <div className="table_cell" style={{ zIndex: "103" }}>
                        <legend>Search</legend>
                        <input
                          className="form-control"
                          type="text"
                          size="50"
                          autoComplete="off"
                          placeholder="Search"
                          name="search"
                          onChange={({ target }) =>
                            setInputSearch(target.value)
                          }
                        />
                      </div>
                      <div className="table_cell">
                        <fieldset>
                          <legend>Price</legend>
                          <div className="range">
                            Range :<span className="min_val">$ 10</span> -{" "}
                            <span className="max_val">$ 10000</span>
                            <input
                              type="hidden"
                              className="min_value"
                            //value="10"
                            // onChange={({target}) => setPrice(target.value)}
                            />
                            <input
                              type="hidden"
                              className="max_value"
                              value="10000"
                              onChange={({ target }) =>
                                console.log(target.value)
                              }
                            />
                          </div>
                          <div
                            id="slider"
                            className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                          >
                            <div className="ui-slider-range ui-widget-header ui-corner-all">
                              {" "}
                            </div>
                            <span className="ui-slider-handle ui-state-default ui-corner-all">
                              {" "}
                            </span>
                            <span className="ui-slider-handle ui-state-default ui-corner-all">
                              {" "}
                            </span>
                          </div>
                        </fieldset>
                      </div>
                      <div className="table_cell">
                        <fieldset>
                          <legend>Color</legend>

                          <div className="row">
                            <div className="col-sm-6">
                              <ul className="simple_vertical_list">
                                <li>
                                  <input type="checkbox" id="color_btn_1" />
                                  <label
                                    htmlFor="color_btn_1"
                                    className="color_btn green"
                                  >
                                    Green
                                  </label>
                                </li>

                                <li>
                                  <input
                                    type="checkbox"
                                    name=""
                                    id="color_btn_2"
                                  />
                                  <label
                                    htmlFor="color_btn_2"
                                    className="color_btn yellow"
                                  >
                                    Yellow
                                  </label>
                                </li>

                                <li>
                                  <input
                                    type="checkbox"
                                    name=""
                                    id="color_btn_3"
                                  />
                                  <label
                                    htmlFor="color_btn_3"
                                    className="color_btn red"
                                  >
                                    Red
                                  </label>
                                </li>
                              </ul>
                            </div>

                            <div className="col-sm-6">
                              <ul className="simple_vertical_list">
                                <li>
                                  <input
                                    type="checkbox"
                                    name=""
                                    id="color_btn_4"
                                  />
                                  <label
                                    htmlFor="color_btn_4"
                                    className="color_btn blue"
                                  >
                                    Blue
                                  </label>
                                </li>

                                <li>
                                  <input
                                    type="checkbox"
                                    name=""
                                    id="color_btn_5"
                                  />
                                  <label
                                    htmlFor="color_btn_5"
                                    className="color_btn grey"
                                  >
                                    Grey
                                  </label>
                                </li>

                                <li>
                                  <input
                                    type="checkbox"
                                    name=""
                                    id="color_btn_6"
                                  />
                                  <label
                                    htmlFor="color_btn_6"
                                    className="color_btn orange"
                                  >
                                    Orange
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <footer className="bottom_box">
                      <div className="buttons_row">
                        <button
                          type="submit"
                          className="button_grey button_submit"
                        >
                          Search
                        </button>
                        <button
                          type="reset"
                          className="button_grey filter_reset"
                        >
                          Reset
                        </button>
                      </div>
                    </footer>
                  </div>
                </form>
              </div>
            </div>
            <div className="module tags-product titleLine">
              <h3 className="modtitle">Tags</h3>
              <div className="modcontent ">
                <ul className="tags_cloud">
                  <li>
                    <a href="#" className="button_grey">
                      allergy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      baby
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      beauty
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      ear care
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      for her
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      for him
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      first aid
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      gift sets
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      spa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      hair care
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      herbs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      medicine
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      natural
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      oral care
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      pain
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      pedicure
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      personal care
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button_grey">
                      probiotics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
