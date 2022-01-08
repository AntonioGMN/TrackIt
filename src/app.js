import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import TelaLogin from "./components/pages/Login/login";
import TelaCadastro from "./components/pages/Cadastro/cadastro";
import TelaHoje from "./components/pages/Hoje/hoje";
import TelaHabitos from "./components/pages/Habitos/habitos";
import TelaHistorico from "./components/pages/Historico/historico";
import UserContext from "./contexts/UserContext";
import Topo from "./components/topo";
import Menu from "./components/menu";

export default function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const userStorage = localStorage.getItem("user");
		if (userStorage) {
			setUser(JSON.parse(userStorage));
		}
	}, []);

	<UserContext.Provider value={{ user, setUser }}>
		<Topo></Topo>
		<Menu></Menu>
	</UserContext.Provider>;

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TelaLogin />} />
					<Route path="/cadastro" element={<TelaCadastro />} />
					<Route path="/hoje" element={<TelaHoje />} />
					<Route path="/habitos" element={<TelaHabitos />} />
					<Route path="/historico" element={<TelaHistorico />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}
