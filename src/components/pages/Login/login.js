import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

// import { useEffect, useState } from "react";
import { useState } from "react";

import { From, Cadastrar, logoCompleto } from "../../styles";
import { useAuth } from "../../../contexts/UserContext";

export default function TelaLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const { setUser, setToken } = useAuth();

	// useEffect(() => {
	// 	const userStorage = localStorage.getItem("user");
	// 	if (userStorage) {
	// 		setUser(JSON.parse(userStorage));
	// 		navigate("/hoje");
	// 	}
	// }, []);

	function login(e) {
		e.preventDefault();
		setLoading(true);

		const promessa = axios.post(
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
			{
				email: email,
				password: password,
			}
		);

		promessa.then((resposta) => {
			// const dados = {
			// 	id: resposta.data.id,
			// 	name: resposta.data.name,
			// 	image: resposta.data.image,
			// 	email: resposta.data.email,
			// 	password: resposta.data.password,
			// };
			//localStorage.setItem("user", JSON.stringify(dados));
			setUser(resposta.data);
			setToken(resposta.data.token);
			navigate("/hoje");
		});
		promessa.catch(() => {
			alert("Erro no Login, por favor tente novamente");
			setLoading(false);
		});
	}

	return (
		<>
			<img src={logoCompleto} alt="img logo" />
			<From onSubmit={login}>
				<input
					type="email"
					value={email}
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
					disabled={loading}
				/>
				<input
					type="password"
					placeholder="senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					disabled={loading}
				/>
				<button type="submit" disabled={loading}>
					{loading ? (
						<Loader type="ThreeDots" color="#FFFFFF" height={45} width={50} />
					) : (
						"Entrar"
					)}
				</button>
			</From>
			<Link to="/cadastro">
				<Cadastrar>N??o tem uma conta? Cadastre-se!</Cadastrar>
			</Link>
		</>
	);
}
