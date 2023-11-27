import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { Dashboard } from "./scenes/Dashboard";
import { DesktopMobileProvider } from "./context/DesktopMobileContext";
import { Home } from "./scenes/Home";
import { Meditations } from "./scenes/Meditations";
import { Sound } from "./scenes/Sound";

const App: React.FC = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<Home />}>
				<Route path="/" element={<Dashboard />} />
				<Route path="/meditations" element={<Meditations />} />
				<Route path="sound/:id" element={<Sound />} />
			</Route>
		)
	);

	return (
		<DesktopMobileProvider>
			<main className="app">
				<RouterProvider router={router} />
			</main>
		</DesktopMobileProvider>
	);
};

export default App;
