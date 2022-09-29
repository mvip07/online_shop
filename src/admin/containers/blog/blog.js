import styled from "styled-components"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { allBlogs } from "../../../utils/api";
import BlogPiece from "../../componets/blog";
import { useState, useEffect } from "react";
import API from "../../../utils/axios";

function Blog() {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        API.get(allBlogs)
            .then(res => setBlog(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Wrapper>
            <ToastContainer />
            <div className="module tab-slider titleLine">
                <h3 className="modtitle">Blog</h3>
                <div
                    id="so_listing_tabs_2"
                    className="so-listing-tabs first-load module"
                >
                    <div className="ltabs-items-container">
                        <div
                            className="ltabs-items ltabs-items-selected items-category-20 grid"
                            data-total="10"
                        >
                            <div className="ltabs-items-inner ltabs-slider">
                                
                                    {
                                        blog.map((data) => {
                                            return (
                                                <BlogPiece data={data} key={Math.random()} />
                                            )
                                        })
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Blog
const Wrapper = styled.div`
    padding: 20px;
`