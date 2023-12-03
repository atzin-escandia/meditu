import { Icon } from "@tremor/react";
import { HandIcon, MusicNoteIcon, UserIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { FilmIcon } from "@heroicons/react/outline";

export const NavBar = () => {
	return (
		<div className="fixed bottom-0 ">
			<nav className="flex justify-between mb-5 w-80">
				<Link className="bg" to="/">
					<Icon size="lg" icon={HandIcon} />
				</Link>
				<Link to="/meditations">
					<Icon size="lg" icon={MusicNoteIcon} />
				</Link>
				<Link to="/new-meditation">
					<Icon size="lg" icon={FilmIcon} />
				</Link>
			</nav>
		</div>
	);
};
