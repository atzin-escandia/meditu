import { SunIcon } from "@heroicons/react/solid";
import {
	Button,
	Metric,
	Text,
	TextInput,
	Textarea,
	Title,
} from "@tremor/react";
import { useContext } from "react";
import { UserContext } from "../context/USerContext";
import axios from "axios";

export const Profile = () => {
	const { user, setUser } = useContext(UserContext);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const bio = formData.get("bio") as string;
		const description = formData.get("description") as string;
		const category = formData.get("category") as string;
		const audio = formData.get("audio") as string;

		console.log(name, description, category, audio);

		try {
			const { data } = await axios.post("/profile", {
				name,
				email,
				password,
				bio,
			});
			setUser(data);
		} catch (error) {
			alert(error);
		}

		// if (!title || !email || !github) {
		// 	// validaciones que tu quieras
		// 	return setResult("ko");
		// }

		// addUser({ title, email, github });
		// setResult("ok");
		form.reset();
	};

	return (
		<div>
			<Metric className=" mb-5">Profile</Metric>

			<img
				className="mb-5 inline-block h-40 w-40 rounded-full ring-2 ring-white"
				src="https://media.licdn.com/dms/image/D4D03AQHjkz7cwu7hEg/profile-displayphoto-shrink_800_800/0/1699793146844?e=1707350400&v=beta&t=XGE0pWRrfBu5MZX0DM3dt0o2hGdcPq9HvW8KT62YfW4"
				alt=""
			/>
			<form className="text-start mb-5" onSubmit={handleSubmit}>
				{/* //Title */}
				<Title className="">Name</Title>
				<Text className="mb-2">
					Choose a name for your meditation session
				</Text>
				<TextInput
					name="name"
					className="mb-5"
					placeholder="Title"
					type="text"
					value={user?.name}
				/>
				{/* //Email */}
				<Title className="">Email</Title>
				<Text className="mb-2">Choose a email</Text>
				<TextInput
					name="email"
					className="mb-5"
					placeholder="Title"
					type="email"
					value={user?.email}
				/>
				{/* Password */}
				<Title className="">Password</Title>
				<Text className="mb-2">Change your password</Text>
				<TextInput
					className="mb-5"
					placeholder="Type password here"
					type="password"
				/>
				{/* //Description */}
				<Title className="">Bio</Title>
				<Text className="mb-2">Describe your style</Text>
				<Textarea
					name="bio"
					className="mb-5"
					placeholder="Bio"
					value={user?.bio}
				/>
				<Button
					className="w-80 mt-5"
					type="submit"
					size="xl"
					icon={SunIcon}
				>
					Save
				</Button>
			</form>
		</div>
	);
};
