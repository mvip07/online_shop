import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { deleteAdvertising } from "../../utils/api"
import API from "../../utils/axios"

function AdvertisingPiece({ data }) {
    const navigate = useNavigate()

    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    function DeleteAdvertising(id) {
        API.delete(`${deleteAdvertising}/${id}`)
            .then((res) => {
                notify(`Success`, res.status)
            })
            .catch(err => notify(err.response?.data?.message, err.response?.status))
    }
    return (
        <div className="ltabs-item product-layout">
            <div className="product-item-container">
                <div className="left-block">
                    <div className="product-image-container second_img product-img">

                        {
                            data.type == "video/mp4" ?
                                <video
                                    src={data.image}
                                    alt='Apple Cinema 30"'
                                    className="img-responsive"
                                />
                                :
                                <img
                                    src={`${data.image}`}
                                    alt='Apple Cinema 30"'
                                    className="img-responsive"
                                />
                        }

                    </div>

                    <div
                        className="quickview iframe"
                        data-fancybox-type="iframe"
                        onClick={() => navigate(`/advetising/detail/${data._id}`)}
                    >
                        Quickview
                    </div>
                </div>
                <div className="right-block">
                    <div className="caption">
                        <h4>
                            <p >Brand: {data.firma}</p>
                        </h4>
                    </div>
                    <div className="button-group">
                        <button
                            className="addToCart"
                            type="button"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            onClick={() => navigate(`/advetising/edit/${data._id}`)}

                        >
                            <i className="fa fa-shopping-cart"> </i>
                            <span>Edit</span>
                        </button>
                        <button
                            className="addToCart"
                            type="button"
                            data-toggle="tooltip"
                            title="Add to Wish List"
                            onClick={() => DeleteAdvertising(data._id)}

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

export default AdvertisingPiece