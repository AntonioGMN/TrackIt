import axios from "axios";

function getHabitos(token) {
	const promessa = axios.get(
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
		{ headers: { Authorization: `Bearer ${token}` } }
	);

	promessa.then((resposta) => {
		// console.log("lista de hábitos");
		console.log(resposta.data);
		return resposta.data;
	});
	promessa.catch(() => {
		console.log("erro");
		return "Erro ao buscar lista de hábitos";
	});
}

// function setHabito(dados, token, e) {
// 	e.preventDefault();

// 	const promessa = axios.post(
// 		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
// 		dados,
// 		{ headers: { Authorization: `Bearer ${token}` } }
// 	);

// 	promessa.then((resposta) => console.log(resposta));
// 	promessa.catch((erro) => {
// 		console.log(erro);
// 		console.log("erro");
// 	});
// }

export { getHabitos };
