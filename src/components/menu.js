import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Menu() {
	return (
		<MenuStyle>
			<Link to="/habitos">Hábitos</Link>
			<Link to="/hoje">Hoje</Link>
			<Link to="/historico">Histórico</Link>
		</MenuStyle>
	);
}

const MenuStyle = styled.nav`
	width: 100vw;
	height: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;

	position: fixed;
	bottom: 0px;
	left: 0px;

	font-size: 18px;
	color: #52b6ff;

	a {
		color: #52b6ff;
	}
`;
