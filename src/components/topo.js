import styled from "styled-components";
import { useAuth } from "../contexts/UserContext";

import logoMenor from "./imgs/Trackit.png";

export default function Topo() {
	const { user } = useAuth();

	if (user) {
		return (
			<TopoStyle>
				<img src={logoMenor} alt="logo" />
				<ImgUser>
					<img src={user.image} alt="perfil"></img>
				</ImgUser>
			</TopoStyle>
		);
	} else {
		return "carregando";
	}
}

const TopoStyle = styled.header`
	height: 70px;
	width: 100vw;
	background: #126ba5;
	box-shadow: 0px 4px 4px 0px #00000026;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	position: fixed;
	top: 0;
	left: 0;
`;

const ImgUser = styled.div`
	height: 51px;
	width: 51px;
	border-radius: 98.5px;
	img {
		width: 100%;
		height: 100%;
		border-radius: 98.5px;
	}
`;
