import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Layout } from "../components";

const ProjectTemplate = ({ data }) => {
	const name = data.contentfulProjects.name;
	const liveUrl = data.contentfulProjects.liveUrl;
	const githubUrl = data.contentfulProjects.githubUrl;
	const date = data.contentfulProjects.date;
	const category = data.contentfulProjects.category
    const collaborators = data.contentfulProjects.collaborators
	const article = data.contentfulProjects.childContentfulProjectsDescriptionRichTextNode.json;
	const options = {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node, children) => (
				<img className="article-image" src={`https:${node.data.target.fields.file["en-US"].url}`} />
			),
			[BLOCKS.PARAGRAPH]: (node, children) => <p className="article-p">{children}</p>
		},
		renderMark: {}
	};
	return (
		<Layout page={name} isProjectDescription={true}>
			<div className="container project-details_container">
				<div className="project-details-blog">{documentToReactComponents(article, options)}</div>
				<div className="project-details">
					<div className="project-details-child">
						<h5>Project Category</h5>
						<p>{category}</p>
					</div>
					<div className="project-details-child">
						<h5>Date</h5>
						<p>{date}</p>
					</div>
					<div className="project-details-child">
						<h5>Links</h5>
						<a className="link-btn" href={liveUrl} target="_blank">
							{liveUrl}
						</a>
						<a className="link-btn" href={githubUrl} target="_blank">
							{githubUrl}
						</a>
					</div>
					<div className="project-details-child">
						<h5>Collaborators</h5>
						<p>{collaborators}</p>
					</div>
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
			category
			collaborators
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
