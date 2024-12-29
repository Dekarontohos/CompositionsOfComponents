//Функциональный
// import styles from "./Field.module.css";
// import { WIN_PATTERNS } from "./GameData/WinPatterns";
// import { PlayerTypes } from "./GameData/PlayerTypes";
// import { useSelector } from "react-redux";
// import { selectField } from "../Selectors/select-field";
// import { selectCurrentPlayer } from "../Selectors/select-currentPlayer";
// import { useDispatch } from "react-redux";
// import { SET_CURRENT_PLAYER, SET_FIELD, SET_STATUS } from "../Actions";

// export const FieldLayout = () => {
// 	const dispatch = useDispatch();
// 	const field = useSelector(selectField);
// 	const currentPlayer = useSelector(selectCurrentPlayer);
// 	const newField = [...field];

// 	const getCells = () => {
// 		return newField.map((field, index) => (
// 			<div
// 				className={styles.cell}
// 				key={index}
// 				id={index}
// 				onClick={cellOnClick}
// 			>
// 				{field}
// 			</div>
// 		));
// 	};

// 	const checkWinner = () => {
// 		for (let i = 0; i < WIN_PATTERNS.length; i++) {
// 			let player1_win = true;
// 			let player2_win = true;
// 			for (let j = 0; j < WIN_PATTERNS[i].length; j++) {
// 				if (newField[WIN_PATTERNS[i][j]] !== PlayerTypes[0]) {
// 					player1_win = false;
// 				}
// 				if (newField[WIN_PATTERNS[i][j]] !== PlayerTypes[1]) {
// 					player2_win = false;
// 				}
// 				if (player1_win === false && player2_win === false) {
// 					break;
// 				}
// 			}
// 			if (player1_win || player2_win) {
// 				return true;
// 			}
// 		}
// 		return false;
// 	};

// 	const checkPresenceOfEmptyCells = () => {
// 		let result = false;
// 		newField.forEach((element) => {
// 			if (element === "") {
// 				result = true;
// 			}
// 		});
// 		return result;
// 	};

// 	const cellOnClick = (data) => {
// 		if (
// 			data.target.innerText === "" &&
// 			!checkWinner() &&
// 			checkPresenceOfEmptyCells()
// 		) {
// 			newField[data.target.id] = currentPlayer;
// 			dispatch(SET_FIELD(newField));
// 			if (checkWinner()) {
// 				dispatch(SET_STATUS("победа"));
// 			} else {
// 				if (!checkPresenceOfEmptyCells()) {
// 					dispatch(SET_STATUS("ничья"));
// 				} else {
// 					let newCurrentPlayer =
// 						currentPlayer === PlayerTypes[0]
// 							? PlayerTypes[1]
// 							: PlayerTypes[0];
// 					dispatch(SET_CURRENT_PLAYER(newCurrentPlayer));
// 				}
// 			}
// 		}
// 	};

// 	return <div className={styles.fieldLayout}>{getCells()}</div>;
// };

//Классовый
import { Component } from "react";
import { connect } from "react-redux";
// import styles from "./Field.module.css";
import { WIN_PATTERNS } from "./GameData/WinPatterns";
import { PlayerTypes } from "./GameData/PlayerTypes";
import { selectField } from "../Selectors/select-field";
import { selectCurrentPlayer } from "../Selectors/select-currentPlayer";
import { SET_CURRENT_PLAYER, SET_FIELD, SET_STATUS } from "../Actions";

class FieldLayoutContainer extends Component {
	getCells = () => {
		const { field } = this.props;
		return field.map((cell, index) => (
			<div
				// className={styles.cell}
				className="w-36 h-36 flex items-center justify-center text-4xl border-2 cursor-pointer border-gray-300 bg-white"
				key={index}
				id={index}
				onClick={this.cellOnClick}
			>
				{cell}
			</div>
		));
	};

	checkWinner = (newField) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			let player1_win = true;
			let player2_win = true;
			for (let j = 0; j < WIN_PATTERNS[i].length; j++) {
				if (newField[WIN_PATTERNS[i][j]] !== PlayerTypes[0]) {
					player1_win = false;
				}
				if (newField[WIN_PATTERNS[i][j]] !== PlayerTypes[1]) {
					player2_win = false;
				}
				if (player1_win === false && player2_win === false) {
					break;
				}
			}
			if (player1_win || player2_win) {
				return true;
			}
		}
		return false;
	};

	checkPresenceOfEmptyCells = (newField) => {
		return newField.some((element) => element === "");
	};

	cellOnClick = (data) => {
		const {
			field,
			currentPlayer,
			onSetStatus,
			onSetField,
			onSetCurrentPlayer,
		} = this.props;
		const newField = [...field];
		if (
			newField[data.target.id] === "" &&
			!this.checkWinner(newField) &&
			this.checkPresenceOfEmptyCells(newField)
		) {
			newField[data.target.id] = currentPlayer;
			onSetField(newField);

			if (this.checkWinner(newField)) {
				onSetStatus("победа");
			} else {
				if (!this.checkPresenceOfEmptyCells(newField)) {
					onSetStatus("ничья");
				} else {
					const newCurrentPlayer =
						currentPlayer === PlayerTypes[0]
							? PlayerTypes[1]
							: PlayerTypes[0];
					onSetCurrentPlayer(newCurrentPlayer);
				}
			}
		}
	};

	render() {
		return (
			<div
				className="grid grid-cols-3 grid-rows-3 w-[435px] h-[435px] mx-auto text-center border-2 border-gray-300 bg-gray-300"
				//  className={styles.fieldLayout}
			>
				{this.getCells()}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: selectField(state),
	currentPlayer: selectCurrentPlayer(state),
});

const mapDispatchToProps = (dispatch) => ({
	onSetStatus: (status) => dispatch(SET_STATUS(status)),
	onSetField: (Field) => dispatch(SET_FIELD(Field)),
	onSetCurrentPlayer: (newCurrentPlayer) =>
		dispatch(SET_CURRENT_PLAYER(newCurrentPlayer)),
});

export const FieldLayout = connect(
	mapStateToProps,
	mapDispatchToProps,
)(FieldLayoutContainer);
