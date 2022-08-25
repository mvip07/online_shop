import styled from "styled-components"
import API from "../../utils/axios";
import { ComponentsStyle, ComponentsStyleBtn } from "../util/components";
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteBlog } from "../../utils/api";

function Blog({ data }) {
    const navigate = useNavigate()
    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    function DeleteBlog(id) {
        API.delete(`${deleteBlog}/${id}`)
            .then(res => {
                notify(`Success`, res.status)
            })
            .catch(err => notify(err.response?.data?.message, err.response?.status))
    }

    return (
        <Wrapper style={ComponentsStyle}>
            <ToastContainer />
            <div className="blog-item ">
                <div className="itemBlogImg ">
                    <div className="article-image banners">
                        <div>
                            <Link className="popup-gallery" to="#">
                                <img src={`${data.image}`} alt="Kire tuma demonstraverunt lector" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="itemBlogContent ">
                    <div className="article-title">
                        <h4>
                            <Link to="/blog-detail">{data.title}</Link>
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
                            onClick={() => navigate(`/blog/update/${data.id}`)}
                        >
                            <i className="fa-solid fa-pen-to-square mr-1"></i>
                            <span>Edit</span>
                        </button>

                        <button
                            className="compare mr-1 p-1"
                            type="button"
                            data-toggle="tooltip"
                            title="Delete"
                            onClick={() => DeleteBlog(data.id)}
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