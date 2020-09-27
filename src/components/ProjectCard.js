import React, {useEffect} from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Fade from 'react-reveal/Fade';

export const ProjectCard = ({ project , i}) => {
	const { name, description, live, code, image, slug, category } = project;
	let big = false;

	// if (window.innerWidth >1280) {
	// 	big =  (i == 1) ||( i == 3) || (i==5);
	// }
	// else {
	// 	big =  (i == 1) ||( i == 3) || (i==4);
	// 	}

	return (
		 <Fade bottom cascade>
		<div className= "project-card">
			{slug ? (
				<Link to={`/projects/${slug}`} className="project-image">
					<Img fluid={image} style={{ height: "calc(100%)" }} imgStyle={{ objectFit: "cover" }} />
				</Link>
			) : (
				<Img fluid={image} style={{ height: "calc(100%)" }} imgStyle={{ objectFit: "cover" }} />
			)}

			<div className="project-card-description">
				<div>
					<h3 className="project-name">{name}</h3>
					<p className="project-description p-small">
						{category}	{slug && (
						<Link to={`/projects/${slug}`}className="pink" >
							Read more...
						</Link>
					)}
						{/* {description} */}
					
					</p>

					
				</div>
				<div className="links">
					<a className="link-btn " href={live} target="_blank">
						Live preview
					</a>
					<a className="link-btn " href={code} target="_blank">
						View Code
					</a>
				</div>
			</div>
		</div>
		</Fade>
	);
};
