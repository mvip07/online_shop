import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../containers/utils/axios";



function CreateProduct() {
  const navigate = useNavigate();

  const numberDiscount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");

  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [stars, setStars] = useState("");
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState("");
  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescripion] = useState("");
  const [type, setType] = useState("Laptop");
  const [image, setImage] = useState("");

  const Submit = () => {
    let form = new FormData();
    form.append("title", title);
    form.append("brand", brand);
    form.append("color", color1);
    form.append("color", color2);
    form.append("color", color3);
    form.append("color", color4);
    form.append("color", color5);
    form.append("price", price);
    form.append("stars", stars);
    form.append("category", category);
    form.append("discount", discount);
    form.append("model", model);
    form.append("quantity", quantity);
    form.append("description", description);
    form.append("type", type);
    form.append("image", image);

    API.post("/product", form);

    navigate("/adminMain")
  };

  return (
    <Wrapper >
      <div>
        <div className="col-lg-12 customer-login">
          <div className="well">
            <p>
              <strong>I am a returning customer</strong>
            </p>
            <div className="form-group">
              <label className="control-label ">Enter your Title</label>

              <input
                type="text"
                className="form-control"
                onChange={({ target }) => setTitle(target.value)}
              />
            </div>
            <div className="form-group">
              <label className="control-label ">Enter your Brand</label>

              <input
                type="text"
                className="form-control"
                onChange={({ target }) => setBrand(target.value)}
              />
            </div>
            <div className="form-group">
              <label className="control-label ">Enter your Price</label>

              <input
                type="number"
                className="form-control"
                onChange={({ target }) => setPrice(target.value)}
              />
            </div>
            <div className="form-group">
              <label className="control-label ">Enter your Stars</label>

              <input
                type="number"
                className="form-control"
                onChange={({ target }) => Number(target.value) > 5 ? setStars(target.value = 5) : setStars(target.value)}
              />
            </div>
            <div className="form-group">
              <label className="control-label ">Enter your Category</label>

              <input
                type="text"
                className="form-control"
                onChange={({ target }) => setCategory(target.value)}
              />
            </div>

            <div className="form-group">
              <label className="control-label ">Enter your Discount</label>

              <select className="form-control form-discount" onChange={({ target }) => setDiscount(target.value)}>
                {
                  numberDiscount.map((item) => {
                    return (
                      <option className="form-control" key={Math.random()}>{item}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className="form-group">
              <label className="control-label ">Enter your Model</label>

              <input
                type="text"
                className="form-control"
                onChange={({ target }) => setModel(target.value)}
              />
            </div>
            <div className="form-group">
              <label className="control-label ">Enter your Quantity</label>

              <input
                type="number"
                className="form-control"
                onChange={({ target }) => setQuantity(target.value)}
              />
            </div>
            <div className="form-group">
              <label className="control-label ">Enter your Descripion</label>

              <input
                type="text"
                className="form-control"
                onChange={({ target }) => setDescripion(target.value)}
              />
            </div>

            <div className="form-group">
              <label className="control-label">Enter your Color</label>

              <div className="color-flex">


                <input
                  type="color"
                  className="form-control"
                  onChange={({ target }) => setColor1(target.value)}
                />
                <input
                  type="color"
                  className="form-control"
                  onChange={({ target }) => setColor2(target.value)}
                />
                <input
                  type="color"
                  className="form-control"
                  onChange={({ target }) => setColor3(target.value)}
                />

                <input
                  type="color"
                  className="form-control"
                  onChange={({ target }) => setColor4(target.value)}
                />

                <input
                  type="color"
                  className="form-control"
                  onChange={({ target }) => setColor5(target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label ">Enter your Type</label>

              <select className="form-control" onChange={({ target }) => setType(target.value)}>
                <option className="form-control" > Laptop</option>
                <option className="form-control" > Mobile</option>
              </select>
            </div>

            <div className="form-group">
              <label className="control-label">Enter your Image</label>
              <input type="file" className="form-control" onChange={({ target }) => setImage(target.files[0])} />
            </div>
          </div>
          <div className="bottom-form">

            <button
              className="btn btn-default pull-right col-lg-4"
              onClick={Submit}
            >
              Create blog
            </button>

            <button
              className="btn btn-default pull-right col-lg-4"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CreateProduct;
const Wrapper = styled.div`
 .bottom-form {
   margin: 20px;
   display: flex;
   justify-content: center;
   gap: 20px;
 }

 .color-flex {
  display: flex;
 }
`;