import { Button } from "@tremor/react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/react.svg";
import { LogoutIcon } from "@heroicons/react/outline";
import { HomeIcon, StarIcon, UserGroupIcon } from "@heroicons/react/solid";

const SideBar: React.FC = () => {
	const location = useLocation();
	const NAVIGATION_TABS = [
		{ to: "/", title: "Home", icon: HomeIcon },
		{ to: "/stacks", title: "Stacks", icon: UserGroupIcon },
		{ to: "/components", title: "Components", icon: StarIcon },
	];

	return (
		<nav className="h-screen bg-gray-900 p-5 flex flex-col justify-between">
			<div className="">
				<Link to="/">
					<img
						className="p-2 m-auto mb-5"
						src={Logo}
						alt="Logo of ZenML"
					/>
				</Link>
				{NAVIGATION_TABS.map((link, i) => (
					<Link key={i} to={link.to}>
						<Button
							aria-label={link.title}
							color={
								link.to === "/"
									? location.pathname === link.to
										? "slate"
										: "gray"
									: location.pathname.includes(link.to)
									? "slate"
									: "gray"
							}
							className="w-full mt-5 pl-5 justify-start"
							size="xl"
							icon={link.icon}
							variant={
								link.to === "/"
									? location.pathname === link.to
										? "primary"
										: "light"
									: location.pathname.includes(link.to)
									? "primary"
									: "light"
							}
						>
							<span className="pl-3">{link.title}</span>
						</Button>
					</Link>
				))}
			</div>
			<Button
				aria-label="Logout"
				color="gray"
				className="w-full mt-5 justify-start pl-5 "
				size="xl"
				icon={LogoutIcon}
				variant="light"
			>
				<span className="pl-3"> Logout</span>
			</Button>
		</nav>
	);
};

export default SideBar;
