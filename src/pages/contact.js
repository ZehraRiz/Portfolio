
import React, { useState, useEffect } from "react";
import { Layout } from "../components";
const axios = require("axios");

const Contact = () => {
	const [ error, setError ] = useState(false);
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false)

	useEffect(
		() => {
			if (error) {
				let timer1 = setTimeout(() => setError(false), 3000);
				return () => {
					clearTimeout(timer1);
				};
			}
		},
		[ error ]
	);

		useEffect(
		() => {
			if (loaded) {
				let timer1 = setTimeout(() => setLoaded(false), 3000);
				return () => {
					clearTimeout(timer1);
				};
			}
		},
		[ loaded ]
	);


	const formSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const lname = e.target.lname.value;
		const email = e.target.email.value;
		const message = e.target.message.value;
		if (name === "" || lname === "" || email === "" || message === "") {
			setError(true);
			return;
		} else {
			const data = {
				name,
				lname,
				email,
				message
			};
			setLoading(true)
			axios
				.post("https://zehrataqvi.herokuapp.com/email", data)
				.then((res) => {
					setLoading(false);
					setLoaded(true)
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<Layout page="CONTACT">
			{loading && (
				<div className="temp-overlay">
					<p className="temp-overlay-text pink">Sending...</p>
				</div>
			)}
			<div className="container">
				<p>
					{" "}
					Need help? Contact me on <span className="pink">zehrataqi@gmail.com</span>
				</p>
				<br />
				<p>I am always open to discussing new ideas and opportunities. Write to me</p>
				<form onSubmit={formSubmit} className="contact-form">
					<input type="text" id="name" className="input input-f" placeholder="First name" />
					<input type="text" id="lname" className="input input-l" placeholder="Last name" />
					<input type="email" id="email" className="input input-e" placeholder="Email" />
					<textarea id="message" className="input input-m" placeholder="Message" />
					<input type="submit" value="Send" className="btn input-b last-element" />
				</form>
				{error && <p className="pink">Please fill all fields!!!</p>}
				{loaded && <p className="pink">Sent successfully!!!</p>}
			</div>
		</Layout>
	);
};

export default Contact;
