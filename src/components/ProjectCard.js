import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const ProjectCard = ({ project }) => {
	const { name, description, live, code, image, slug } = project;
	return (
		<div className="project-card">
			<BackgroundImage className="project-image" fluid={image} backgroundColor="#fff">
				<a className="project-live btn_link" href={live}>
					Live preview
				</a>
				<a className="project-code btn_link" href={code}>
					View Code
				</a>
			</BackgroundImage>
			<div className="project-card-description">
				<h3 className="project-name">{name}</h3>
				<p className="project-description">
					{description}
					<span>
						<Link className="btn_link" to={`/projects/${slug}`}>
							View details
						</Link>
					</span>
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;
