import React from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Home = () => {
	return (
		<>
			<Header />
			<Outlet />
			<NavBar />
		</>
	);
};
