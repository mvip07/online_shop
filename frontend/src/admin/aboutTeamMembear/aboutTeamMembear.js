import styled from "styled-components";
import API from "../../containers/utils/axios";
import { host } from "../../containers/utils/url";
import { ComponentsStyle, ComponentsStyleBtn } from "../adminComponents/components"

function AboutTeamMembear({ data }) {
    function DeleteAdvertising(id) {
        API.delete(`/aboutTeamMembear/${id}`).then((res) => console.log(res));
    }
    return (
        <Wrapper style={ComponentsStyle}>
            <div className="yt-content-slide yt-clearfix yt-content-wrap">
                <div className="item">
                    <div className="member">
                        <div className="member-image">
                            <img
                                src={`${host}/${data.image}`}
                                alt="Image Client"
                            />
                        </div>
                        <div className="member-info">
                            <h3 className="name-member">{data.title}</h3>
                            <p className="job-member">{data.job}</p>
                            <p className="des-member">
                                {data.description.length > 50 ? `${(data.description).substring(0, 50)}...` : data.description}
                            </p>
                            <ul className="social-member">
                                <li className="social-icon rss">
                                    <a href={data.githubUrl} title="RSS">
                                        <span>Git Hub</span>
                                    </a>
                                </li>
                                <li className="social-icon facebook">
                                    <a href="#" title="Facebook">
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li className="social-icon twitter">
                                    <a href="#" title="Twitter">
                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li className="social-icon google">
                                    <a href="#" title="Google">
                                        <span>Linked in</span>
                                    </a>
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
                        >
                            <i className="fa-solid fa-pen-to-square mr-1"></i>
                            <span>Edit</span>
                        </button>

                        <button
                            className="compare mr-1 p-1"
                            type="button"
                            data-toggle="tooltip"
                            title="Delete"
                            onClick={() => DeleteAdvertising(data.id)}
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