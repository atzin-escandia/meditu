import { Button, Col, Grid } from "@tremor/react";
import { LogoutIcon, MenuIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/react.svg";
import { UserContext } from "../context/USerContext";
import axios from "axios";

interface Props {}

const MobileMenu: React.FC<Props> = () => {
	const { user, setUser } = useContext(UserContext);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const navigate = useNavigate();
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	const logoClick = () => {
		setShowMenu(false);
		navigate("/");
	};

	const logout = async () => {
		await axios.post("/logout");
		setUser(null);
		setShowMenu(!showMenu);
		navigate("/login");
	};

	return (
		<Grid numItems={5} style={{ width: "100%" }} className="py-4">
			<Col numColSpan={2}>
				<div className="flex flex-col relative">
					<Button
						onClick={toggleMenu}
						color="gray"
						className="w-full mt-1 justify-start"
						size="lg"
						icon={MenuIcon}
						variant="light"
						aria-label={`Menu mobile button`}
					></Button>

					<div
						className={`menu-container flex flex-col ${
							showMenu ? "visible" : ""
						}`}
					>
						<Button
							onClick={logout}
							color="gray"
							className="mt-4 pl-2 justify-start"
							size="xs"
							icon={LogoutIcon}
							variant="light"
							aria-label={`Logout`}
						>
							Logout
						</Button>
					</div>
				</div>
			</Col>
			<Col className="mt-1" numColSpan={1}>
				<Link onClick={logoClick} to="/">
					<img
						width={"30px"}
						className="mx-auto"
						src={Logo}
						alt="Logo ZenMl"
					/>
				</Link>
			</Col>
			<Col className="flex justify-end" numColSpan={2}>
				<Link to="/profile" className="text-end">
					<img
						className="mb-2 inline-block h-8 w-8 rounded-full ring-2 ring-white"
						src="https://media.licdn.com/dms/image/D4D03AQHjkz7cwu7hEg/profile-displayphoto-shrink_800_800/0/1699793146844?e=1707350400&v=beta&t=XGE0pWRrfBu5MZX0DM3dt0o2hGdcPq9HvW8KT62YfW4"
						alt=""
					/>
				</Link>
			</Col>
		</Grid>
	);
};

export default MobileMenu;
