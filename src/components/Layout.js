import React, {  Fragment, useEffect } from "react";
import favicon from "../images/favicon.ico";
import Helmet from "react-helmet";
import { NavBar, SecondaryNav, Footer } from "../components";
import "../stylesheets/style.scss";

export const Layout = ({ children, page, isProjectDescription }) => {
	useEffect(() => {
		if (window.sessionStorage.getItem("firstLoadDone") === null) {
			return;
			//window.sessionStorage.setItem("firstLoadDone", 1)
		}
	}, []);

	return (
		<Fragment>
			<Helmet>
				<link rel="icon" href={favicon} />
          <meta charSet="utf-8" />
          <title>Zehra Taqvi</title>
 
			</Helmet>
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
