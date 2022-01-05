import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Loader from "react-loader-spinner";

import logo from "../../components/logoTrackIt.png";

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
			<img src={logo} />
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

const From = styled.form`
	display: flex;
	flex-direction: column;
	gap: 6px;
	margin: 32px 0 25px 0;

	input,
	button {
		width: 303px;
		height: 45px;
		border: 1px solid #d4d4d4;
		border-radius: 5px;
	}

	button {
		color: #ffffff;
		font-size: 21px;
		background: #52b6ff;
	}

	Loader {
		color: #ffffff;
	}
`;

const Cadastrar = styled.p`
	font-size: 14px;
	color: #52b6ff;
	text-decoration: underline;
`;
