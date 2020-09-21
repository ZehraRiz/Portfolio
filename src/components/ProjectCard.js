import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import Img from "gatsby-image";

export const ProjectCard = ({ project }) => {
	const { name, description, live, code, image, slug } = project;
	return (
		<div className="project-card">
			<Link to={`/projects/${slug}`} className= "project-image">
				<Img fluid={image} 
				style={{ height: 'calc(100%)' }}
					imgStyle={{ objectFit: 'cover' }}
				/>
</Link>
			<div className="project-card-description">
				<h3 className="project-name">{name}</h3>
				<p className="project-description p-small">
					{description}
					<span>
						<Link className="pink" to={`/projects/${slug}`}>
							{" "}
							Read more...
						</Link>
					</span>
				</p>
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
	);
};


