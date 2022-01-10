import Dia from "./dias";
import { Dias } from "./styles";

export default function Semana({ newhabit, setNewhabit }) {
	return (
		<Dias>
			<Dia letra={"D"} numero={0} newhabit={newhabit} setNewhabit={setNewhabit} />
			<Dia letra={"S"} numero={1} newhabit={newhabit} setNewhabit={setNewhabit} />
			<Dia letra={"T"} numero={2} newhabit={newhabit} setNewhabit={setNewhabit} />
			<Dia letra={"Q"} numero={3} newhabit={newhabit} setNewhabit={setNewhabit} />
			<Dia letra={"Q"} numero={4} newhabit={newhabit} setNewhabit={setNewhabit} />
			<Dia letra={"S"} numero={5} newhabit={newhabit} setNewhabit={setNewhabit} />
			<Dia letra={"S"} numero={6} newhabit={newhabit} setNewhabit={setNewhabit} />
		</Dias>
	);
}
