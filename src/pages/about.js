import React from "react";
import { Layout } from "../components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";

export const query = graphql`
	query {
		file(relativePath: { eq: "about.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 400, quality: 50) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const about = ({ data }) => {
		let animate = true
	if (typeof window !== 'undefined') {
			animate = !window.sessionStorage.getItem("firstLoadDone");
}

	return (
		<Layout page="about">
			<div className="container about_container ">
				<div className="about-image"
			data-sal="slide-right"
			data-sal-duration="500"
			data-sal-delay={animate ? "1000" : "200"}
			data-sal-easing="ease-out"
					// initial={{
					// 	x: "-100vw",
					// 	opacity: 0
					// }}

					// animate={{
					// 	x: "0",
					// 	opacity: 1
					// }}
					// transition={{
					// 	type: "tween",
					// 	ease: "easeOut",
					// 	duration: 1
					// }}
				>
					<Img
					fluid={data.file.childImageSharp.fluid}
					style={{ height: "100%", width: "100%"}}
					imgStyle={{ objectFit: "cover" }}
				/>
				</div>
				
				<div className="home-description-container"
			data-sal="slide-left"
			data-sal-duration="500"
			data-sal-delay={animate ? "1000" : "200"}
			data-sal-easing="ease-out"
					// initial={{
					// 	x: "100vw",
					// 	opacity: 0
					// }}

					// animate={{
					// 	x: "0",
					// 	opacity: 1
					// }}
					// transition={{
					// 	type: "tween",
					// 	duration: 1,
					// 	ease: "easeOut",
					// }}
				>
					<p className="home_para">
						I am a full Stack Develope who is always keen on learning new technologies amd make use of them
						in my projects.
					</p>
					<br />
					<p className="home_para">
						My current skill set consists of JavaScript, CSS and SASS, supported primarily by ReactJS,
						GatsbyJS NodeJS Socket.IO and MongoDB.
					</p>
					<br />
					<p className="home_para">Currently, I am learning testing of web-apps through Jest and Enzyme.</p>
				</div>
				{/* <motion.div className="button-container "
				
				initial={{
						x: "100vw",
						opacity: 0
					}}

					animate={{
						x: "0",
						opacity: 1,
						
					}}
					transition={{
						type: "tween",
						duration: 1,
						ease: "easeOut",
					}}>
				<a className="btn " href ="https://drive.google.com/file/d/1IVzmLAYbHs3Gl8hSqNSt-M4QN4Eo5d06/view?usp=sharing" target="_blank" >Resume</a>
				</motion.div> */}
			</div>

		</Layout>
	);
};

export default about;
