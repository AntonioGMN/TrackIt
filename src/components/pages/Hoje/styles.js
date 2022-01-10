import styled from "styled-components";

const HabitosHoje = styled.main`
	width: 100vw;
	height: 100vh;
	background: #e5e5e5;
	display: flex;
	flex-direction: column;
	padding: 18px;
	gap: 20px;
	margin-top: 65px;
`;

const HojeStyle = styled.header`
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 23px;
	color: #126ba5;
	margin-top: 28px;

	p {
		font-size: 18px;
		color: #bababa;
	}
`;

const HabitsStyle = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const HabitStyle = styled.article`
	height: 94px;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	padding: 13px;
	background: #ffffff;
	color: #666666;

	p {
		font-size: 19.976px;
		margin-bottom: 7px;
	}

	span {
		font-size: 12.976px;
	}

	button {
		height: 69px;
		width: 69px;
		border: none;
		border-radius: 5px;
	}
`;

const ButtonStyle = styled.button`
	height: 69px;
	width: 69px;
	border: none;
	border-radius: 5px;
	background: ${(props) => (props.done ? "#8FC549" : "#EBEBEB")};
`;

export { HabitosHoje, HojeStyle, HabitsStyle, HabitStyle, ButtonStyle };
