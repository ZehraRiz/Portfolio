import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Layout } from "../components";

const ProjectTemplate = ({ data }) => {
	const name = data.contentfulProjects.name;
	const liveUrl = data.contentfulProjects.liveUrl;
	const githubUrl = data.contentfulProjects.githubUrl;
	const date = data.contentfulProjects.date;
	const headerImage = data.contentfulProjects.displayImage.fluid;
	const article = data.contentfulProjects.childContentfulProjectsDescriptionRichTextNode.json;
	const options = {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node, children) => (
				<img className="article-image" src={`https:${node.data.target.fields.file["en-US"].url}`} />
			)
		},
		renderMark: {}
	};
	return (
		<Layout page="Projects">
			<div className="container project-details_container">
				<Link to="/projects" className="btn btn-small">
					Back to all projects
				</Link>
				<div className="peoject-details">
					<h2 className="project-description-heading">{name}</h2>
					<p className="project-description-date">{date}</p>
					<Image fluid={headerImage} className="project-description-image" />
					<div className="project-description-links-container">
						<a className="btn btn-small" href={liveUrl} target="_blank">
							Live Preview
						</a>
						<a className="btn btn-small" href={githubUrl} target="_blank">
							View Code
						</a>
					</div>
					{documentToReactComponents(article, options)}
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query GetSingleProject($slug: String) {
		contentfulProjects(slug: { eq: $slug }) {
			liveUrl
			name
			githubUrl
			displayImage {
				fluid {
					...GatsbyContentfulFluid
				}
			}
			date: createdAt(formatString: "dd/mm/yyyy")
			childContentfulProjectsDescriptionRichTextNode {
				json
			}
		}
	}
`;

export default ProjectTemplate;
