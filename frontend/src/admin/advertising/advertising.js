import { Link } from "react-router-dom";
import styled from "styled-components";
import API from "../../containers/utils/axios";
import { host } from "../../containers/utils/url";
import { ComponentsStyle, ComponentsStyleBtn } from "../adminComponents/components"

function Advertising({ data }) {
  function DeleteAdvertising(id) {
    API.delete(`/advertising/${id}`).then((res) => console.log(res));
  }

  return (
    <Wrapper style={ComponentsStyle}>
      <div className="yt-content-slide" key={Math.random()}>
        <Link to="#">

          {
            data.type === "video/mp4" ?
              <video src={`${host}/${data.image}`}
                className="img-responsive"
                width="500px"
                height="300px"
                controls={true}
              />
              :
              <img
                src={`${host}/${data.image}`}
                alt="slider1"
                className="img-responsive"
                width="500px"
                height="300px"
              />
          }

        </Link>
        <div className="button-group mr-1 p-1" style={ComponentsStyleBtn}>
          <button
            className="addToCart mr-1 p-1"
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
            onClick={() => DeleteAdvertising(data.id)}
          >
            <i className="fa-solid fa-trash-can mr-1"></i>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Advertising;
const Wrapper = styled.div``
