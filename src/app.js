import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./pages/Login/login";
import TelaCadastro from "./pages/Cadastro/cadastro";
import TelaHoje from "./pages/Hoje/hoje";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TelaLogin />} />
				<Route path="/cadastro" element={<TelaCadastro />} />
				<Route path="/hoje" element={<TelaHoje />} />
			</Routes>
		</BrowserRouter>
	);
}
