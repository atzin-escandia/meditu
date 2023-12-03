import { FireIcon } from "@heroicons/react/outline";
import { Button, Metric, Text, TextInput } from "@tremor/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../context/USerContext";

export const Register = () => {
	const [name, setName] = useState("Escan");
	const [email, setEmail] = useState("escan@escan.com");
	const [password, setPassword] = useState("Holi");
	const [redirect, setRedirect] = useState(false);
	const { setUser } = useContext(UserContext);

	const registerUser = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			await axios.post("/register", {
				name,
				email,
				password,
			});

			const { data } = await axios.post("/login", { email, password });
			setUser(data);
			setRedirect(true);
		} catch (error) {
			alert(error);
		}
	};

	if (redirect) {
		return <Navigate to="/" />;
	}
	return (
		<div>
			<Metric className="mb-5">Register</Metric>
			<form onSubmit={registerUser}>
				<TextInput
					value={name}
					className="mb-5"
					placeholder="Name"
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>
				<TextInput
					value={email}
					className="mb-5"
					placeholder="Email"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextInput
					value={password}
					className="mb-5"
					placeholder="Type password here"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					className="w-80"
					type="submit"
					size="xl"
					icon={FireIcon}
				>
					Register
				</Button>
			</form>

			<Text className="mt-5">
				Already a member{" "}
				<Link className="underline" to="/login">
					Login
				</Link>
			</Text>
		</div>
	);
};
