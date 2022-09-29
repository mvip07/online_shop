import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { deleteSearchCategory } from "../../utils/api"
import API from "../../utils/axios"

function SearchCategoryPiece({ data }) {
    const navigate = useNavigate()
    const notify = (text, status) => {
        if (status === 200 || status === 201) toast.success(`${text}`)
        if (status === 400 || status === 401 || status === 403 || status === 404 || status === 500 || status === 503) toast.error(`${text}`)
    }

    function DeleteSearchCategory(id) {
        API.delete(`${deleteSearchCategory}/${id}`)
            .then((res) => {
                notify(`Success`, res.status)
            })
            .catch(err => notify(err.response?.data?.message, err.response?.status))
    }
    return (
        <div className="ltabs-item product-layout" style={{height: "100%"}}>
            <div className="product-item-container">
                <div className="left-block">
                    <div className="product-image-container ">
                        <img
                            src={`${data.icon}`}
                            alt='Apple Cinema 30"'
                        />
                    </div>

                    <div
                        className="quickview iframe"
                        data-fancybox-type="iframe"
                        onClick={() => navigate(`/search/category/detail/${data._id}`)}
                    >
                        Quickview
                    </div>
                </div>
                <div className="right-block">
                    <div className="caption">
                        <h4>
                            <p>{data.categoryName}</p>
                        </h4>
                    </div>
                    <div className="button-group">
                        <button
                            className="addToCart"
                            type="button"
                            data-toggle="tooltip"
                            title="Add to Cart"
                            onClick={() => navigate(`/search/category/edit/${data._id}`)}

                        >
                            <i className="fa fa-shopping-cart"> </i>
                            <span>Edit</span>
                        </button>
                        <button
                            className="addToCart"
                            type="button"
                            data-toggle="tooltip"
                            title="Add to Wish List"
                            onClick={() => DeleteSearchCategory(data._id)}

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

export default SearchCategoryPiece