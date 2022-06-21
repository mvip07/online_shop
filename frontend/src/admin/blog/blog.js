import styled from "styled-components"
import API from "../../containers/utils/axios";
import { host } from "../../containers/utils/url";
import { ComponentsStyle, ComponentsStyleBtn } from "../adminComponents/components";

function Blog({ data }) {
    function DeleteAdvertising(id) {
        API.delete(`/blog/${id}`).then((res) => console.log(res));
    }
    return (
        <Wrapper style={ComponentsStyle}>
            <div className="blog-item ">
                <div className="itemBlogImg ">
                    <div className="article-image banners">
                        <div>
                            <a className="popup-gallery" href="#">
                                <img src={`${host}/${data.image}`} alt="Kire tuma demonstraverunt lector" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="itemBlogContent ">
                    <div className="article-title">
                        <h4>
                            <a href="/blog-detail">{data.title}</a>
                        </h4>
                    </div>
                    <div className="article-sub-title">
                        <span className="article-date">
                            <i className="fa fa-calendar"> </i>{(data.date)}
                        </span>
                    </div>
                    <div className="article-description">
                        {data.description?.length > 100 ? `${(data.description).substring(0, 100)}...` : data.description}
                    </div>
                    <div className="blog-meta">
                        <span className="author">
                            <span>Post by </span>{data.postIntruder}
                        </span>
                    </div>
                    <div className="button-group " style={ComponentsStyleBtn}>
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

            </div>
        </Wrapper>
    )
}

export default Blog
const Wrapper = styled.div``