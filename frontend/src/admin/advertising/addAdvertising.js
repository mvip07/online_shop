import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../containers/utils/axios";

function AddAdvertising() {
  const navigate = useNavigate()
  const [firma, setFirma] = useState("");
  const [type, setType] = useState("")
  const [image, setImage] = useState("");

  const Submit = () => {
    let form = new FormData();
    form.append("firma", firma);
    form.append("type", type)
    form.append("image", image);

    API.post("/advertising", form).then((res) => navigate(-1));
  };

  return (
    <Wrapper>
      <div>
        <div className="col-lg-12 customer-login">
          <div className="well">
            <p>
              <strong>I am a returning customer</strong>
            </p>
            <div className="form-group">
              <label className="control-label ">Enter your Firma</label>

              <input
                type="text"
                className="form-control"
                onChange={({ target }) => setFirma(target.value)}
              />
            </div>
            <div className="form-group">
              <label className="control-label">Image</label>

              <input type="file" className="form-control" onChange={({ target }) => {
                setImage(target.files[0])
                setType(target.files[0].type)
              }} />
            </div>
          </div>
          <div className="bottom-form">

            <button
              className="btn btn-default pull-right"
              onClick={Submit}
            >
              Create Advertising
            </button>
          </div>
        </div>
      </div>


    </Wrapper>
  );
}

export default AddAdvertising;

const Wrapper = styled.div`
  display: block;
  margin: 150px;
`;
