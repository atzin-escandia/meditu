import { Button, Col, Grid, Subtitle } from "@tremor/react";
import { LogoutIcon, MenuIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";
import { NAVIGATION_TABS } from "../constants";
import { UserContext } from "../context/USerContext";
import axios from "axios";

interface Props {}

const MobileMenu: React.FC<Props> = () => {
	const { user } = useContext(UserContext);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const logout = async () => {
		await axios.post("/logout");
	};

	return (
		<Grid numItems={5} style={{ width: "100%" }} className="py-4">
			<Col numColSpan={2}>
				<div className="flex flex-col relative">
					<Button
						onClick={toggleMenu}
						color="gray"
						className="w-full mt-1 justify-start  "
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
						{/* <Link key={i} to={link.to}> */}
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
						{/* </Link> */}
					</div>
				</div>
			</Col>
			<Col className="mt-1" numColSpan={1}>
				<Link onClick={toggleMenu} to="/">
					<img
						width={"30px"}
						className="mx-auto"
						src={Logo}
						alt="Logo ZenMl"
					/>
				</Link>
			</Col>
			<Col className="text-end" numColSpan={2}>
				<Subtitle>{user?.name}</Subtitle>
			</Col>
		</Grid>
	);
};

export default MobileMenu;
