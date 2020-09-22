import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {ProjectsLink} from "../components"

export const NavBar = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	return (
		<nav className={isOpen ? "open" : ""}>
			<div
				className="overlay"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<div className="nav">
				<div className="mobile-nav">
					<Link to="/index">
						<h1>Z<span className="pink">.</span></h1>
					</Link>
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
						<h2>
							<ProjectsLink to="/" className="nav-link">
								Projects
								</ProjectsLink>
						</h2>
					</li>
					<li className="nav-item">
						<h2>
							<Link to="/about" className="nav-link" activeClassName="active">
								About
							</Link>
						</h2>
					</li>
					<li>
						<h2>
							<Link to="/blog" className="nav-link" activeClassName="active">
								Blog
							</Link>
						</h2>
					</li>
					<li>
						<h2>
							<Link to="/contact" className="nav-link" activeClassName="active">
								Contact
							</Link>
						</h2>
					</li>
				</ul>
			</div>
		</nav>
	);
};
