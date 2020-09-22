import React from "react";
import { Link } from "gatsby";

const invalidPaths = [ "/about", "/blog", "/contact" ];

const isActive = ({ location }) => {
	if (!invalidPaths.includes(location.pathname)) {
		return { className: "active_f" };
	}

	return null;
};

export const ProjectsLinkFooter = ({ children, ...props }) => {
	return (
		<Link getProps={isActive} {...props}>
			{children}
		</Link>
	);
};
