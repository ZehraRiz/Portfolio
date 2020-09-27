import React, { useEffect } from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import Img from "gatsby-image";

export const ProjectCard = ({ project, i }) => {
	const { name, description, live, code, image, slug, category } = project;
		let animate = true
	if (typeof window !== 'undefined') {
			animate = !window.sessionStorage.getItem("firstLoadDone");
}

	return (
		<div
			className="project-card"
			data-sal="slide-up"
			data-sal-duration="500"
			data-sal-delay={animate ? "1000" : "200"}
			data-sal-easing="ease-out">
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
						{category}{" "}
						{slug && (
							<Link to={`/projects/${slug}`} className="pink">
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
	);
};
