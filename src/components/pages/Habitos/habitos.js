import { useAuth } from "../../../contexts/UserContext";
import { useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

import Topo from "../../topo";
import Menu from "../../menu";
import Dia from "./dias";
import { HabitosStyle, MeusHabitos, Criando, Dias, Salvar } from "./styles";
//import { setHabito } from "../../services/services";

export default function TelaHabitos() {
	const { user } = useAuth();
	const [criando, setCriando] = useState(false);
	const [loading, setLoading] = useState(false);
	const [newhabit, setNewhabit] = useState({
		nome: "",
		dias: [],
	});

	function setHabito(e) {
		e.preventDefault();
		setLoading(true);

		const promessa = axios.post(
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
			{ name: newhabit.nome, days: newhabit.dias },
			{ headers: { Authorization: `Bearer ${user.token}` } }
		);

		promessa.then((resposta) => {
			console.log(resposta.data);
			setCriando(false);
			setLoading(false);
		});
		promessa.catch((erro) => {
			console.log(erro);
		});
	}

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
							disabled={loading}
							value={newhabit.name}
							onChange={(e) => setNewhabit({ ...newhabit, nome: e.target.value })}
						></input>
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
