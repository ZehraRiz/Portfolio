import React from "react";
import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import Img from "gatsby-image"; // to take image data and render it
import { Link } from "gatsby";

export const NavBar = () => {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fixed(width: 250, height: 250) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<div>
			<Link to="/">
				<Img fixed={data.file.childImageSharp.fixed} alt="A corgi smiling happily" />
			</Link>
			<ul>
				<li>
					<Link to="/about">About me</Link>
				</li>
				<li>
					<Link to="/projects">My projects</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to="/contact">Connect</Link>
				</li>
			</ul>
		</div>
	);
};
