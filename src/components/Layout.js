import React, { Fragment } from "react";
import { NavBar, SecondaryNav, Footer} from "../components";
import "../stylesheets/style.scss";

export const Layout = ({ children, page, isProjectDescription }) => {
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
