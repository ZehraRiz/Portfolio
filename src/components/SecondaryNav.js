import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Link } from "gatsby";
export const SecondaryNav = ({ page, isProjectDescription }) => {
	return (
		<div className="container ">
			<div className="secondary_nav-container">
				<div className="secondary_nav-text">
					{page === "Projects" ? (
						<>
						<motion.h2
							className="secondary_nav-heading"
							initial={{ x: "-100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 1, duration: 0.2, stiffness: 60, type: "spring" }}>
								Hello! I am a passionate full-stack developer, meticulios app tester developer and skilled
								coder.
						</motion.h2>
							<motion.p
						className="secondary_nav-subheading"
						initial={{ y: -200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ type: "spring", duration: 0.2, delay: 1.3, stiffness: 80 }}>
								Freelance programmer based in Riyadh
					</motion.p>
							</>

					) : (
							<>
						<h2 className="secondary_nav-heading">
									Hello! I am a passionate full-stack developer, meticulios app tester developer and skilled
									coder.
						</h2>
								<p className="secondary_nav-subheading">
									Freelance programmer based in Riyadh
									</p>

								</>
					)}

				
				</div>

				<div className="secondary_nav-icons">
					<a href="https://github.com/ZehraRiz" target="_blank">
						<FontAwesomeIcon icon={faGithub} className="secondary_nav-icon" />
					</a>
					<a href="https://www.linkedin.com/in/zehrataqi" target="_blank">
						<FontAwesomeIcon icon={faLinkedinIn} className="secondary_nav-icon" />
					</a>
					<a href="https://twitter.com/zehrataqi_" target="_blank">
						<FontAwesomeIcon icon={faTwitter} className="secondary_nav-icon" />
					</a>
				</div>
			</div>
			<div className="secondary_nav-page-heading">
				<h4>
					{page}
					<span className="pink">.</span>
				</h4>
				{isProjectDescription === true && (
					<Link to="/" className="link-btn">
						back to all projects
					</Link>
				)}
			</div>
		</div>
	);
};
