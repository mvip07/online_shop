import { Link } from "react-router-dom";
import styled from "styled-components";
function BlogCard({ data }) {

  return (
    <Wrapper>
      <div className="blog-item ">
        <div className="itemBlogImg col-md-4 col-sm-12">
          <div className="article-image banners">
            <div>
              <Link className="popup-gallery" to="#">
                <img src={`${data.image}`} alt="Kire tuma demonstraverunt lector" />
              </Link>
            </div>
          </div>
        </div>
        <div className="itemBlogContent col-md-8 col-sm-12">
          <div className="article-title">
            <h4>
              <Link to={`/blog-detail/${data._id}`}>{data.title}</Link>
            </h4>
          </div>
          <div className="article-sub-title">
            <span className="article-date">
              <i className="fa fa-calendar"> </i>{(data.date).substring(0, 10)}
            </span>
          </div>
          <div className="article-description">
            {data.description}
          </div>
          <div className="blog-meta" >
            <span style={{ padding: "0" }}>{data.postIntruder}</span>

          </div>
        </div>
      </div>

    </Wrapper>
  );
}

export default BlogCard;

const Wrapper = styled.div``;
