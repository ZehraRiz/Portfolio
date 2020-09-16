import React from "react";
import { Layout } from "../components";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export const query = graphql`
	query {
		file(relativePath: { eq: "about.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 300, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const about = ({ data }) => {
	return (
		<Layout page="about">
			<div className="container about_container">
				<Img
					fluid={data.file.childImageSharp.fluid}
					style={{ height: "30%", clipPath: "circle()", width: "100%" }}
					imgStyle={{ objectFit: "contain" }}
				/>
				<div className="home-description-container">
					<p className="home_para">
						I am a full Stack Develope who is always keen on learning new technologies amd make use of them
						in my projects.
					</p>
					<br></br>
					<p className="home_para">
						My current skill set consists of JavaScript, CSS and SASS, supported primarily by ReactJS,
						GatsbyJS NodeJS Socket.IO and MongoDB.
					</p>
					<br></br>
					<p className="home_para">Currently, I am learning testing of web-apps through Jest and Enzyme.</p>
				</div>
			</div>
		</Layout>
	);
};

export default about;
