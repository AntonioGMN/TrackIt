import { useAuth } from "../../../contexts/UserContext";
import { useState } from "react";
//import axios from "axios";

import Topo from "../../topo";
import Menu from "../../menu";
import {
	HabitosStyle,
	MeusHabitos,
	Criando,
	Dias,
	Salvar,
	DiaStyle,
} from "./styles";

function Dia({ newhabit, setNewhabit, letra }) {
	const [escolhido, setEscolhido] = useState(false);

	function removeDia(newhabit, setNewhabit, alvo) {
		const novo = [];
		let cont = 0;
		for (let i = 0; i < newhabit.dias.length; i++) {
			if (newhabit.dias[i] !== alvo) novo.push(newhabit.dias[i]);
			else if (cont > 0) {
				novo.push(newhabit.dias[i]);
			} else cont++;
		}
		setNewhabit({
			...newhabit,
			dias: novo,
		});
	}

	function setdias(e) {
		if (escolhido) {
			setEscolhido(false);
			removeDia(newhabit, setNewhabit, e.target.value);
		} else {
			setEscolhido(true);
			setNewhabit({ ...newhabit, dias: [...newhabit.dias, e.target.value] });
		}
	}

	return (
		<DiaStyle
			habilitado={escolhido}
			value={letra}
			onClick={(e) => {
				setdias(e);
			}}
		>
			{letra}
		</DiaStyle>
	);
}

export default function TelaHabitos() {
	const { user } = useAuth();
	const [criando, setCriando] = useState(false);
	const [newhabit, setNewhabit] = useState({
		nome: "",
		dias: [],
	});

	if (user) {
		return (
			<HabitosStyle>
				<Topo url={user.image} />
				<MeusHabitos>
					<p>Meus hábitos</p>
					<button
						onClick={() => {
							setCriando(true);
						}}
					>
						+
					</button>
				</MeusHabitos>
				{criando && (
					<Criando>
						<input
							type="text"
							placeholder="nome do hábito"
							value={newhabit.name}
							onChange={(e) => setNewhabit({ ...newhabit, nome: e.target.value })}
						></input>
						<Dias>
							<Dia letra={"D"} newhabit={newhabit} setNewhabit={setNewhabit} />
							<Dia letra={"S"} newhabit={newhabit} setNewhabit={setNewhabit} />
							<Dia letra={"T"} newhabit={newhabit} setNewhabit={setNewhabit} />
							<Dia letra={"Q"} newhabit={newhabit} setNewhabit={setNewhabit} />
							<Dia letra={"Q"} newhabit={newhabit} setNewhabit={setNewhabit} />
							<Dia letra={"S"} newhabit={newhabit} setNewhabit={setNewhabit} />
							<Dia letra={"S"} newhabit={newhabit} setNewhabit={setNewhabit} />
						</Dias>
						<Salvar>
							<p>Cancelar</p>
							<button>Salvar</button>
						</Salvar>
					</Criando>
				)}
				<p>
					Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
					começar a trackear!
				</p>
				<Menu />
			</HabitosStyle>
		);
	} else {
		return "carregando";
	}
}
