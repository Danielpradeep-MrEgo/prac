import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { actionTypes, initialState } from "./reducer";
import { useStateValue } from "./StateProvider";

function Counter() {
	const [addition, setAddition] = useState(0);

	const [{ counter, user, likes }, dispatch] = useStateValue();

	useEffect(() => {
		dispatch({
			type: actionTypes.SET_COUNTER,
			counter: addition,
		});
	}, [addition]);

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch({
				actionTypes: actionTypes.SET_USER,
				user: initialState,
			});
		});
		window.location.reload(false);
	};

	const add = () => {
		setAddition(addition + 1);
	};

	const sub = () => {
		setAddition(addition - 1);
	};

	const reset = () => {
		setAddition(0);
	};

	return (
		<div>
			<h4>{likes}</h4>
			<button onClick={add}>counter + {addition}</button>
			<button onClick={sub}>counter - {addition}</button>
			<button onClick={reset}>reset {addition}</button>
			<button onClick={signOut}>sign out</button>
		</div>
	);
}

export default Counter;
