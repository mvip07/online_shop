import styled from "styled-components";
import {
  Five,
  Four,
  FourAndHalf,
  One,
  OneAndHalf,
  Three,
  ThreeAndHalf,
  Two,
  TwoAndHalf,
} from "../../components/stars/stars";
import API from "../../containers/utils/axios";
import { host } from "../../containers/utils/url";
import { ComponentsStyle, ComponentsStyleBtn } from "../adminComponents/components";
function AdminProduct({ data }) {
  function DeleteProduct(id) {
    API.delete(`/products/62b027065609250016f25da5`).then((res) => console.log(res));
  }

  return (
    <Wrapper style={ComponentsStyle}>
      <div className="ltabs-item product-layout flex">
        <div className="product-item-container">
          <div className="left-block">
            <div className="product-image-container second_img product-img">
              <img
                src={`${host}/${data.image}`}
                alt='Apple Cinema 30"'
                className="img-responsive"
              />
            </div>
          </div>
          <div className="right-block">
            <div className="caption">
              <h4>
                <p href="/product">{data.title}</p>
              </h4>
              <div className="ratings">
                {data.stars == "1" ? <One /> : ""}
                {data.stars == "1.5" ? <OneAndHalf /> : ""}
                {data.stars == "2" ? <Two /> : ""}
                {data.stars == "2.5" ? <TwoAndHalf /> : ""}
                {data.stars == "3" ? <Three /> : ""}
                {data.stars == "3.5" ? <ThreeAndHalf /> : ""}
                {data.stars == "4" ? <Four /> : ""}
                {data.stars == "4.5" ? <FourAndHalf /> : ""}
                {data.stars == "5" ? <Five /> : ""}
              </div>
              <div className="price">
                <span className="price-new">$ {data.price} </span>
                {

                  data.discount === "No" || data.discount === ""
                    ?
                    " "
                    :
                    <span className="price-old mr-1">$ {Number(((data.price * data.discount) / 100).toFixed(2)) + Number(data.price)}</span>
                }
              </div>
            </div>
            <div className="button-group" style={ComponentsStyleBtn}>
              <button
                className="addToCart p-1"
                type="button"
                data-toggle="tooltip"
                title="Edit"
              >
                <i className="fa-solid fa-pen-to-square mr-1"></i>
                <span>Edit</span>
              </button>

              <button
                className="compare mr-1 p-1"
                type="button"
                data-toggle="tooltip"
                title="Delete"
                onClick={() => DeleteProduct(data.id)}
              >
                <i className="fa-solid fa-trash-can mr-1"></i>
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AdminProduct;
const Wrapper = styled.div``;
