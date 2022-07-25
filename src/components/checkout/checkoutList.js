import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { notify } from "../../containers/chekout/chekout";
import API from "../../utils/axios";
function CheckoutList({ data }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("onlineShopUser"))?.user.id)

    useEffect(() => {
        setUserId(JSON.parse(localStorage.getItem("onlineShopUser"))?.user.id)
    }, [userId])

    function CheckoutDelete(id) {
        API.delete(`/delete/bag/${userId}/${id}`)
            .then(res => notify(res.data.message, res.status))
            .catch(err => notify(err.message, err.response.status))
    }

    return (
        <tr>
            <td className="text-center">
                <Link to="#">
                    <img
                        width="70px"
                        src={`${data.image}`}
                        alt="Img"
                        title="Aspire Ultrabook Laptop"
                        className="img-thumbnail"
                    />
                </Link>
            </td>
            <td className="text-left">
                <Link to="#">{data.title}</Link>
                <br />
            </td>
            <td className="text-left">{data.model}</td>
            <td className="text-left grid">
                <div
                    className="color-box"
                    style={{ background: `${data.color}` }}
                ></div>
            </td>
            <td className="text-left">{data.quantity}</td>
            <td className="text-right">${data.price}</td>
            <td className="text-right">${data.totalPrice}</td>
            <td className="text-center">
                <button
                    type="submit"
                    data-toggle="tooltip"
                    title="Update"
                    className="btn btn-danger"
                    onClick={() => {
                        CheckoutDelete(data.bagId);
                        notify();
                    }}
                >
                    Delete
                </button>

            </td>
        </tr>
    );
}

export default CheckoutList;