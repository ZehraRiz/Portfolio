import React from "react";
import { Layout } from "../components";

const contact = () => {
	return (
		<Layout>
			<h1>Connect</h1>
			<form>
				Name
				<input type="text" />
				Email
				<input type="text" />
				Message
				<input type="text" />
				<button type="submit">Send</button>
			</form>
			<img src="" alt="location" />
			Riyadh, Saudi Arabia
			<img src="" alt="email" />
			zehrataqi@gmail.com
			<img src="" alt="twitter" />
			zehrataqi@gmail.com
			<img src="" alt="linkedIn" />
			linkedIn
			<img src="" alt="github" />
			Github
		</Layout>
	);
};

export default contact;
