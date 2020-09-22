import React from "react";
import { Link } from "gatsby";
import {ProjectsLinkFooter} from "../components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
	return (
        <div className="footer_container container">
            {/* <div className="circle">
                <FontAwesomeIcon
                class="back-to-top"
                icon={faChevronUp} />
            </div> */}
            
		
			<ul className="footer-list">
				<li className="nav-item">
						<h2>
							<ProjectsLinkFooter to="/" className="nav-link nav-link_f">
								Projects
								</ProjectsLinkFooter>
						</h2>
					</li>
				<li className="nav-item">
					<h2>
						<Link to="/about" className="nav-link nav-link_f" activeClassName="active">
							About
						</Link>
					</h2>
				</li>
				<li>
					<h2>
						<Link to="/blog" className="nav-link nav-link_f" activeClassName="active">
							Blog
						</Link>
					</h2>
				</li>
				<li>
					<h2>
						<Link to="/contact" className="nav-link nav-link_f" activeClassName="active">
							Contact
						</Link>
					</h2>
				</li>
			</ul>
			<p className="nav-link_p">&copy; Zehra Taqvi 2020. All Rights Reserved</p>
		</div>
	);
};
