import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			duration: 1,
			delay: .8,
			stiffness: 40
		}
	},
	hidden: { y: "-200%", opacity: 0 }
};

const socialvariants = {
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			delay: .8,
			duration: 0.2, stiffness: 80
		}
	},
	hidden: { y: -200, opacity: 0 }
};

const pageheadVariants = {
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "tween",
			duration: 1,
			delay: 0,
			stiffness: 60
		}
	},
	hidden: { x: "-100%", opacity: 0 }
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
						Hello! I am a passionate full-stack developer, meticulios app tester developer and skilled
						coder.
					</motion.h2>
					<motion.p
						className="secondary_nav-subheading"
						variants={animate ? subheadvariants : empty}
						initial="hidden"
						animate="visible">
						Freelance programmer based in Riyadh
					</motion.p>
				</div>

				<motion.div
					variants={animate ? socialvariants : empty}
					initial="hidden"
					animate="visible"
					className="secondary_nav-icons">
					<a href="https://github.com/ZehraRiz" target="_blank">
						<FontAwesomeIcon icon={faGithub} className="secondary_nav-icon" />
					</a>

					<a href="https://www.linkedin.com/in/zehrataqi" target="_blank">
						<FontAwesomeIcon icon={faLinkedinIn} className="secondary_nav-icon" />
					</a>
					<a href="https://twitter.com/zehrataqi_" target="_blank">
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
