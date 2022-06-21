import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import API from "../../containers/utils/axios"

function AddAboutTeamMembear() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [job, setJob] = useState("")
    const [description, setDescription] = useState("")
    const [githubUrl, setGithubUrl] = useState("")
    const [facebookUrl, setFacebookUrl] = useState("")
    const [twitterUrl, setTwitterUrl] = useState("")
    const [linkedinUrl, setLinkedinUrl] = useState("")
    const [image, setImage] = useState("")

    const Submit = () => {
        let form = new FormData();
        form.append("title", title);
        form.append("job", job);
        form.append("description", description);
        form.append("githubUrl", githubUrl);
        form.append("facebookUrl", facebookUrl);
        form.append("twitterUrl", twitterUrl);
        form.append("linkedinUrl", linkedinUrl);
        form.append("image", image);

        API.post("/aboutTeamMembear", form).then((res) => navigate(-1));
    };

    return (
        <Wrapper >
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
                            <label className="control-label ">Enter your Job</label>

                            <input
                                type="text"
                                className="form-control"
                                onChange={({ target }) => setJob(target.value)}
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
                            <label className="control-label ">Enter your Git Hub Link</label>

                            <input
                                type="text"
                                className="form-control"
                                onChange={({ target }) => setGithubUrl(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Facebook Link</label>

                            <input
                                type="text"
                                className="form-control"
                                onChange={({ target }) => setFacebookUrl(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Twitter Link</label>

                            <input
                                type="text"
                                className="form-control"
                                onChange={({ target }) => setTwitterUrl(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Linkedin Link</label>

                            <input
                                type="text"
                                className="form-control"
                                onChange={({ target }) => setLinkedinUrl(target.value)}
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
    )
}

export default AddAboutTeamMembear
const Wrapper = styled.div``