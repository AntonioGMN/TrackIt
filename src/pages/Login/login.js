import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../components/logoTrackIt.png";

export default function TelaLogin() {
	return (
		<>
			<img src={logo} />
			<From>
				<input type="email" placeholder="email" />
				<input type="password" placeholder="senha" />
				<button type="submit">Entrar</button>
			</From>
			<Link to="/cadastro">
				<Cadastrar>Não tem uma conta? Cadastre-se!</Cadastrar>
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
		background: #52b6ff;
	}
`;

const Cadastrar = styled.p`
	font-size: 14px;
	color: #52b6ff;
	text-decoration: underline;
`;
