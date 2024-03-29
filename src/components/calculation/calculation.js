function Calculation({ data }) {
    const productPrice = []
    if (data !== undefined) {
        for (let item of data) {
            productPrice.push(item.totalPrice)
        }
    }
    let price = 0;
    for (let i in productPrice) {
        price += productPrice[i];
    }

    let flatShipping = price / 100
    let tax = price / 100
    let vat = price / 1000
    let total = flatShipping + tax + vat + price

    return (
        <tbody>
            <tr>
                <td className="text-right" colSpan="5">
                    <strong>Products-total:</strong>
                </td>
                <td className="text-right">$ {(price).toFixed(2)} </td>
            </tr>
            <tr>
                <td className="text-right" colSpan="5">
                    <strong>Flat Shipping Rate:</strong>
                </td>
                <td className="text-right">$ {(flatShipping).toFixed(2)}</td>
            </tr>
            <tr>
                <td className="text-right" colSpan="5">
                    <strong>Tax (1%):</strong>
                </td>
                <td className="text-right">$ {(tax).toFixed(2)}</td>
            </tr>
            <tr>
                <td className="text-right" colSpan="5">
                    <strong>VAT (20%):</strong>
                </td>
                <td className="text-right">$ {(vat).toFixed(2)}</td>
            </tr>
            <tr>
                <td className="text-right" colSpan="5">
                    <strong>Total:</strong>
                </td>

                <td className="text-right">$ {(total).toFixed(2)}
                </td>
            </tr>
        </tbody>
    )
}

export default Calculation