import { Link } from "react-router-dom"
function AboutTeamMembearCard({ data }) {
  // const [aboutTeamMembearData, setAboutTeamMembearData] = useState([])

  // useEffect(() => {
  //   API.get(`/aboutTeamMembears`).then(res => setAboutTeamMembearData(res.data))
  // }, [])

  return (
    <div className="yt-content-slide yt-clearfix yt-content-wrap" key={Math.random()}>
      <div className="item">
        <div className="member">
          <div className="member-image">
            <img
              src={`http://localhost:8000/${data.image}`}
              alt=""
            />
          </div>
          <div className="member-info">
            <h3 className="name-member">{data.title}</h3>
            <p className="job-member">{data.job}</p>
            <p className="des-member">
              {data.description}
            </p>
            <ul className="social-member">
              <li className="social-icon rss">
                <Link className="fa fa-rss" href="#">
                  <span>RSS</span>
                </Link>
              </li>
              <li className="social-icon facebook">
                <Link className="fa fa-facebook" href="#" title="Facebook">

                  <span>Facebook</span>
                </Link>
              </li>
              <li className="social-icon twitter">
                <Link className="fa fa-twitter" href="#" title="Twitter">
                  <span>Twitter</span>
                </Link>
              </li>
              <li className="social-icon google">
                <Link className="fa fa-google" href="#" title="Google">
                  <span>Google</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeamMembearCard;

