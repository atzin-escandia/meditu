import { Icon } from "@tremor/react";
import { HandIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<div className="fixed bottom-0 ">
			<nav className="flex justify-between mb-5 w-80">
				<Link to="/">
					<Icon size="lg" icon={HandIcon} />
				</Link>
				<Link to="/meditations">
					<Icon size="lg" icon={MenuIcon} />
				</Link>
				<Link to="/profile">
					<Icon size="lg" icon={UserCircleIcon} />
				</Link>
			</nav>
		</div>
	);
};
