import React, { useState, useEffect, Fragment } from "react";
import { NavBar, SecondaryNav, Footer } from "../components";
import "../stylesheets/style.scss";

export const Layout = ({ children, page, isProjectDescription }) => {
	useEffect(() => {
		if (window.sessionStorage.getItem("firstLoadDone") === null) {
			// return;
			window.sessionStorage.setItem("firstLoadDone", 1)
		}
	}, []);

	return (
		<Fragment>
			<div className="layout">
				<NavBar />
				<section className="section">
					<SecondaryNav page={page} isProjectDescription={isProjectDescription} />
					{children}
				</section>
				<Footer />
			</div>
		</Fragment>
	);
};
