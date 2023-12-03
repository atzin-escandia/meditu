import { Header } from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/USerContext";

export const Home = () => {
	// const { user } = useContext(UserContext);
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!user) {
	// 		console.log("No hay");

	// 		navigate("/login");
	// 	}
	// }, []);

	return (
		<>
			<Header />
			<Outlet />
			<NavBar />
		</>
	);
};
