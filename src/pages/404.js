import React from "react";
import { Layout } from "../components";
import { Link } from "gatsby";

const error = () => {
	return (
		<Layout>
			Opps. page does not exist.
			<Link to="/">Go to home</Link>
		</Layout>
	);
};

export default error;
