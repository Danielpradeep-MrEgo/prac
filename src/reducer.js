export const initialState = {
	user: null,
	counter: 0,
	likes: 0,
};

export const actionTypes = {
	SET_USER: "SET_USER",
	SET_COUNTER: "SET_COUNTER",
	SET_LIKES: "SET_LIKES",
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.SET_USER:
			if (actionTypes.SET_USER) {
				return {
					...state,
					user: action.user,
				};
			}
		case actionTypes.SET_COUNTER:
			if (actionTypes.SET_COUNTER) {
				return {
					...state,
					counter: action.counter,
				};
			}
		case actionTypes.SET_LIKES:
			if (actionTypes.SET_LIKES) {
				return {
					...state,
					likes: action.likes,
				};
			}
		default:
			return state;
	}
};

export default reducer;
