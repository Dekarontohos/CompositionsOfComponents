import { PlayerTypes } from "./Components/PlayerTypes";
const cellsCount = 9;
const arrFields = new Array(cellsCount).fill("");

export const initialState = {
	currentPlayer: PlayerTypes[0],
	status: "ход",
	field: arrFields,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case "SET_CURRENT_PLAYER":
			return { ...state, currentPlayer: payload };
		case "SET_FIELD":
			return { ...state, field: payload };

		case "SET_STATUS":
			return { ...state, status: payload };
		case "RESTART_GAME":
			return initialState;
		case "": {
			return payload;
		}
		default:
			return state;
	}
};
