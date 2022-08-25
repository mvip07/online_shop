import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../utils/axios";
import { ComponentsStyle, ComponentsStyleBtn } from "../util/components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteAboutCompany } from "../../utils/api";

function AboutCompany({ data }) {
    const navigate = useNavigate()
    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    function DeleteAboutCompany(id) {
        API.delete(`${deleteAboutCompany}/${id}`)
            .then((res) => {
                notify(`Success`, res.status)
            })
            .catch(err => notify(err.response?.data?.message, err.response?.status))
    }

    return (
        <Wrapper style={ComponentsStyle}>
            <ToastContainer />
            <div>
                <Link to="#">

                    {
                        data.type === "video/mp4" ?
                            <video src={`${data.image}`}
                                className="img-responsive"
                                width="500px"
                                height="300px"
                                controls={true}
                            />
                            :
                            <img
                                src={`${data.image}`}
                                alt="slider1"
                                className="img-responsive"
                                width="500px"
                                height="300px"
                            />
                    }

                </Link>
                <div className="button-group mr-1 " style={ComponentsStyleBtn}>
                    <button
                        className="addToCart mr-1 p-1"
                        type="button"
                        data-toggle="tooltip"
                        title="Edit"
                        onClick={() => navigate(`/about/company/update/${data.id}`)}
                    >
                        <i className="fa-solid fa-pen-to-square mr-1"></i>
                        <span>Edit</span>
                    </button>

                    <button
                        className="compare mr-1 p-1"
                        type="button"
                        data-toggle="tooltip"
                        title="Delete"
                        onClick={() => DeleteAboutCompany(data.id)}
                    >
                        <i className="fa-solid fa-trash-can mr-1"></i>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </Wrapper>

    );
}

export default AboutCompany;
const Wrapper = styled.div``
