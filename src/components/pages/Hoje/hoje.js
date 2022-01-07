import Topo from "../../topo";
import Menu from "../../menu";
import { useAuth } from "../../../contexts/UserContext";
import { useEffect } from "react";

export default function TelaHoje() {
	const { user, setUser } = useAuth();

	useEffect(() => {
		const userStorage = localStorage.getItem("user");
		if (userStorage) {
			setUser(JSON.parse(userStorage));
			console.log("user apos storege:");
			console.log(user);
		}
	}, []);

	return (
		<>
			<Topo></Topo>
			<Menu />
		</>
	);
}
