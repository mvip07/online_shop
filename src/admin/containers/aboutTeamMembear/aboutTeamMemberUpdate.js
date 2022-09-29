import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import API from "../../../utils/axios"
import { bottomForm } from "../../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data, send } from "../../../utils/firebaseImageSend"
import { selectedAboutTeamMembear, updateAboutTeamMembear } from "../../../utils/api"

function AddAboutTeamMembearUpdate() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [aboutTeamMembear, setAboutTeamMembear] = useState([])
    const [title, setTitle] = useState("")
    const [job, setJob] = useState("")
    const [description, setDescription] = useState("")
    const [githubUrl, setGithubUrl] = useState("")
    const [facebookUrl, setFacebookUrl] = useState("")
    const [twitterUrl, setTwitterUrl] = useState("")
    const [linkedinUrl, setLinkedinUrl] = useState("")
    const [image, setImage] = useState("")
    const [updateImg, setUpdateImg] = useState("")
    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    useEffect(() => {
        API.get(`${selectedAboutTeamMembear}/${id}`).then(res => setAboutTeamMembear(res.data))
    }, [id])

    const Submit = () => {
        send(image)
        setTimeout(() => {
            let img = data.pop()
            setUpdateImg(img)
            API.post(`${updateAboutTeamMembear}`, {
                "title": title == "" ? aboutTeamMembear.title : title,
                "job": job == "" ? aboutTeamMembear.job : job,
                "description": description == "" ? aboutTeamMembear.description : description,
                "githubUrl": githubUrl == "" ? aboutTeamMembear.githubUrl : githubUrl,
                "facebookUrl": facebookUrl == "" ? aboutTeamMembear.facebookUrl : facebookUrl,
                "twitterUrl": twitterUrl == "" ? aboutTeamMembear.twitterUrl : twitterUrl,
                "linkedinUrl": linkedinUrl == "" ? aboutTeamMembear.linkedinUrl : linkedinUrl,
                "image": image == "" ? aboutTeamMembear.image : updateImg,
                "id": id,
            })
                .then((res) => notify(`Success`, res.status))
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
                            <strong>Update About Team Membear</strong>
                        </p>
                        <div className="form-group">
                            <label className="control-label ">Enter your Title</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={aboutTeamMembear.title}
                                onChange={({ target }) => setTitle(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Job</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={aboutTeamMembear.job}
                                onChange={({ target }) => setJob(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Description</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={aboutTeamMembear.description}
                                onChange={({ target }) => setDescription(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Git Hub Link</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={aboutTeamMembear.githubUrl}
                                onChange={({ target }) => setGithubUrl(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Facebook Link</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={aboutTeamMembear.facebookUrl}
                                onChange={({ target }) => setFacebookUrl(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="control-label ">Enter your Twitter Link</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={aboutTeamMembear.twitterUrl}
                                onChange={({ target }) => setTwitterUrl(target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="control-label ">Enter your Linkedin Link</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={aboutTeamMembear.linkedinUrl}
                                onChange={({ target }) => setLinkedinUrl(target.value)}
                            />
                        </div>

                        <div style={{ display: "flex", gap: "50px" }}>
                            <div className="form-group">
                                <p className="control-label ">Image</p>
                                <img src={aboutTeamMembear.image} alt="" width="200px" />
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
                            Update About Team Membear
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default AddAboutTeamMembearUpdate
const Wrapper = styled.div``