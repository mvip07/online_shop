import styled from "styled-components";
import API from "../../utils/axios";
import { ComponentsStyle, ComponentsStyleBtn } from "../util/components"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteAboutTeamMembear } from "../../utils/api";

function AboutTeamMembear({ data }) {
    const navigate = useNavigate()
    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    function DeleteAboutTeamMembear(id) {
        API.delete(`${deleteAboutTeamMembear}/${id}`)
            .then((res) => {
                notify(`Success`, res.status)
            })
            .catch(err => { console.log(err); notify("Something is wrong!", err.response?.status) })
    }
    return (
        <Wrapper style={ComponentsStyle}>
            <ToastContainer />
            <div className="yt-content-slide yt-clearfix yt-content-wrap">
                <div className="item">
                    <div className="member">
                        <div className="member-image">
                            <img src={`${data.image}`} alt="" />
                        </div>
                        <div className="member-info">
                            <h3 className="name-member">{data.title}</h3>
                            <p className="job-member">{data.job}</p>
                            <p className="des-member">
                                {data.description?.length > 50 ? `${(data.description).substring(0, 50)}...` : data.description}
                            </p>
                            <ul className="social-member">
                                <li className="social-icon rss">
                                    <Link to={data.githubUrl} title="RSS">
                                        <span>Git Hub</span>
                                    </Link>
                                </li>
                                <li className="social-icon facebook">
                                    <Link to="#" title="Facebook">
                                        <span>Facebook</span>
                                    </Link>
                                </li>
                                <li className="social-icon twitter">
                                    <Link to="#" title="Twitter">
                                        <span>Twitter</span>
                                    </Link>
                                </li>
                                <li className="social-icon google">
                                    <Link to="#" title="Google">
                                        <span>Linked in</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="button-group mr-1" style={ComponentsStyleBtn}>
                        <button
                            className="addToCart mr-1 p-1"
                            type="button"
                            data-toggle="tooltip"
                            title="Edit"
                            onClick={() => navigate(`/about/team/member/update/${data.id}`)}
                        >
                            <i className="fa-solid fa-pen-to-square mr-1"></i>
                            <span>Edit</span>
                        </button>

                        <button
                            className="compare mr-1 p-1"
                            type="button"
                            data-toggle="tooltip"
                            title="Delete"
                            onClick={() => DeleteAboutTeamMembear(data.id)}
                        >
                            <i className="fa-solid fa-trash-can mr-1"></i>
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default AboutTeamMembear
const Wrapper = styled.div``