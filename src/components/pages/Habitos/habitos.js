import { useAuth } from "../../../contexts/UserContext";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

import Topo from "../../topo";
import Menu from "../../menu";
import Habits from "./HabitosCriados";
import Semana from "./semana";
import { HabitosStyle, MeusHabitos, Criando, Salvar } from "./styles";

export default function TelaHabitos() {
	const { user, token } = useAuth();
	const [criando, setCriando] = useState(false);
	const [loading, setLoading] = useState(false);
	const [habitsList, sethabitsList] = useState(null);
	const [newhabit, setNewhabit] = useState({
		nome: "",
		dias: [],
	});

	function getHabitos() {
		const promessa = axios.get(
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
			{ headers: { Authorization: `Bearer ${token}` } }
		);

		promessa.then((resposta) => {
			sethabitsList(resposta.data);
		});
		promessa.catch(() => {
			alert("Erro ao buscar lista de hábitos");
		});
	}

	useEffect(() => {
		getHabitos();
	}, []);

	useEffect(() => {
		console.log("mudou");
		console.log(newhabit);
	}, [newhabit]);

	function setHabito(e) {
		e.preventDefault();
		setLoading(true);

		const promessa = axios.post(
			"https:mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
			{ name: newhabit.nome, days: newhabit.dias },
			{ headers: { Authorization: `Bearer ${token}` } }
		);

		promessa.then((resposta) => {
			console.log("sethabito funcionou");
			//console.log(resposta.data);
			setCriando(false);
			setLoading(false);
			getHabitos();
		});
		promessa.catch(() => {
			alert("Erro ao cadastrar novo hábito");
			setLoading(false);
		});
	}

	if (user) {
		return (
			<>
				<Topo url={user.image} />
				<HabitosStyle>
					<MeusHabitos>
						<p>Meus hábitos</p>
						<button onClick={() => setCriando(true)}>+</button>
					</MeusHabitos>
					{criando && (
						<Criando>
							<input
								type="text"
								placeholder="nome do hábito"
								disabled={loading}
								value={newhabit.name}
								onChange={(e) => setNewhabit({ ...newhabit, nome: e.target.value })}
							/>
							<Semana newhabit={newhabit} setNewhabit={setNewhabit} />
							<Salvar onSubmit={setHabito}>
								<p
									onClick={(e) => {
										e.preventDefault();
										setCriando(false);
									}}
								>
									Cancelar
								</p>
								<button typeof="submit">
									{loading ? (
										<Loader type="ThreeDots" color="#FFFFFF" height={45} width={50} />
									) : (
										"Salvar"
									)}
								</button>
							</Salvar>
						</Criando>
					)}
					{!habitsList ? (
						<p>
							Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
							começar a trackear!
						</p>
					) : (
						<Habits habs={habitsList} token={token} getHabitos={getHabitos}></Habits>
					)}
				</HabitosStyle>
				<Menu />
			</>
		);
	} else {
		return "carregando";
	}
}
