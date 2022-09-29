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
							<a className="fab fa-github" href={data.githubUrl} target="_block" title="Git Hub">
								<span>Git Hub</span>
							</a>
						</li>
						<li className="social-icon facebook">
							<a className="fa fa-facebook" href={data.facebookUrl} target="_block" title="Facebook">

								<span>Facebook</span>
							</a>
						</li>
						<li className="social-icon twitter">
							<a className="fa fa-twitter" href={data.twitterUrl} target="_block" title="Twitter">
								<span>Twitter</span>
							</a>
						</li>
						<li className="social-icon linkedin">
							<a className="fab fa-linkedin-in" href={data.linkedinUrl} target="_block" title="Linkedin">
								<span>Linkedin</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AboutTeamMembearCard;

