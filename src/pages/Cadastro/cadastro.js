import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../components/logoTrackIt.png";

export default function TelaCadastro() {
	return (
		<>
			<img src={logo} />
			<From>
				<input type="email" placeholder="email" />
				<input type="password" placeholder="senha" />
				<input type="text" placeholder="nome" />
				<input type="url" placeholder="image" />
				<button type="submit">Cadastrar</button>
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
`;

const Cadastrar = styled.p`
	font-size: 14px;
	color: #52b6ff;
	text-decoration: underline;
`;
