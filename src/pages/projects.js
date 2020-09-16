import React from "react";
import { Layout } from "../components";


import ProjectCard from "../components/ProjectCard";

const projects = ({ data }) => {
	const { allContentfulProjects: { nodes: projects } } = data;
	return (
		<Layout page="Projects">
			<div className="container projects-container">
				<ul className="projects-filter">
					<li>All</li>
					<li>Full Stack</li>
					<li>ReactJS</li>
					<li>Static Sites</li>
				</ul>
				<div className="projects-cards-container">
					{projects.map((project) => {
						const p = {
							name: project.name,
							description: project.shortDescription.shortDescription,
							live: project.liveUrl,
							code: project.githubUrl,
							image: project.displayImage.fluid,
							slug: project.slug
						};
						return (
							<ProjectCard key={project.contentful_id} project={p} />
							
						
						);
					})}
				</div>
			</div>
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
