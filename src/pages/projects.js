import React from "react";
import { Layout } from "../components";
import { Link } from "gatsby";
import Image from "gatsby-image";

const projects = ({ data }) => {
	const { allContentfulProjects: { nodes: projects } } = data;
	return (
		<Layout>
			<h1>Projects</h1>
			<ul>
				<li>All</li>
				<li>Full Stack</li>
				<li>ReactJS</li>
				<li>Static Sites</li>

				{projects.map((project) => {
					return (
						<div key={project.contentful_id}>
							<h1>{project.name}</h1>
							<p>{project.shortDescription.shortDescription}</p>
							<p>{project.liveUrl}</p>
							<p>{project.githubUrl}</p>
							<Link to={`/projects/${project.slug}`}>View details</Link>
							<Image fluid={project.displayImage.fluid} />
						</div>
					);
				})}
				<section />
			</ul>
		</Layout>
	);
};

export default projects;

export const query = graphql`
	{
		allContentfulProjects {
			nodes {
				slug
				liveUrl
				githubUrl
				displayImage {
					fluid {
						...GatsbyContentfulFluid
					}
					contentful_id
				}
				shortDescription {
					shortDescription
				}
				name
				contentful_id
			}
		}
	}
`;
