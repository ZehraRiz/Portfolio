import React from "react";
import { Layout, ProjectCard } from "../components";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function Home({ data }) {
	const { allContentfulProjects: { nodes: projects } } = data;
	return (
		<Layout page="Projects">
			<div className="container projects-container ">
					{projects.map((project) => {
						const p = {
							name: project.name,
							description: project.shortDescription.shortDescription,
							live: project.liveUrl,
							code: project.githubUrl,
							image: project.displayImage.fluid,
							slug: project.slug,
							category: project.category
						};
						return <ProjectCard key={project.contentful_id} project={p} />;
					})}
				</div>
		</Layout>
	);
}

export const query = graphql`
	{
		allContentfulProjects (sort: {fields: createdAt})  {
			nodes {
				slug
				liveUrl
				githubUrl
				displayImage {
					fluid {
						...GatsbyContentfulFluid
					}
				}
				shortDescription {
					shortDescription
				}
				name
				category
				contentful_id
			}
		}
	}
`;
