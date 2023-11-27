import {
	FastForwardIcon,
	LockClosedIcon,
	LockOpenIcon,
	MapIcon,
	PlayIcon,
	RewindIcon,
} from "@heroicons/react/solid";
import { Icon, Metric, Subtitle, Tracker } from "@tremor/react";
import React from "react";

export const Sound = () => {
	const data: [] = [
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "rose", tooltip: "Downtime" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
		{ color: "emerald", tooltip: "Operational" },
	];
	return (
		<section>
			<Icon size="xl" icon={MapIcon} />

			<Metric className="mt-2">Painting Forest</Metric>
			<Subtitle>By: Painting with passion</Subtitle>

			<Tracker data={data} className="mt-5" />
			<div className="flex justify-between">
				<Icon size="sm" icon={LockOpenIcon} />
				<Icon size="sm" icon={RewindIcon} />
				<Icon size="xl" icon={PlayIcon} />
				<Icon size="sm" icon={FastForwardIcon} />
				<Icon size="sm" icon={LockClosedIcon} />
			</div>
		</section>
	);
};
