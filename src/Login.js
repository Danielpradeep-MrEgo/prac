import React, { useEffect } from "react";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
	const [{ user }, dispatch] = useStateValue();
	const userFire = auth.currentUser;
	const signIN = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: userFire,
					id: result.user.uid,
					email: result.user.email,
				});
			})
			.catch((error) => alert(error.message));
	};

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			dispatch({
				type: actionTypes.SET_USER,
				user: userFire,
			});
		});
	}, [user]);

	return (
		<div>
			<button onClick={signIN}>Sign IN</button>
		</div>
	);
}

export default Login;
