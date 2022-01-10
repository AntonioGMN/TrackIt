import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/UserContext";
import axios from "axios";

import { HabitosHoje, HojeStyle } from "./styles";
import Topo from "../../topo";
import Menu from "../../menu";
import ListaHabists from "./habitos";

export default function TelaHoje() {
	const { token, habitsHoje, setHabitsHoje } = useAuth();
	dayjs.locale("pt-br");

	function gethabits() {
		const promessa = axios.get(
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
			{ headers: { Authorization: `Bearer ${token}` } }
		);

		promessa.then((resposta) => {
			console.log("resposta de dia");
			setHabitsHoje(resposta.data);
		});

		promessa.catch(() => {
			console.log("erro");
			alert("Erro ao buscar hábitos em hoje");
		});
	}

	useEffect(gethabits, []);

	function marcar(id) {
		const promessa = axios.post(
			`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
			null,
			{ headers: { Authorization: `Bearer ${token}` } }
		);

		promessa.then(() => gethabits());

		promessa.catch((erro) => {
			console.log(erro.response);
		});
	}

	function desmarcar(id) {
		const promessa = axios.post(
			`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
			null,
			{ headers: { Authorization: `Bearer ${token}` } }
		);

		promessa.then(() => gethabits());

		promessa.catch((erro) => {
			console.log(erro.response);
		});
	}

	useEffect(() => {
		console.log("habitsHoje:");
		console.log(habitsHoje);
	}, [habitsHoje]);

	return (
		<>
			<Topo />
			<HabitosHoje>
				<HojeStyle>
					{dayjs().locale("pt-br").format("dddd, DD/MM")}
					<p>Nenhum hábito concluído ainda</p>
				</HojeStyle>
				<ListaHabists lista={habitsHoje} marcar={marcar} desmarcar={desmarcar} />
			</HabitosHoje>
			<Menu />
		</>
	);
}
