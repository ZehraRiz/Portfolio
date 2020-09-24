import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import Img from "gatsby-image";

export const ProjectCard = ({ project }) => {
	const { name, description, live, code, image, slug, category } = project;
	return (
		<div className="project-card">
			{slug ? (
				<Link to={`/projects/${slug}`} className="project-image">
					<Img fluid={image} style={{ height: "calc(100%)" }} imgStyle={{ objectFit: "contain" }} />
				</Link>
			) : (
				<Img fluid={image} style={{ height: "calc(100%)" }} imgStyle={{ objectFit: "contain" }} />
			)}

			<div className="project-card-description">
				<div>
					<h3 className="project-name">{name}</h3>
					<p className="project-description p-small">
						{category}	{slug && (
						<Link to={`/projects/${slug}`}className="pink" >
							<div >Read more...</div>
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
	);
};
