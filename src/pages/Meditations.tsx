import { EyeIcon, PlayIcon } from "@heroicons/react/solid";
import {
	Button,
	Card,
	Icon,
	Metric,
	Subtitle,
	Text,
	Title,
} from "@tremor/react";
import { Link, useParams } from "react-router-dom";

export const Meditations = () => {
	const { id } = useParams();
	console.log(id);

	const meditationsList = [
		{
			id: 1,
			title: "Painting Forest",
			counter: "5k",
			icon: EyeIcon,
			duration: "20 min",
		},
		{
			id: 2,
			title: "Painting Forest",
			counter: "5k",
			icon: EyeIcon,
			duration: "20 min",
		},
		{
			id: 3,
			title: "Painting Forest",
			counter: "5k",
			icon: EyeIcon,
			duration: "20 min",
		},
		{
			id: 4,
			title: "Painting Forest",
			counter: "5k",
			icon: EyeIcon,
			duration: "20 min",
		},
	];

	return (
		<div>
			<Card className="my-50">
				<Metric className="">Meditation 101</Metric>
				<Text className="mb-5">
					Techniques , Benefits and a beginner's how-to
				</Text>
				<Button icon={PlayIcon}>Play now</Button>
			</Card>

			<div className="mt-5 mb-5">
				{meditationsList.map((meditation, index) => (
					<div key={index} className="flex justify-between mt-5">
						<Link to={`/meditations/${meditation.id}`}>
							<Icon size="lg" icon={meditation.icon} />
						</Link>
						<div>
							<Title className="mt-2">{meditation.title}</Title>
							<Subtitle className="text-left">
								{meditation.counter}
							</Subtitle>
						</div>
						<Subtitle className="mt-2">
							{meditation.duration}
						</Subtitle>
					</div>
				))}
			</div>
		</div>
	);
};
