import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useAuth } from "../contexts/UserContext";
import { useEffect } from "react/cjs/react.development";

export default function Menu() {
	const { habitsHoje } = useAuth();

	function porcentagem() {
		let cont = 0;

		if (!habitsHoje) return 0;

		for (let i = 0; i < habitsHoje.length; i++) {
			if (habitsHoje[i].done) cont++;
		}

		return (cont / habitsHoje.length) * 100;
	}

	return (
		<MenuStyle>
			<Link to="/habitos">Hábitos</Link>
			<Link to="/hoje">
				<div>
					<CircularProgressbar
						value={porcentagem()}
						text="Hoje"
						background
						backgroundPadding={6}
						styles={buildStyles({
							backgroundColor: "#3e98c7",
							textColor: "#fff",
							pathColor: "#fff",
							trailColor: "transparent",
						})}
					/>
				</div>
			</Link>
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
	background: #ffffff;

	a {
		color: #52b6ff;
	}

	div {
		height: 91px;
		width: 91px;
		margin-bottom: 30px;
		border-radius: 50%;
	}
`;
