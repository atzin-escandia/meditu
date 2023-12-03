import { Icon, Subtitle } from "@tremor/react";
import { HandIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { UserContext } from "../context/USerContext";
import MobileMenu from "./MobileMenu";

export const Header = () => {
	return (
		<nav className="flex justify-between w-80 mb-10">
			{/* <Icon size="lg" icon={MenuIcon} /> */}
			<MobileMenu />
			{/* <Icon size="lg" icon={HandIcon} /> */}
			{/* <Icon size="lg" icon={UserCircleIcon} /> */}
		</nav>
	);
};
