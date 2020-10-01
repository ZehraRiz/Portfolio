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
						My name is Zehra Taqvi and I am a Software Developer. I have majorly been working with JavaScript and HTML/CSS/SASS over the past years.
					</p>
					<br />
					<br />
					<p className="home_para">
						I worked as a full-stack engineer with small teams of developers to build some complex web applications using ReactJS, Node, Socket.IO and MongoDB. During this time I experimented with various third-party libraries and packages for animations, UI and utilities.
					</p>
					<br />
					<br />
					<p className="home_para">
						{" "}
						Recently, I started using GatsbyJS and built this site (zehra-taqvi.com) upon it. It is integrated with a headless CMS which pulls in data dynamically from Contnenful. This website also uses some animation libraries such as Framer Motion and Sal.js.

					</p>
					<br />
					<br />
					<p className="home_para">
						{" "}
						In the past, I learnt different frameworks and programming languages like Java, React Native and Android development but Front-end web development was the one that struck me the most.
					</p>
						<br />
					<br />
					<p className="home_para"> I am currently looking for opportunities as a Front-end developer..</p>
				</div>
			</div>
		</Layout>
	);
};

export default about;
