import { SunIcon } from "@heroicons/react/outline";
import { CalculatorIcon, FireIcon } from "@heroicons/react/solid";
import {
	Button,
	Metric,
	SearchSelect,
	SearchSelectItem,
	Text,
	TextInput,
	Textarea,
	Title,
} from "@tremor/react";
import React from "react";

export const NewMeditation = () => {
	const meditationCategories = [
		"Mindfulness Meditation",
		"Loving-Kindness Meditation (Metta)",
		"Transcendental Meditation",
		"Body Scan Meditation",
		"Zen Meditation (Zazen)",
		"Guided Meditation",
		"Chakra Meditation",
		"Mantra Meditation",
		"Movement-Based Meditation (Yoga, Tai Chi)",
		"Vipassana Meditation",
		"Breath Awareness Meditation",
	];

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// setResult(null);

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const title = formData.get("title") as string;
		const description = formData.get("description") as string;
		const category = formData.get("category") as string;
		const audio = formData.get("audio") as string;

		console.log(title, description, category, audio);

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
			<Metric className=" mb-5">Create new meditation</Metric>
			<form className="text-start mb-5" onSubmit={handleSubmit}>
				{/* //Title */}
				<Title className="">Title</Title>{" "}
				<Text className="mb-2">
					Choose a name for your meditation session
				</Text>
				<TextInput
					name="title"
					className="mb-5"
					placeholder="Title"
					type="text"
				/>
				{/* //Description */}
				<Title className="">Description</Title>{" "}
				<Text className="mb-2">Describe your meditation session</Text>
				<Textarea
					name="description"
					className="mb-5"
					placeholder="Description"
				/>
				{/* //Category */}
				<Title className="">Category</Title>{" "}
				<Text className="mb-2">
					Choose a category for your meditation session
				</Text>
				<SearchSelect className="mb-5" name="category">
					<SearchSelectItem value="1" icon={CalculatorIcon}>
						Mindfulness Meditation
					</SearchSelectItem>
					<SearchSelectItem value="2" icon={CalculatorIcon}>
						Body Scan Meditation
					</SearchSelectItem>
					<SearchSelectItem value="3" icon={CalculatorIcon}>
						Guided Meditation
					</SearchSelectItem>
				</SearchSelect>
				{/* //Audio */}
				<Title className="">Audio</Title>{" "}
				<Text className="mb-2">
					Upload your meditation session audio link
				</Text>
				{/* <input
					className="mb-5 w-80"
					type="file"
					id="fileInput"
					name="fileInput"
					placeholder="Audio"
				/> */}
				<TextInput
					name="audio"
					className="mb-5"
					placeholder="Link file"
					type="url"
				/>
				<Button
					className="w-80 mt-5"
					type="submit"
					size="xl"
					icon={SunIcon}
				>
					Create Meditation
				</Button>
			</form>
		</div>
	);
};
