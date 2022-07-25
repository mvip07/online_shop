import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import API from "../../utils/axios"
import { bottomForm } from "../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data, send } from "../../utils/firebaseImageSend"
import { createAboutTeamMembear } from "../../utils/api"

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
    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }
    const Submit = () => {
        send(image)
        let form = new FormData();
        setTimeout(() => {
            let img = data.pop()
            form.append("title", title);
            form.append("job", job);
            form.append("description", description);
            form.append("githubUrl", githubUrl);
            form.append("facebookUrl", facebookUrl);
            form.append("twitterUrl", twitterUrl);
            form.append("linkedinUrl", linkedinUrl);
            form.append("image", img);

            API.post(`${createAboutTeamMembear}`, form)
                .then((res) => {
                    notify(`Success`, res.status)
                    setTimeout(() => {
                        navigate("/adminMain")
                    }, 5500)
                })
                .catch(err => notify("Something is wrong!", err.response?.status))
        }, 2000)

    };

    return (
        <Wrapper >
            <ToastContainer />
            <div>
                <div className="col-lg-12 customer-login">
                    <div className="well">
                        <p>
                            <strong>Create About Team Membear</strong>
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
                            Create About Team Membear
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default AddAboutTeamMembear
const Wrapper = styled.div``