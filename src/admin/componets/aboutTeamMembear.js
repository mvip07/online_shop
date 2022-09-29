import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { deleteAboutTeamMembear } from "../../utils/api"
import API from "../../utils/axios"

function AboutTeamMembearPiece({ data }) {
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
        <div className="ltabs-item product-layout">
            <div className="product-item-container">
                <div className="left-block">
                    <div className="product-image-container second_img product-img">
                        <img
                            src={`${data.image}`}
                            alt='Apple Cinema 30"'
                            className="img-responsive"
                        />
                    </div>

                    <div
                        className="quickview iframe"
                        data-fancybox-type="iframe"
                        onClick={() => navigate(`/about/company/detail/${data._id}`)}
                    >
                        Quickview
                    </div>
                </div>
                <div className="right-block">
                    <div className="caption">
                        <h4>
                            <p>{data.title}</p>
                        </h4>
                    </div>
                    <ul className="social-member" style={{listStyle: "none"}}>
                        <li className="social-icon github" >
                            <a className="fab fa-github"  href={data.githubUrl} target="_block" title="Git Hub">
                                <span style={{marginLeft: "10px"}}>Git Hub</span>
                            </a>
                        </li>
                        <li className="social-icon facebook">
                            <a className="fa fa-facebook" href={data.facebookUrl} target="_block" title="Facebook">

                                <span style={{marginLeft: "10px"}}>Facebook</span>
                            </a>
                        </li>
                        <li className="social-icon twitter">
                            <a className="fa fa-twitter" href={data.twitterUrl} target="_block" title="Twitter">
                                <span style={{marginLeft: "10px"}}>Twitter</span>
                            </a>
                        </li>
                        <li className="social-icon linkedin">
                            <a className="fab fa-linkedin-in" href={data.linkedinUrl} target="_block" title="Linkedin">
                                <span style={{marginLeft: "10px"}}>Linkedin</span>
                            </a>
                        </li>
                    </ul>
                    <div className="button-group">
                        <button
                            className="addToCart"
                            type="button"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            onClick={() => navigate(`/about/company/edit/${data._id}`)}

                        >
                            <i className="fa fa-shopping-cart"> </i>
                            <span>Edit</span>
                        </button>
                        <button
                            className="addToCart"
                            type="button"
                            data-toggle="tooltip"
                            title="Add to Wish List"
                            onClick={() => DeleteAboutTeamMembear(data._id)}

                        >
                            <i className="fa fa-heart"> </i>
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutTeamMembearPiece