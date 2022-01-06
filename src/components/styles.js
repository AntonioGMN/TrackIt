import styled from "styled-components";

import logoCompleto from "./imgs/logoTrackIt.png";

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

export { From, Cadastrar, logoCompleto };
