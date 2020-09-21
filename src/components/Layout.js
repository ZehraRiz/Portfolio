import React from "react";
import { NavBar } from "../components";
import { SecondaryNav } from "../components";
import "../stylesheets/style.scss";

export const Layout = ({ children, page }) => {
	return (
		<div className="layout">
			<NavBar  />
			<section className="section"><SecondaryNav page={page}/>
				{children}</section>
		</div>
	);
};
