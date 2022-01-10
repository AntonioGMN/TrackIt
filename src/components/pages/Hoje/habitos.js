import { HabitsStyle, HabitStyle, ButtonStyle } from "./styles";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";
import { useAuth } from "../../../contexts/UserContext";

export default function ListaHabists({ lista }) {
	// const { token } = useAuth();
	// if (!lista) return "carregando";

	// function chackhabit(id) {
	// 	const promessa = axios.post(
	// 		`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
	// 		{ headers: { Authorization: `Bearer ${token}` } }
	// 	);

	// 	promessa.then((resposta)=>{

	// 	})
	// }

	return (
		<HabitsStyle>
			{lista.map((x) => (
				<HabitStyle key={x.id}>
					<div>
						<p>{x.name}</p>
						<span>asdfad</span>
					</div>
					<ButtonStyle done={x.done}>
						<BsCheckLg style={{ height: "28px", width: "35px", color: "#ffffff" }} />
					</ButtonStyle>
				</HabitStyle>
			))}
		</HabitsStyle>
	);
}
