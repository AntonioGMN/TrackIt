import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./pages/Login";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TelaLogin />} />
			</Routes>
		</BrowserRouter>
	);
}
