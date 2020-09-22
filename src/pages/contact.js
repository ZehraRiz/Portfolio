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
			.post("https://zehrataqvi.herokuapp.com/email", data)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Layout page="CONTACT">
			<div className="container">
				<p>
					{" "}
					Need help? Contact me on  <span className="pink">zehrataqi@gmail.com</span>
				</p>
				<br></br>
				<p>I am always open to discussing new ideas and opportunities. Write to me</p>
				<form onSubmit={formSubmit} className="contact-form">
					<input type="text" id="name" className="input input-f" placeholder= "First name" />
					<input type="text" id="lname" className="input input-l" placeholder= "Last name" />
					<input type="email" id="email" className="input input-e" placeholder= "Email" />
					<textarea id="message" className="input input-m" placeholder= "Message" />
					<input type="submit" value="Send" className="btn input-b last-element"/>
				</form>
			</div>
		</Layout>
	);
};

export default contact;
