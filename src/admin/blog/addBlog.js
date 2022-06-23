import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../containers/utils/axios";
import { bottomForm } from "../adminComponents/components"

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
                            <strong>Create Blog</strong>
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
                    <div className="bottom-form" style={bottomForm}>

                        <button
                            className="btn btn-default pull-right col-lg-4"
                            onClick={Submit}
                        >
                            Create Blog
                        </button>

                        <button
                            className="btn btn-default pull-right col-lg-4"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default AddBlog;

const Wrapper = styled.div`
 .bottom-form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
 }
`;
