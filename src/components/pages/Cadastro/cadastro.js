import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import { From, Cadastrar, logoCompleto } from "../../styles";

export default function TelaCadastro() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	function cadastrar(e) {
		e.preventDefault();
		setLoading(true);

		const promessa = axios.post(
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
			{ email: email, name: name, image: image, password: password }
		);

		promessa.then((resposta) => {
			navigate("/");
			console.log(resposta);
		});
		promessa.catch(() => {
			setLoading(false);
			alert("Erro no Cadastro. Tente Novamente");
		});
	}

	return (
		<>
			<img src={logoCompleto} alt="img logo" />
			<From onSubmit={cadastrar}>
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
				<input
					type="text"
					placeholder="nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
					disabled={loading}
				/>
				<input
					type="url"
					placeholder="image"
					value={image}
					onChange={(e) => setImage(e.target.value)}
					disabled={loading}
				/>
				<button type="submit" disabled={loading}>
					{loading ? (
						<Loader type="ThreeDots" color="#FFFFFF" height={45} width={50} />
					) : (
						"Cadastrar"
					)}
				</button>
			</From>
			<Link to="/">
				<Cadastrar>Já tem uma conta? Faça login!</Cadastrar>
			</Link>
		</>
	);
}
