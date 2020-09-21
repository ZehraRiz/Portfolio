import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export const SecondaryNav = () => {
	return (
		<div className="container secondary_nav-container">
			<div className="secondary_nav-text">
				<h2 className="secondary_nav-heading">
					Hello! I am a passionate full-stack developer, meticulios app tester developer and skilled coder.
				</h2>
				<p className="secondary_nav-subheading">Freelance programmer based in Riyadh</p>
			</div>

			<div className="secondary_nav-icons">
				<FontAwesomeIcon icon={faGithubSquare} className="secondary_nav-icon" />
				<FontAwesomeIcon icon={faLinkedin} className="secondary_nav-icon" />
				<FontAwesomeIcon icon={faTwitterSquare} className="secondary_nav-icon" />
			</div>
		</div>
	);
};
