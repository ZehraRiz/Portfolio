import React from "react";
import { Layout } from "../components";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export const query = graphql`
	query {
		file(relativePath: { eq: "about.png" }) {
			childImageSharp {
				fluid(maxWidth: 400, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const about = ({ data }) => {
	let animate = true;
	if (typeof window !== "undefined") {
		animate = !window.sessionStorage.getItem("firstLoadDone");
	}

	return (
		<Layout page="about">
			<div className="container about_container ">
				<div
					className="about-image"
					data-sal="slide-right"
					data-sal-duration="500"
					data-sal-delay={animate ? "1000" : "200"}
					data-sal-easing="ease-out">
					<Img
						fluid={data.file.childImageSharp.fluid}
						style={{ height: "100%", width: "100%" }}
						imgStyle={{ objectFit: "cover" }}
					/>
				</div>

				<div
					className="home-description-container"
					data-sal="slide-left"
					data-sal-duration="500"
					data-sal-delay={animate ? "1000" : "200"}
					data-sal-easing="ease-out">
					<p className="home_para">
						My name is Zehra Taqvi and I am a Software Developer. I have majorly been working with
						JavaScript and HTML/CSS/SASS over the past years.
					</p>
					
				
					<p className="home_para">
						As a front-end engineer, I build web application interfaces, logic, interactions and user
						experience. I also write unit and integration tests for applications.
					</p>
				
				
						<p className="home_para">
						 My primary skill set consists of are React, Redux, Gatsby, Jest and React-testing-library. 
					</p>
				
					
					<p className="home_para">
						{" "}
						In the past, I learnt different frameworks and programming languages like Java, React Native and
						Android development.
					</p>
			
				
					<p className="home_para"> I am currently looking for opportunities as a Front-end developer.</p>
				</div>
			</div>
		</Layout>
	);
};

export default about;
