import { FireIcon } from "@heroicons/react/outline";
import { Button, Metric, Text, TextInput } from "@tremor/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../context/USerContext";

export const Login = () => {
	const [email, setEmail] = useState("escan@escan.com");
	const [password, setPassword] = useState("Holi");
	const [redirect, setRedirect] = useState(false);
	const { setUser } = useContext(UserContext);

	const handleLoginSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
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
			<Metric className="mb-5">Login</Metric>
			<form action="" onSubmit={handleLoginSubmit}>
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
					Login
				</Button>
			</form>

			<Text className="mt-5">
				{"Don't have an account? "}
				<Link className="underline" to="/register">
					Register
				</Link>
			</Text>
		</div>
	);
};
