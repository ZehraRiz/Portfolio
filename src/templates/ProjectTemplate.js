import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Layout } from "../components";
import Img from "gatsby-image";

const ProjectTemplate = ({ data }) => {
	let animate = true
	if (typeof window !== 'undefined') {
			animate = !window.sessionStorage.getItem("firstLoadDone");
}
	const name = data.contentfulProjects.name;
	const articleDisplay = data.contentfulProjects.articleDisplay.fluid
	const liveUrl = data.contentfulProjects.liveUrl;
	const githubUrl = data.contentfulProjects.githubUrl;
	const date = data.contentfulProjects.date;
	const category = data.contentfulProjects.category
    const collaborators = data.contentfulProjects.collaborators
	const article = data.contentfulProjects.childContentfulProjectsDescriptionRichTextNode.json;
	const options = {
		renderNode: {
			// [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
			// 	<img className="article-image" alt="article" src={`https:${node.data.target.fields.file["en-US"].url}`} />
			// ),
			[BLOCKS.PARAGRAPH]: (node, children) => (<p className="article-p">{children}</p>),
		},
		renderMark: {}
	};
	return (
		<Layout page={name} isProjectDescription={true}>
			<div className="container project-details_container">
				<div 
					className="project-details-blog">
					<div className="title-img">
							<Img fluid={articleDisplay} style={{ height: "auto", width: "100%" }} imgStyle={{ objectFit: "cover" }} />
					</div>
					{documentToReactComponents(article, options)}</div>
				<div className="project-details"
				>
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
						<a className="link-btn" href={liveUrl} target="_blank" rel="noreferrer">
							{liveUrl}
						</a>
						<a className="link-btn" href={githubUrl} target="_blank" rel="noreferrer">
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
			articleDisplay{
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
