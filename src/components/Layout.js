import React from "react";
import { NavBar, SecondaryNav, Footer, Splash} from "../components";
import "../stylesheets/style.scss";

export const Layout = ({ children, page, isProjectDescription }) => {
	return (<>
		<Splash />
		<div className="layout">
			<NavBar  />
			<section className="section"><SecondaryNav page={page} isProjectDescription={isProjectDescription}/>
				{children}
			</section>
			<Footer />
		</div>
		</>
	);
};
