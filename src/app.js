import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TelaLogin from "./components/pages/Login/login";
import TelaCadastro from "./components/pages/Cadastro/cadastro";
import TelaHoje from "./components/pages/Hoje/hoje";
import UserContext from "./contexts/UserContext";

export default function App() {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TelaLogin />} />
					<Route path="/cadastro" element={<TelaCadastro />} />
					<Route path="/hoje" element={<TelaHoje />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}
