import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const NavBar = ({ page }) => {

	const [ isOpen, setIsOpen ] = useState(false);

	return (
		<nav className={isOpen ? "open" : ""}>
			<div className="overlay" />
			<div className="nav">
				<div className="mobile-nav">
					<h2>{page}<span className="pink">.</span></h2>
					<FontAwesomeIcon
						className="nav-icon"
						icon={faBars}
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					/>
				</div>

				<ul className="nav-list">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Z
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link">
							About me
						</Link>
					</li>
					<li>
						<Link to="/projects" className="nav-link">
							My projects
						</Link>
					</li>
					<li>
						<Link to="/blog" className="nav-link">
							Blog
						</Link>
					</li>
					<li>
						<Link to="/contact" className="nav-link">
							Connect
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
