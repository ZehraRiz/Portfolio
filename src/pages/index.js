import React from "react";
import { Layout } from "../components";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

export default function Home() {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "homeBg.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1800, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout page="home">
			{/* <BackgroundImage
				Tag="section"
				fluid={data.file.childImageSharp.fluid}
				backgroundColor={`#040e18`}
				className="home_bg "> */}
			<div className="container home_container">
				<h1 className="home_heading">
					Writing empowered code<span className="pink">.</span>
				</h1>
				<p className="home_subheading">Hello I am Zehra.</p>
				<button className="btn_link home_btn">View my work</button>
			</div>

			{/* </BackgroundImage> */}
		</Layout>
	);
}
