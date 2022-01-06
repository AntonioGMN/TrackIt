import styled from "styled-components";

import logoMenor from "./imgs/Trackit.png";

export default function Topo({ url }) {
	return (
		<TopoStyle>
			<img src={logoMenor} alt="logo" />
			<ImgUser>
				<img src={url} alt="perfil"></img>
			</ImgUser>
		</TopoStyle>
	);
}

const TopoStyle = styled.header`
	height: 70px;
	width: 100vw;
	background: #126ba5;

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
