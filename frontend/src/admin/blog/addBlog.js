import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../containers/utils/axios";

function AddBlog() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [postIntruder, setPostIntruder] = useState("");
    const [image, setImage] = useState("");

    const Submit = () => {
        let form = new FormData();
        form.append("title", title);
        form.append("description", description);
        form.append("postIntruder", postIntruder)
        form.append("image", image);

        API.post("/blog", form).then((res) => navigate(-1));
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
                            <label className="control-label ">Enter your Title</label>

                            <input
                                type="text"
                                className="form-control"
                                onChange={({ target }) => setTitle(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Description</label>

                            <input
                                type="text"
                                className="form-control"
                                onChange={({ target }) => setDescription(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Post Intruder</label>

                            <input
                                type="text"
                                className="form-control"
                                onChange={({ target }) => setPostIntruder(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Image</label>
                            <input type="file" className="form-control" onChange={({ target }) => setImage(target.files[0])} />
                        </div>
                    </div>
                    <div className="bottom-form">

                        <button
                            className="btn btn-default pull-right"
                            onClick={Submit}
                        >
                            Create blog
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default AddBlog;

const Wrapper = styled.div`
  display: block;
  margin: 150px;
`;
