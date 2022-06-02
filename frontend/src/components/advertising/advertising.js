import { useEffect, useState } from "react";
import styled from "styled-components";
import API from "../../containers/utils/axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Advertising() {
  const [advertisings, setAdvertisings] = useState([]);

  useEffect(() => {
    API.get(`/advertisings`).then((res) => {
      setAdvertisings(res.data);
    });
  }, []);

  return (
    <Wrapper>

      <Carousel >
        {
          advertisings.map((data) => {
            return (
              <div className="yt-content-slide yt-clearfix yt-content-wrap" key={Math.random()}>
                {
                  data.type === "video/mp4" ?
                    <video src={`http://localhost:8000/${data.image}`}
                      controls={true}
                    />
                    :
                    <img
                      src={`http://localhost:8000/${data.image}`}
                      alt="slider1"
                    />
                }
              </div>

            )
          })
        }
      </Carousel>
    </Wrapper >
  );
}

export default Advertising;
const Wrapper = styled.div`
  margin-bottom: 50px;
  position: relative;


  .thumbs  {
    display: none;
    align-items: center;
    justify-content: center;

    .thumb .selected {
      margin: 0;
      display: none;
    }
  }
`
