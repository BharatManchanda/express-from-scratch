import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoute } from "./Router";
import GeneralLayout from "./Components/Layout/GeneralLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{publicRoute.map((route, key) => (
					<Route
						key={key}
						path={route.path}
						element={<GeneralLayout>{route.component}</GeneralLayout>}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
