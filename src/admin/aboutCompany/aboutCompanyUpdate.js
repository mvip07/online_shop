import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import API from "../../utils/axios";
import { bottomForm } from "../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { send, data } from "../../utils/firebaseImageSend";
import { updateAboutCompany } from "../../utils/api";

function AboutCompanyUpdate() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [aboutCompany, setAboutCompany] = useState([])
    const [companyName, setCompanyName] = useState("")
    const [image, setImage] = useState("")
    const [updateImg, setUpdateImg] = useState("")

    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    useEffect(() => {
        API.get(`/aboutCompany/${id}`).then(res => setAboutCompany(res.data))
    }, [id])

    const Submit = () => {
        send(image)
        let form = new FormData();

        setTimeout(() => {
            let img = data.pop()
            setUpdateImg(img)
            form.append("title", companyName === "" ? aboutCompany.title : companyName);
            form.append("image", image === "" ? aboutCompany : img);
            form.append("id", id)

            API.post(`${updateAboutCompany}`, form)
                .then((res) => {
                    notify(`Success`, res.status)
                    setTimeout(() => {
                        navigate("/adminMain")
                    }, 5500)
                })
                .catch(err => notify(err.response?.data?.message, err.response?.status))


        }, 2000)
    }

    return (
        <div>
            <ToastContainer />
            <div className="col-lg-12 customer-login">
                <div className="well">
                    <p>
                        <strong>Update About Company</strong>
                    </p>
                    <div className="form-group">
                        <label className="control-label ">Enter your Company Name</label>

                        <input
                            type="text"
                            className="form-control"
                            defaultValue={aboutCompany.title}
                            onChange={({ target }) => setCompanyName(target.value)}
                        />
                    </div>

                    <div style={{ display: "flex", gap: "50px" }}>
                        <div className="form-group">
                            <p className="control-label ">Image</p>
                            <img src={aboutCompany.image} alt="" width="200px" />
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
                        Update About Company
                    </button>

                </div>
            </div>
        </div>
    )
}

export default AboutCompanyUpdate;
