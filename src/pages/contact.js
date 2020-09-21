import React from "react";
import { Layout } from "../components";
const axios = require("axios");

const contact = () => {
	const formSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const message = e.target.message.value;
		const data = {
			name,
			email,
			message
		};
		axios
			.post("http://localhost:3000/email", data)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Layout page="connect">
			<div className="container connect_container">
				<p>Feel free to get in touch with me.</p>
				<p>I am always open to discussing new ideas and opportunities.</p>
				<form onSubmit={formSubmit}>
					<input type="text" id="name" />
					<input type="email" id="email" />
					<textarea id="message" />
					<input type="submit" value="Send" />
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
			</div>
		</Layout>
	);
};

export default contact;
