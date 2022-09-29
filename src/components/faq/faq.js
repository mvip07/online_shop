import { useState } from "react"

function Faq({data}) {
    const [boolean, setBoolean] = useState(false)
    return (
        <li className="accordion-group">
            <h3 className={`accordion-heading ${boolean == true ? "active" : ""}`} onClick={() => boolean == false ? setBoolean(true) : setBoolean(false)}>
                <i className="fa fa-plus-square"></i>
                <span>
                    {data.heading}
                </span>
            </h3>
            <div className="accordion-inner" style={{ display: boolean == false ? "none" : "block" }}>
                <p>
                    {data.inner}
                </p>
            </div>
        </li>
    )
}

export default Faq