import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {  Link } from "gatsby";
export const SecondaryNav = ({ page, isProjectDescription }) => {
	console.log(isProjectDescription)
	return (
		<div className="container secondary_nav-container">
			<div className="secondary_nav-text">
				<h2 className="secondary_nav-heading">
					Hello! I am a passionate full-stack developer, meticulios app tester developer and skilled coder.
				</h2>
				<p className="secondary_nav-subheading">Freelance programmer based in Riyadh</p>
			</div>

			<div className="secondary_nav-icons">
				<FontAwesomeIcon icon={faGithub} className="secondary_nav-icon" />
				<FontAwesomeIcon icon={faLinkedinIn} className="secondary_nav-icon" />
				<FontAwesomeIcon icon={faTwitter} className="secondary_nav-icon" />
					</div>
			{/* <div className="secondary_nav-divider">
					<hr></hr>
			</div> */}
			<div className="secondary_nav-page-heading">
				<h4>{page}<span className="pink">.</span></h4>
			{/* {isProjectDescription === true && <Link to="/" className="link-btn">
					 back to all projects
				</Link>} */}
			</div>
		</div>
	);
};
