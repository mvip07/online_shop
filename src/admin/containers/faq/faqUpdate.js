import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import API from "../../../utils/axios";
import { bottomForm } from "../../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectedFaq, updateFaq } from "../../../utils/api";

function FaqUpdate() {
    const navigate = useNavigate()
    const { id } = useParams()
	const [faq, setFaq] = useState({});
    const [heading, setHeading] = useState("")
    const [inner, setInner] = useState("")

    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    useEffect(() => {
        API.get(`${selectedFaq}/${id}`).then(res => setFaq(res.data))
    }, [id])

    function Submit() {
        setTimeout(() => {
            API.post(`${updateFaq}`, {
                "heading": heading == "" ? faq.heading : heading,
                "inner": inner == "" ? faq.inner : inner,
                "id": id,
            })
                .then((res) => notify(`Success`, res.status))
                .catch(err => notify(err.response?.data?.message, err.response?.status))
        }, 3000)

    }
    return (
        <Wrapper>
            <ToastContainer />
            <div>
                <div className="col-lg-12">
                    <div className="well">
                        <p>
                            <strong>Update Faq</strong>
                        </p>
                        <div className="form-group">
                            <label className="control-label ">Enter your Faq Name</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={faq.heading}
                                onChange={({ target }) => setHeading(target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="control-label ">Enter your Faq text</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={faq.inner}
                                onChange={({ target }) => setInner(target.value)}
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
                            Update Faq
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default FaqUpdate;

const Wrapper = styled.div``;
