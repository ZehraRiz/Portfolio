import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ProjectsLink } from "../components";

const h1variants = {
	visible: {
		y: 0,
		transition: {
			type: "spring",
			stiffness: 80,
		}
	},
	hidden: { y: "-100vh" }
};

const nav1Variants = {
	visible: {
		y: 0,
		transition: { type: "spring", duration: 0.2, stiffness: 80, delay: .7}
	},
	hidden: {
		y: -200
	}
};

const nav2Variants = {
	visible: {
		y: 0,
		transition: { type: "spring", duration: 0.2, stiffness: 80, delay: .8 }
	},
	hidden: {
		y: -200
	}
};

const nav3Variants = {
	visible: {
		y: 0,
		transition: { type: "spring", duration: 0.2, stiffness: 80, delay: .9 }
	},
	hidden: {
		y: -200
	}
};

const empty = {
	visible: {},
	hidden: {}
};

export const NavBar = () => {
	const [ isOpen, setIsOpen ] = useState(false);
		let animate = true
	if (typeof window !== 'undefined') {
			animate = !window.sessionStorage.getItem("firstLoadDone");
}

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
					<motion.div
					// variants={animate ? h1variants : empty} initial="hidden" animate="visible"
					>
						<Link to="/">
							<h1>
								Z<span className="pink">.</span>
							</h1>
						</Link>
					</motion.div>

					<FontAwesomeIcon
						className="nav-icon"
						icon={faBars}
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					/>
				</div>

				<ul className="nav-list">
					<motion.li
						// className="nav-item"
						// variants={animate ? nav1Variants : empty}
						// initial="hidden"
						// animate="visible"
					>
						<h2>
							<ProjectsLink to="/" className="nav-link">
								Projects
							</ProjectsLink>
						</h2>
					</motion.li>
					<motion.li
						// variants={animate ? nav2Variants : empty}
						// initial="hidden"
						// animate="visible"
						// className="nav-item"
					>
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
						// variants={animate ? nav3Variants : empty}
						// initial="hidden"
						// animate="visible"
						// className="nav-item"
					>
						<h2>
							<Link to="/contact" className="nav-link" activeClassName="active">
								Contact
							</Link>
						</h2>
					</motion.li>
				</ul>
			</div>
		</nav>
	);
};
