import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./pages/Login/login";
import TelaCadastro from "./pages/Cadastro/cadastro";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TelaLogin />} />
				<Route path="/cadastro" element={<TelaCadastro />} />
			</Routes>
		</BrowserRouter>
	);
}
