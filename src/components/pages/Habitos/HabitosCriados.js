import { HabitsCriados, HabitStyle, DiaStyle, Dias } from "./styles";
import { Trash } from "react-ionicons";

export default function Habits({ habs }) {
	function DiasEscolhidos({ array }) {
		return (
			<Dias>
				<DiaStyle habilitado={array.includes(7)}>D</DiaStyle>
				<DiaStyle habilitado={array.includes(1)}>S</DiaStyle>
				<DiaStyle habilitado={array.includes(2)}>T</DiaStyle>
				<DiaStyle habilitado={array.includes(3)}>Q</DiaStyle>
				<DiaStyle habilitado={array.includes(4)}>Q</DiaStyle>
				<DiaStyle habilitado={array.includes(5)}>S</DiaStyle>
				<DiaStyle habilitado={array.includes(6)}>S</DiaStyle>
			</Dias>
		);
	}

	return (
		<HabitsCriados>
			{habs.map((x) => (
				<HabitStyle key={x.id}>
					<p>{x.name}</p>
					<DiasEscolhidos array={x.days} />
					<Trash
						color={"#666666"}
						style={{
							position: "absolute",
							top: "14px",
							right: "12px",
						}}
					/>
				</HabitStyle>
			))}
		</HabitsCriados>
	);
}
