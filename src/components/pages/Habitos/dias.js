import { useState } from "react";
import { DiaStyle } from "./styles";

export default function Dia({ newhabit, setNewhabit, letra, numero }) {
	const [escolhido, setEscolhido] = useState(false);

	function setdias(e) {
		if (escolhido) {
			setEscolhido(false);
			setNewhabit({
				...newhabit,
				dias: newhabit.dias.filter((x) => x !== e.target.value),
			});
		} else {
			setEscolhido(true);
			setNewhabit({ ...newhabit, dias: [...newhabit.dias, e.target.value] });
		}
	}

	return (
		<DiaStyle
			habilitado={escolhido}
			value={numero}
			onClick={(e) => {
				setdias(e);
			}}
		>
			{letra}
		</DiaStyle>
	);
}
