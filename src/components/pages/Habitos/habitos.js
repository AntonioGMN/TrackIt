import { useAuth } from "../../../contexts/UserContext";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

import Topo from "../../topo";
import Menu from "../../menu";
import Dia from "./dias";
import Habits from "./HabitosCriados";
import { HabitosStyle, MeusHabitos, Criando, Dias, Salvar } from "./styles";

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
			console.log("usando getHabitos");
			console.log("resposta.data:");
			console.log(resposta.data);
			sethabitsList(resposta.data);
			console.log("lista de hábitos");
			console.log(habitsList);
			console.log(token);
		});
		promessa.catch(() => {
			console.log("erro");
			return "Erro ao buscar lista de hábitos";
		});
	}

	useEffect(() => {
		getHabitos();
	}, []);

	function setHabito(e) {
		e.preventDefault();
		setLoading(true);

		const promessa = axios.post(
			"https:mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
			{ name: newhabit.nome, days: newhabit.dias },
			{ headers: { Authorization: `Bearer ${user.token}` } }
		);

		promessa.then((resposta) => {
			console.log(resposta.data);
			setCriando(false);
			setLoading(false);
			getHabitos();
		});
		promessa.catch((erro) => {
			console.log(erro);
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
							<Dias>
								<Dia
									letra={"D"}
									numero={"7"}
									newhabit={newhabit}
									setNewhabit={setNewhabit}
								/>
								<Dia
									letra={"S"}
									numero={"1"}
									newhabit={newhabit}
									setNewhabit={setNewhabit}
								/>
								<Dia
									letra={"T"}
									numero={"2"}
									newhabit={newhabit}
									setNewhabit={setNewhabit}
								/>
								<Dia
									letra={"Q"}
									numero={"3"}
									newhabit={newhabit}
									setNewhabit={setNewhabit}
								/>
								<Dia
									letra={"Q"}
									numero={"4"}
									newhabit={newhabit}
									setNewhabit={setNewhabit}
								/>
								<Dia
									letra={"S"}
									numero={"5"}
									newhabit={newhabit}
									setNewhabit={setNewhabit}
								/>
								<Dia
									letra={"S"}
									numero={"6"}
									newhabit={newhabit}
									setNewhabit={setNewhabit}
								/>
							</Dias>
							<Salvar onSubmit={setHabito}>
								<p>Cancelar</p>
								<button typeof="submit">
									{loading ? (
										<Loader type="ThreeDots" color="#FFFFFF" height={45} width={50} />
									) : (
										"Salvar"
									)}
								</button>
							</Salvar>
							<section>
								<article></article>
							</section>
						</Criando>
					)}
					{!habitsList ? (
						<p>
							Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
							começar a trackear!
						</p>
					) : (
						<Habits habs={habitsList}></Habits>
					)}
				</HabitosStyle>
				<Menu />
			</>
		);
	} else {
		return "carregando";
	}
}
