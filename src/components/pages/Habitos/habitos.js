import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";
import { useContext } from "react";

import Topo from "../../topo";
import Menu from "../../menu";

export default function TelaHabitos() {
	const { user } = useContext(UserContext);

	//function habitosList() {}

	return (
		<HabitoStyle>
			<Topo url={user.image} />
			<MeusHabitos>
				<p>Meus hábitos</p>
				<button>+</button>
			</MeusHabitos>
			<p>
				Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar
				a trackear!
			</p>
			<Menu />
		</HabitoStyle>
	);
}

const HabitoStyle = styled.main`
	width: 100vw;
	height: 100vh;
	background: #e5e5e5;
	padding: 18px;
	gap: 20%;

	p {
		font-size: 18px;
		text-align: left;
		color: #666666;
		margin-top: 30px;
	}
`;

const MeusHabitos = styled.section`
	width: 100%;
	height: 35px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 80px;

	p {
		font-size: 23px;
		color: #126ba5;
	}

	button {
		height: 35px;
		width: 40px;
		border: none;
		background: #52b6ff;
		border-radius: 4.636363506317139px;
		color: #ffffff;
		font-size: 25px;
	}
`;
