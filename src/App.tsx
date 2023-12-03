import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { DesktopMobileProvider } from "./context/DesktopMobileContext";
import { Home } from "./pages/Home";
import { Meditations } from "./pages/Meditations";
import { Sound } from "./pages/Sound";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import axios from "axios";
import { UserContextProvider } from "./context/USerContext";
import { NewMeditation } from "./pages/NewMeditation";

const App: React.FC = () => {
	axios.defaults.baseURL = "http://localhost:4000";
	axios.defaults.withCredentials = true;

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<Home />}>
				{/* Private */}
				<Route path="/" element={<Dashboard />} />
				<Route path="/meditations" element={<Meditations />} />
				<Route path="meditations/:id?" element={<Sound />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/new-meditation" element={<NewMeditation />} />

				{/* Public */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Route>
		)
	);

	return (
		<DesktopMobileProvider>
			<UserContextProvider>
				<main className="app">
					<RouterProvider router={router} />
				</main>
			</UserContextProvider>
		</DesktopMobileProvider>
	);
};

export default App;
