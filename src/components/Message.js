import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export const Message = ({ msg, success }) => {
	return (
		<Fragment>
			{msg && (
				<motion.div
					className="error_container"
					inital={{
						opacity: 0
					}}
					animate={{
						y: "-100%",
						opacity: 1
					}}
					transition={{
						type: "spring",
						duration: 1,
						stiffness: 200
					}}>
					<FontAwesomeIcon className="error_icon" icon={faExclamationTriangle} />

					<p className="error_msg" />
					{msg}
				</motion.div>
			)}
			{success && (
				<div className="success_container">
					<p>Message sent!</p>
				</div>
			)}
		</Fragment>
	);
};
