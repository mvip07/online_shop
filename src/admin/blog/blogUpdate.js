import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import API from "../../utils/axios";
import { bottomForm } from "../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data, send } from "../../utils/firebaseImageSend";
import { selectedBlog, updateBlog } from "../../utils/api";

function BlogUpdate() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [blog, setBlog] = useState([])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [postIntruder, setPostIntruder] = useState("");
    const [image, setImage] = useState("");
    const [updateImg, setUpdateImg] = useState("")

    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    useEffect(() => {
        API.get(`${selectedBlog}/${id}`).then(res => setBlog(res.data))
    }, [id])

    const Submit = () => {
        send(image)
        setTimeout(() => {
            let img = data.pop()
            setUpdateImg(img)
            API.post(`${updateBlog}`, {
                "title": title === "" ? blog.title : blog,
                "description": description === "" ? blog.description : description,
                "postIntruder": postIntruder === "" ? blog.postIntruder : postIntruder,
                "image": image === "" ? blog.image : updateImg,
                "id": id,
            })
                .then(res => {
                    notify(`Success`, res.status)
                    setTimeout(() => {
                        navigate("/adminMain")
                    }, 5500)
                })
                .catch(err => notify(err.response?.data?.message, err.response?.status))
        }, 2000)

    }

    return (
        <Wrapper>
            <ToastContainer />
            <div>
                <div className="col-lg-12 customer-login">
                    <div className="well">
                        <p>
                            <strong>Update Blog</strong>
                        </p>
                        <div className="form-group">
                            <label className="control-label ">Enter your Title</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={blog.title}
                                onChange={({ target }) => setTitle(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Description</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={blog.description}
                                onChange={({ target }) => setDescription(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Post Intruder</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={blog.postIntruder}
                                onChange={({ target }) => setPostIntruder(target.value)}
                            />
                        </div>
                        <div style={{ display: "flex", gap: "50px" }}>
                            <div className="form-group">
                                <p className="control-label ">Image</p>
                                <img src={blog.image} alt="" width="200px" />
                            </div>

                            <div className="form-group">
                                <p className="control-label ">Update Image</p>
                                <img src={updateImg} alt="" width="200px" />
                            </div>

                        </div>
                        <div className="form-group">
                            <label className="control-label">Image</label>
                            <input type="file" className="form-control" onChange={({ target }) => setImage(target.files[0])} />
                        </div>
                    </div>
                    <div className="bottom-form" style={bottomForm}>
                        <button
                            className="btn btn-default pull-right col-lg-4"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                        <button
                            className="btn btn-default pull-right col-lg-4"
                            onClick={() => {
                                Submit();
                                notify();
                            }}
                        >
                            Update Blog
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default BlogUpdate;

const Wrapper = styled.div`
 .bottom-form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
 }
`;
