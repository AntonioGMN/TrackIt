import { HabitsStyle, HabitStyle, ButtonStyle } from "./styles";
import { BsCheckLg } from "react-icons/bs";

export default function ListaHabists({ lista, marcar, desmarcar }) {
	if (!lista) return "carregando";

	function hanbMarcação(ob) {
		if (ob.done) desmarcar(ob.id);
		else marcar(ob.id);
	}

	return (
		<HabitsStyle>
			{lista.map((x) => (
				<HabitStyle key={x.id}>
					<div>
						<p>{x.name}</p>
						<span>asdfad</span>
					</div>
					<ButtonStyle
						done={x.done}
						onClick={(e) => {
							e.preventDefault();
							hanbMarcação(x);
						}}
					>
						<BsCheckLg style={{ height: "28px", width: "35px", color: "#ffffff" }} />
					</ButtonStyle>
				</HabitStyle>
			))}
		</HabitsStyle>
	);
}
