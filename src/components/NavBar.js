import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ProjectsLink } from "../components";

export const NavBar = ({ page }) => {
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
					<Link to="/">
						{page === "Projects" ? (
								<motion.h1
									initial={{ y: -200 }}
									animate={{ y: 0 }}
									transition={{ type: "spring", duration: 0.2, stiffness: 120 }}>
									Z<span className="pink">.</span>
								</motion.h1>
							) : (
								<h1>
									Z<span className="pink">.</span>
								</h1>
							)
						}
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
					{page === "Projects" ?
						(
							<>
								<motion.li
						className="nav-item"
						initial={{ y: -200 }}
						animate={{ y: 0 }}
						transition={{ type: "spring", duration: 0.2, stiffness: 80 }}>
						<h2>
							<ProjectsLink to="/" className="nav-link">
								Projects
							</ProjectsLink>
						</h2>
					</motion.li>
					<motion.li
						initial={{ y: -200 }}
						animate={{ y: 0 }}
						transition={{ type: "spring", duration: 0.2, delay: 0.2, stiffness: 80 }}
						className="nav-item">
						<h2>
							<Link to="/about" className="nav-link" activeClassName="active">
								About
							</Link>
						</h2>
					</motion.li>
					{/* <li>
						<h2>
							<Link to="/blog" className="nav-link" activeClassName="active">
								Blog
							</Link>
						</h2>
					</li> */}
					<motion.li
						initial={{ y: -200 }}
						animate={{ y: 0 }}
						transition={{ type: "spring", duration: 0.2, delay: 0.4, stiffness: 80 }}
						className="nav-item">
						<h2>
							<Link to="/contact" className="nav-link" activeClassName="active">
								Contact
							</Link>
						</h2>
					</motion.li>

								</>

						): (
								<>
								<li
						className="nav-item">
						<h2>
							<ProjectsLink to="/" className="nav-link">
								Projects
							</ProjectsLink>
						</h2>
					</li>
					<li
						
						className="nav-item">
						<h2>
							<Link to="/about" className="nav-link" activeClassName="active">
								About
							</Link>
						</h2>
					</li>
					{/* <li>
						<h2>
							<Link to="/blog" className="nav-link" activeClassName="active">
								Blog
							</Link>
						</h2>
					</li> */}
					<li
					
						className="nav-item">
						<h2>
							<Link to="/contact" className="nav-link" activeClassName="active">
								Contact
							</Link>
						</h2>
					</li>
							</>	
						)
					}
					
				</ul>
			</div>
		</nav>
	);
};
