import styled from "styled-components";
import { useAuth } from "../../../contexts/UserContext";
//import axios from "axios";

import Topo from "../../topo";
import Menu from "../../menu";
import { getHabitos } from "../../services/services";
import { useState } from "react";

export default function TelaHabitos() {
	const { user } = useAuth();
	const [criando, setCriando] = useState(false);
	console.log(user);
	//const habitoslist = getHabitos(user.token);

	return (
		<HabitoStyle>
			<Topo url={user.image} />
			<MeusHabitos>
				<p>Meus hábitos</p>
				<button onClick={() => setCriando(true)}>+</button>
			</MeusHabitos>
			{criando && (
				<Criando>
					<input type="text" placeholder="nome do hábito"></input>
					<Dias>
						<button>D</button>
						<button>S</button>
						<button>T</button>
						<button>Q</button>
						<button>Q</button>
						<button>S</button>
						<button>S</button>
					</Dias>
					<Salvar>
						<p>Cancelar</p>
						<button>Salvar</button>
					</Salvar>
				</Criando>
			)}
			{/* {{habitosList != 0  && (
				<p>
					Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
					começar a trackear!
				</p>
				)} } */}
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
	display: flex;
	flex-direction: column;
	padding: 18px;
	gap: 20px;

	p {
		font-size: 18px;
		text-align: left;
		color: #666666;
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

const Criando = styled.section`
	height: 180px;
	border-radius: 5px;
	padding: 18px;
	background: #ffffff;

	input {
		width: 100%;
		height: 45px;
		margin-bottom: 8px;
		border: 1px solid #d4d4d4;
		border-radius: 5px;
		color: #dbdbdb;
		font-size: 20px;
	}
`;

const Dias = styled.div`
	display: flex;
	gap: 8px;

	button {
		height: 30px;
		width: 30px;

		border-radius: 5px;
		border: 1px solid #d4d4d4;
		background: #ffffff;

		font-size: 20px;
		text-align: left;
		color: #dbdbdb;
	}
`;

const Salvar = styled.section`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	margin-top: 30px;

	button {
		height: 35px;
		width: 84px;
		border: none;
		border-radius: 4.636363506317139px;
		background: #52b6ff;
		margin-left: 24px;
	}

	p {
		font-size: 16px;
		color: #52b6ff;
		align-self: center;
	}
`;
