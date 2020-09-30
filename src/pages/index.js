import React from "react";
import { Layout, ProjectCard } from "../components";
import { graphql } from "gatsby";

export default function Home({ data }) {
	const { allContentfulProjects: { nodes: projects } } = data;

	return (
		<Layout page="Projects">
			<div className="container projects-container">
				{projects.map((project, i) => {
					const p = {
						name: project.name,
						live: project.liveUrl,
						code: project.githubUrl,
						image: project.displayImage.fluid,
						slug: project.slug,
						category: project.category
					};
					return <ProjectCard key={project.contentful_id} project={p} i={i} />;
				})}
			</div>
		</Layout>
	);
}

export const query = graphql`
	{
		allContentfulProjects(sort: { fields: createdAt }) {
			nodes {
				slug
				liveUrl
				githubUrl
				displayImage {
					fluid {
						...GatsbyContentfulFluid
					}
				}
				name
				category
				contentful_id
			}
		}
	}
`;
