import Topo from "../../topo";
import Menu from "../../menu";
import styled from "styled-components";
//import { Dayjs } from "dayjs";
//import { useAuth } from "../../../contexts/UserContext";

export default function TelaHoje() {
	//const { user } = useAuth();
	// const dayjs = require().weekday(7);
	// dayjs().weekday(7);

	return (
		<>
			<Topo></Topo>
			<HabitosHoje></HabitosHoje>
			<Menu />
		</>
	);
}

const HabitosHoje = styled.main`
	width: 100vw;
	height: 100vh;
	background: #e5e5e5;
	display: flex;
	flex-direction: column;
	padding: 18px;
	gap: 20px;
`;
