import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const h2variants = {
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0,
			duration: 1,
			type: "tween",
			ease: "anticipate"
		}
	},
	hidden: { x: "-100%", opacity: 0 }
};

const subheadvariants = {
	visible: {
		x:0,
		opacity: 1,
		transition: {
		delay: .2,
			duration: 1,
			type: "tween",
			ease: "anticipate"
		}
	},
	hidden: { x: "-100%", opacity: 0 }
};

const socialvariants = {
	visible: {
		x: 0,
		opacity: 1,
		transition: {
		delay: .2,
			duration: 1,
			type: "tween",
			ease: "anticipate"
		}
	},
	hidden: {  x: "100%", opacity: 0 }
};

const pageheadVariants = {
	visible: {
		y: 0,
		transition: {
			type: "spring",
			stiffness: 70,
		}
	},
	hidden: { y: "-100vh" }
};

const empty = {
	visible: {},
	hidden: {}
};

export const SecondaryNav = ({ page, isProjectDescription }) => {
		let animate = true
	if (typeof window !== 'undefined') {
			animate = !window.sessionStorage.getItem("firstLoadDone");
}

	return (
		<div className="container ">
			<div className="secondary_nav-container">
				<div className="secondary_nav-text">
					<motion.h2
						className="secondary_nav-heading"
						variants={animate ? h2variants : empty}
						initial="hidden"
						animate="visible">
						Hello! I am Zehra, a passionate web-developer, meticulous app-tester, and proficient coder.
					</motion.h2>
					<motion.p
						className="secondary_nav-subheading"
						variants={animate ? subheadvariants : empty}
						initial="hidden"
						animate="visible">
						I strive to craft code that is innovative, flexible and scalable. 
					</motion.p>
				</div>

				<motion.div
					variants={animate ? socialvariants : empty}
					initial="hidden"
					animate="visible"
					className="secondary_nav-icons">
					<a href="https://github.com/ZehraRiz" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} className="secondary_nav-icon" />
					</a>

					<a href="https://www.linkedin.com/in/zehrataqi" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faLinkedinIn} className="secondary_nav-icon" />
					</a>
					<a href="https://twitter.com/zehrataqi_" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faTwitter} className="secondary_nav-icon" />
					</a>
				</motion.div>
			</div>
			<motion.div
				variants={animate ? pageheadVariants : empty}
				initial="hidden"
					animate="visible" className="secondary_nav-page-heading">
				<h4>
					{page}
					<span className="pink">.</span>
				</h4>
				{isProjectDescription === true && (
					<Link to="/" className="link-btn">
						back to all projects
					</Link>
				)}
			</motion.div>
		</div>
	);
};
