import { Icon } from "@tremor/react";
import { HandIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

export const NavBar = () => {
	return (
		<nav className="flex justify-between w-80 mb-10">
			<Icon size="lg" icon={MenuIcon} />
			<Icon size="lg" icon={HandIcon} />
			<Icon size="lg" icon={UserCircleIcon} />
		</nav>
	);
};
