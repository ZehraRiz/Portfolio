import React, { useState, useEffect } from "react";
import { Layout, Message, Validation } from "../components";
import { motion } from "framer-motion";
const axios = require("axios");

const Contact = () => {
	let animate = true;
	if (typeof window !== "undefined") {
		animate = !window.sessionStorage.getItem("firstLoadDone");
	}
	const [ errorType, setErrorType ] = useState(0);
	const [ errorMsg, setErrorMessage ] = useState("");
	const [ loading, setLoading ] = useState(false);
	const [ loaded, setLoaded ] = useState(false);
	const [ name, setName ] = useState("");
	const [ lname, setLname ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ msg, setMsg ] = useState("");
	const [ msgSent, setMsgSent ] = useState(false);
	const [ serverError, setServerError ] = useState(false);

	useEffect(
		() => {
			if (errorMsg !== "") {
				let timer1 = setTimeout(() => {
					setErrorMessage("");
					setErrorType(0);
					console.log(errorMsg);
				}, 4000);
				return () => {
					clearTimeout(timer1);
				};
			}
		},
		[ errorType ]
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

		const data = { firstName: name, lastName: lname, email: email, msg: msg };
		let valid = Validation(data);
		if (valid === 1) {
			console.log("here");
			setErrorType(1);
			setErrorMessage("Looks like you forgot to add your first name");
			return;
		}
		if (valid === 2) {
			setErrorType(2);
			setErrorMessage("Looks like you forgot to add your last name");
			return;
		}
		if (valid === 3) {
			setErrorType(1);
			setErrorMessage("Please add a valid email");
			return;
		}
		if (valid === 4) {
			setErrorType(1);
			setErrorMessage("Please add some text");
			return;
		} else {
			setLoading(true);
			axios
				.post("https://zehrataqvi.herokuapp.com/email", data)
				.then((res) => {
					setName("");
					setLname("");
					setEmail("");
					setMsg("");
					setLoading(false);
					setLoaded(true);
					setMsgSent(true);
				})
				.catch((err) => {
					setName("");
					setLname("");
					setEmail("");
					setMsg("");
					setLoading(false);
					setLoaded(true);
					setServerError(true);
				});
		}
	};

	return (
		<Layout page="CONTACT">
			<div className="container contact_container">
				<p
					data-sal="slide-up"
					data-sal-duration="500"
					data-sal-delay={animate ? "1000" : "200"}
					data-sal-easing="ease-out">
					{" "}
					Need help? Contact me on <span className="pink">zehrataqi@gmail.com</span>
				</p>
				<br />
				<p
					data-sal="slide-up"
					data-sal-duration="500"
					data-sal-delay={animate ? "1000" : "200"}
					data-sal-easing="ease-out">
					I am always open to discussing new ideas and opportunities. Write to me
				</p>
				<form
					onSubmit={formSubmit}
					className="contact-form"
					data-sal="slide-up"
					data-sal-duration="500"
					data-sal-delay={animate ? "1000" : "200"}
					data-sal-easing="ease-out">
					<div className="input-f">
						{name !== "" && <p className="secondary-p">First Name</p>}
						<input
							type="text"
							id="name"
							className="input "
							placeholder="First name"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</div>

					<div className="input-l">
						{lname !== "" && <p className="secondary-p">Last Name</p>}
						<input
							type="text"
							id="lname"
							className="input "
							placeholder="Last name"
							value={lname}
							onChange={(e) => {
								setLname(e.target.value);
							}}
						/>
					</div>

					<div className="input-e">
						{email !== "" && <p className="secondary-p">Email</p>}
						<input
							type="text"
							id="email"
							className="input "
							placeholder="Email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>

					<div className="input-m">
						{msg !== "" && <p className="secondary-p">Message</p>}
						<textarea
							id="message"
							className="input "
							placeholder="Message"
							value={msg}
							onChange={(e) => {
								setMsg(e.target.value);
							}}
						/>
						{errorMsg !== "" && <Message msg={errorMsg} />}
					</div>

					{loading && (
						<motion.input
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							disabled
							value="Sending..."
							className="btn  input-b sending"
						/>
					)}

					{!loading &&
					!msgSent &&
					!serverError && (
						<motion.input
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							type="submit"
							value="Send"
							className="btn input-b "
						/>
					)}

					{serverError &&
					!msgSent && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="btn input-b sending serverdown">
							{" "}
							Hmm.. looks like the server is down. Please message me at zehrataqvvi@gmail.com{" "}
						</motion.div>
					)}

					{!loading &&
					msgSent && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="btn input-b sending serverdown">
							Message recieved! I will get back to you soon.
						</motion.div>
					)}
				</form>
			</div>
		</Layout>
	);
};

export default Contact;
