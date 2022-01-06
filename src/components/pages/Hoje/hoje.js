import Topo from "../../topo";
import UserContext from "../../../contexts/UserContext";
import { useContext } from "react";

export default function TelaHoje() {
	const { user } = useContext(UserContext);
	console.log("user:");
	console.log(user);
	console.log(user.image);

	return (
		<>
			<Topo url={user.image}></Topo>
		</>
	);
}
