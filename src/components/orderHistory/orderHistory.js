import { Link } from "react-router-dom"

function OrderHistoryItem({ data }) {
    return (
        <tr>
            <td className="text-center">
                <Link to={`/productDetail${data._id}`}>
                    <img
                        width="85"
                        className="img-thumbnail"
                        title="Aspire Ultrabook Laptop"
                        alt="Aspire Ultrabook Laptop"
                        src={data.image}
                    />
                </Link>
            </td>
            <td className="text-left">
                <Link to={`/productDetail/${data._id}`}>{data.title}</Link>
            </td>
            <td className="text-center">
                <div
                    className="color-box"
                    style={{ background: `${data.color}` }}
                ></div>
            </td>
            <td className="text-center">{data.quantity}</td>
            <td className="text-center">{data.stars}</td>
            <td className="text-center">{(data.date).substring(0, 10)}</td>
            <td className="text-right">$ {data.totalPrice}</td>
            <td className="text-center">
                <Link
                    className="btn btn-info"
                    title=""
                    data-toggle="tooltip"
                    to="/order-information"
                    data-original-title="View"
                >
                    <i className="fa fa-eye"> </i>
                </Link>
            </td>
        </tr>
    )
}

export default OrderHistoryItem