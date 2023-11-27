import {
	BellIcon,
	CakeIcon,
	EyeIcon,
	GiftIcon,
	PlayIcon,
	SunIcon,
	UserCircleIcon,
} from "@heroicons/react/solid";
import { Button, Card, Icon, Metric, Subtitle, Text } from "@tremor/react";

export const Dashboard = () => {
	const topics = [
		{
			name: "Calm",
			icon: EyeIcon,
		},
		{
			name: "Relax",
			icon: SunIcon,
		},
		{
			name: "Focus",
			icon: CakeIcon,
		},
		{
			name: "Anxious",
			icon: GiftIcon,
		},
		{
			name: "Happy",
			icon: BellIcon,
		},
	];

	return (
		<main className="text-left">
			<Metric>Welcome back, Afreen</Metric>
			<Subtitle>How are you feeling today? </Subtitle>

			<div className="flex overflow-auto mt-5 mb-5">
				{topics.map((topic) => (
					<div key={topic.name} className="mr-5 mt-5">
						<Card>
							<Icon size="lg" icon={topic.icon} />
						</Card>
						<Text className="text-center mt-2">{topic.name}</Text>
					</div>
				))}
			</div>

			<Card className="flex my-5">
				<div>
					<Metric className="">Meditation 101</Metric>
					<Text className="mb-5">
						Techniques , Benefits and a Beginer's how-to
					</Text>
					<Button icon={PlayIcon}>Watch now</Button>
				</div>
				<Icon size="xl" icon={UserCircleIcon} />
			</Card>
			<Card className="flex my-5">
				<div>
					<Metric className="">Cardio meditation</Metric>
					<Text className="mb-5">
						Techniques , Benefits and a Beginer's how-to
					</Text>
					<Button icon={PlayIcon}>Watch now</Button>
				</div>
				<Icon size="xl" icon={UserCircleIcon} />
			</Card>
		</main>
	);
};
