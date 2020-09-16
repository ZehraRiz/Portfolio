import React from "react";
import { NavBar } from "../components";
import "../stylesheets/style.scss";

export const Layout = ({ children, page }) => {
	return (
		<div className="layout">
			<NavBar page={page} />
				<section>{children}</section>
		</div>
	);
};
