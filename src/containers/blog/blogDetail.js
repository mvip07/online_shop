import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { selectedBlog } from "../../utils/api";
import API from "../../utils/axios";

function BlogDetail() {

    const { id } = useParams()
    const [blogDetail, setBlogDetail] = useState({})
    useEffect(() => {
        API.get(`${selectedBlog}/${id}`)
            .then(res => setBlogDetail(res.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <Navbar />
            <div className="container">
                <ul className="breadcrumb">
                    <li>
                        <Link to="/">
                            <i className="fa fa-home">
                            </i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="#">Blog-detail</Link>
                    </li>
                </ul>

                <div className="row">
                    <aside className="col-sm-4 col-md-3" id="column-left">
                        <div className="module blog-category titleLine">
                            <h3 className="modtitle">Blog Category</h3>
                        </div>
                    </aside>

                    <div id="content" className="col-md-9 col-sm-8">
                        <div className="article-info">
                            <div className="blog-header">
                                <h3></h3>
                            </div>
                            <div className="article-sub-title">
                                <span className="article-author">Post: {blogDetail.postIntruder}</span>
                                <span className="article-date">Created Date: {(blogDetail.createdDate)?.substring(0, 10)}</span>
                                <span className="article-comment">0 Comments</span>
                            </div>
                            <div className="form-group">
                                <Link to="#" className="image-popup"><img src={blogDetail.image} alt="Kire tuma demonstraverunt lector" /></Link>
                            </div>

                            <div className="article-description">
                                <p>{blogDetail.description}</p>
                            </div>

                            <div className="panel panel-default related-comment">
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div id="comments" className="blog-comment-info">

                                            <h3 id="review-title">Leave your comment </h3>
                                            <input type="hidden" name="blog_article_reply_id" defaultValue="0" id="blog-reply-id" />
                                            <div className="comment-left contacts-form row">
                                                <div className="col-md-8">
                                                    <b>Your Name:</b>
                                                    <input type="text" name="name" defaultValue="" className="form-control" />
                                                    <br></br>
                                                    <br></br>
                                                </div>
                                                <div className="col-md-8">
                                                    <b>Your Comment:</b>
                                                    <textarea rows="6" cols="50" name="text"
                                                        className="form-control"></textarea>
                                                    <span style={{ fontSize: "11px" }}>Note: HTML is not translated!</span>
                                                    <br></br>
                                                    <br></br>
                                                </div>
                                            </div>

                                            <div className="text-left"><Link to="#" id="button-comment"
                                                className="btn buttonGray"><span>Submit</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogDetail;