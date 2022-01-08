import styled from "styled-components";

const HabitosStyle = styled.main`
	width: 100vw;
	height: 100vh;
	background: #e5e5e5;
	display: flex;
	flex-direction: column;
	padding: 18px;
	gap: 20px;

	p {
		font-size: 18px;
		text-align: left;
		color: #666666;
	}
`;

const MeusHabitos = styled.section`
	width: 100%;
	height: 35px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 80px;

	p {
		font-size: 23px;
		color: #126ba5;
	}

	button {
		height: 35px;
		width: 40px;
		border: none;
		background: #52b6ff;
		border-radius: 4.636363506317139px;
		color: #ffffff;
		font-size: 25px;
	}
`;

const Criando = styled.section`
	height: 180px;
	border-radius: 5px;
	padding: 18px;
	background: #ffffff;

	input {
		width: 100%;
		height: 45px;
		margin-bottom: 8px;
		border: 1px solid #d4d4d4;
		border-radius: 5px;
		color: #dbdbdb;
		font-size: 20px;
	}
`;

const Dias = styled.div`
	display: flex;
	gap: 8px;
`;

const Salvar = styled.section`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	margin-top: 30px;

	button {
		height: 35px;
		width: 84px;
		border: none;
		border-radius: 4.636363506317139px;
		background: #52b6ff;
		margin-left: 24px;
	}

	p {
		font-size: 16px;
		color: #52b6ff;
		align-self: center;
	}
`;

const DiaStyle = styled.button`
	height: 30px;
	width: 30px;

	border-radius: 5px;
	border: 1px solid #d4d4d4;

	font-size: 20px;
	text-align: left;

	color: ${(props) => (props.habilitado ? "#ffffff" : "#dbdbdb")};
	background: ${(props) => (props.habilitado ? "#CFCFCF" : "#ffffff")};
`;

export { HabitosStyle, MeusHabitos, Criando, Dias, Salvar, DiaStyle };
