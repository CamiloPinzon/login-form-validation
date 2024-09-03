import { useState } from "react";
import IErrors from "../../../interfaces/errors";
import FormField from "../../molecules/formField/formField";
import Button from "../../atoms/button/button";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<IErrors>({ email: "", password: "" });

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let valid = false;

		if (!email) {
			setError((prev) => ({ ...prev, email: "Email is required" }));
		} else if (!validateEmail(email)) {
			setError((prev) => ({ ...prev, email: "Invalid email address" }));
		} else {
			setError((prev) => ({ ...prev, email: "" }));
			valid = true;
		}

		if (!password) {
			setError((prev) => ({ ...prev, password: "Password is required" }));
		} else {
			setError((prev) => ({ ...prev, password: "" }));
			valid = true;
		}

		if (valid) {
			alert("send data, form it's ok");
			valid = false;
			setEmail("");
			setPassword("");
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<FormField
				label="Email"
				type="email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				error={error.email}
			/>

			<FormField
				label="Password"
				type="password"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				error={error.password}
			/>

			<Button type="submit">Login</Button>
		</form>
	);
};

export default LoginForm;
