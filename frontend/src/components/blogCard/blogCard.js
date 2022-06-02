import styled from "styled-components";
function BlogCard({ data }) {

  return (
    <Wrapper>
      <div className="blog-item ">
        <div className="itemBlogImg col-md-4 col-sm-12">
          <div className="article-image banners">
            <div>
              <a className="popup-gallery" href="#">
                <img src={`http://localhost:8000/${data.image}`} alt="Kire tuma demonstraverunt lector" />
              </a>
            </div>
          </div>
        </div>
        <div className="itemBlogContent col-md-8 col-sm-12">
          <div className="article-title">
            <h4>
              <a href="/blog-detail">{data.title}</a>
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
          <div className="blog-meta">
            {/* <span className="comment_count">
              <a href="#">0 Comments</a>
            </span> */}
            <span className="author">
              <span>Post by </span>{data.postIntruder}
            </span>
          </div>
        </div>
      </div>

    </Wrapper>
  );
}

export default BlogCard;

const Wrapper = styled.div``;
