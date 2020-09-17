import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const ProjectCard = ({ project }) => {
	const { name, description, live, code, image, slug } = project;
	return (
		<div className="project-card">
			
			<BackgroundImage className="project-image" fluid={image} backgroundColor="#fff" />
			<div className="project-card-description">
				
				<h2 className="project-name">{name}</h2>
				<p className="project-description p-small">
					{description}
					<span>
						<Link className="pink" to={`/projects/${slug}`}>
							{" "}Read more...
						</Link>
					</span>
				</p>
				<div className="links">
					<a className="btn " href={live} target="_blank">
						Live preview
					</a>
					<a className="btn " href={code} target="_blank">
						View Code
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
