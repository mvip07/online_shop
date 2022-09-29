import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import API from "../../../utils/axios";
import { bottomForm } from "../../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { send, data } from "../../../utils/firebaseImageSend";
import { selectedAdvertising, updateAdvertising } from "../../../utils/api";

function AdvertisingUpdate() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [advertising, setAdvertising] = useState([])
    const [firma, setFirma] = useState("")
    const [image, setImage] = useState("")
    const [type, setType] = useState("")
    const [updateImg, setUpdateImg] = useState("")

    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    useEffect(() => {
        API.get(`${selectedAdvertising}/${id}`).then(res => setAdvertising(res.data))
    }, [id])

    function Submit() {
        send(image)
        setTimeout(() => {
            let img = data.pop()
            setUpdateImg(img)         
            API.post(`${updateAdvertising}`, {
                "firma": firma === "" ? advertising.firma : firma,
                "image": image === "" ? advertising.image : updateImg,
                "type": type === "" ? advertising.type : type,
                "id": id,
            })
                .then((res) => notify(`Success`, res.status))
                .catch(err => notify(err.response?.data?.message, err.response?.status))
        }, 2000)

    }

    return (
        <Wrapper>
            <ToastContainer />
            <div>
                <div className="col-lg-12">
                    <div className="well">
                        <p>
                            <strong>Update Advertising</strong>
                        </p>
                        <div className="form-group">
                            <label className="control-label ">Enter your Firma</label>

                            <input
                                type="text"
                                className="form-control"
                                defaultValue={advertising.firma}
                                onChange={({ target }) => setFirma(target.value)}
                            />
                        </div>

                        <div style={{ display: "flex", gap: "50px" }}>
                            <div className="form-group">
                                <p className="control-label ">Image</p>
                                <img src={advertising.image} alt="" width="200px" />
                            </div>

                            <div className="form-group">
                                <p className="control-label ">Update Image</p>
                                <img src={updateImg} alt="" width="200px" />
                            </div>

                        </div>

                        <div className="form-group">
                            <input type="file" className="form-control"
                                onChange={({ target }) => { setImage(target.files[0]); setType(target.files[0].type) }}
                            />
                        </div>
                    </div>
                    <div className="bottom-form" style={bottomForm}>
                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-default pull-right col-lg-4">Back
                        </button>
                        <button onClick={() => {
                            Submit();
                            notify();
                        }} className="btn btn-default pull-right col-lg-4" >
                            Update Advertising
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default AdvertisingUpdate;

const Wrapper = styled.div``;
