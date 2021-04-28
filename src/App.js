import { useEffect } from "react";
import "./App.css";
import Counter from "./Counter";
import { auth } from "./firebase";
import Likes from "./Likes";
import Login from "./Login";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function App() {
	const [{ counter, user }, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			dispatch({
				type: actionTypes.SET_USER,
				user: auth.user,
			});
		});
	}, []);

	return (
		<div className="app">
			{/* <h1>counter : {counter}</h1> */}
			{!user ? (
				<Login />
			) : (
				<div className="app">
					<Counter />
					<Likes />
				</div>
			)}
		</div>
	);
}

export default App;
