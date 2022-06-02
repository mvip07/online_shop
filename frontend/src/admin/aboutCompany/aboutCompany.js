import API from "../../containers/utils/axios";

function AboutCompany({ data }) {
    function DeleteAboutCompany(id) {
        API.delete(`/aboutCompany/${id}`).then((res) => console.log(res));
    }

    return (
        <div className="yt-content-slide" key={Math.random()}>
            <a href="#">

                {
                    data.type === "video/mp4" ?
                        <video src={`http://localhost:8000/${data.image}`}
                            className="img-responsive"
                            width="500px"
                            height="300px"
                            controls={true}
                        />
                        :
                        <img
                            src={`http://localhost:8000/${data.image}`}
                            alt="slider1"
                            className="img-responsive"
                            width="500px"
                            height="300px"
                        />
                }

            </a>
            <div className="button-group mr-1 ">
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
                    onClick={() => DeleteAboutCompany(data.id)}
                >
                    <i className="fa-solid fa-trash-can mr-1"></i>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
}

export default AboutCompany;
