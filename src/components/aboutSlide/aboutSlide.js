import { Link } from "react-router-dom"
function AboutTeamMembearCard({ data }) {
  return (
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
              <li className="social-icon github">
                <Link className="fab fa-github" to="#" title="Git Hub">
                  <span>Git Hub</span>
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
              <li className="social-icon linkedin">
                <Link className="fab fa-linkedin-in" to="#" title="Linkedin">
                  <span>Linkedin</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default AboutTeamMembearCard;

