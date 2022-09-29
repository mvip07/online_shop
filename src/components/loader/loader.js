import "./loader.css"

function Loader () {
    return (
        <div className="loader-container">
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <p>Loading...</p>
        </div>
    )
}

export default Loader