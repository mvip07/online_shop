import { Link, useNavigate } from "react-router-dom"
function AboutTeamMembearCard({ data }) {
  console.log(data)
  const navigate = useNavigate()
  return (
    <div className="yt-content-slide yt-clearfix yt-content-wrap">
      <div className="item">
        <div className="member">
          <div className="member-image">
            <img
              src={`${data.image}`}
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
                <Link className="fa fa-rss" to="#">
                  <span>RSS</span>
                </Link>
              </li>
              <li className="social-icon facebook">
                <Link className="fa fa-facebook" to="#" title="Facebook">

                  <span>Facebook</span>
                </Link>
              </li>
              <li className="social-icon twitter">
                <Link className="fa fa-twitter" to="#" title="Twitter">
                  <span>Twitter</span>
                </Link>
              </li>
              <li className="social-icon google">
                <Link className="fa fa-google" to="#" title="Google">
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

