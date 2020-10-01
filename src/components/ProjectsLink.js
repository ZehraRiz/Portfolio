import React from "react";
import { Link } from "gatsby";

const invalidPaths = [ "/about/", "/blog", "/contact/" ];

const isActive = ({ location }) => {
	if (!invalidPaths.includes(location.pathname)) {
		return { className: "active" };
	}

	return null;
};

export const ProjectsLink = ({ children, ...props }) => {
	return (
		<Link getProps={isActive} {...props}>
			{children}
		</Link>
	);
};
