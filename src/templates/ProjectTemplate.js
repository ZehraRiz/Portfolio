import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { Layout } from "../components";

const ProjectTemplate = ({
	data: { project: { name, githubUrl, liveUrl, descriptionImages, description: { description } } }
}) => {
	return (
		<Layout>
			<div>
				<Link to="/projects">Back to projects</Link>
				<h1>Single product: {name}</h1>
				<article>
					<Image fixed={descriptionImages[0].fixed} alt={name} />
				</article>
				<p>{description}</p>
				<Image fixed={descriptionImages[1].fixed} alt={name} />
			</div>
		</Layout>
	);
};

export const query = graphql`
	query GetSingleProject($slug: String) {
		project: contentfulProjects(slug: { eq: $slug }) {
			name
			descriptionImages {
				fixed(width: 300) {
					...GatsbyContentfulFixed
				}
			}
			githubUrl
			liveUrl
			description {
				description
			}
		}
	}
`;

export default ProjectTemplate;
