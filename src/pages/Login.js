import styled from "styled-components";

import logo from "../components/logoTrackIt.png";

export default function TelaLogin() {
	return (
		<>
			<img src={logo} />
			<From>
				<input type="email" placeholder="email" />
				<input type="password" placeholder="senha" />
				<button type="submit">Entrar</button>
			</From>
			<p>Não tem uma conta? Cadastre-se!</p>
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
