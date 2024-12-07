import styles from "./Field.module.css";
import PropTypes from "prop-types";
import { WIN_PATTERNS } from "./WinPatterns";
import { PlayerTypes } from "./PlayerTypes";

export const FieldLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setStatus,
}) => {
	const newField = [...field];

	const getCells = () => {
		return newField.map((field, index) => (
			<div
				className={styles.cell}
				key={index}
				id={index}
				onClick={cellOnClick}
			>
				{field}
			</div>
		));
	};

	const checkWinner = () => {
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

	const checkPresenceOfEmptyCells = () => {
		let result = false;
		newField.forEach((element) => {
			if (element === "") {
				result = true;
			}
		});
		return result;
	};

	const cellOnClick = (data) => {
		if (
			data.target.innerText === "" &&
			!checkWinner() &&
			checkPresenceOfEmptyCells()
		) {
			newField[data.target.id] = currentPlayer;
			setField(() => {
				return newField;
			});
			if (checkWinner()) {
				setStatus("победа");
			} else {
				if (!checkPresenceOfEmptyCells()) {
					setStatus("ничья");
				} else {
					let newCurrentPlayer =
						currentPlayer === PlayerTypes[0]
							? PlayerTypes[1]
							: PlayerTypes[0];
					console.log(currentPlayer);
					console.log(newCurrentPlayer);
					setCurrentPlayer(newCurrentPlayer);
				}
			}
		}
	};

	return <div className={styles.fieldLayout}>{getCells()}</div>;
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setStatus: PropTypes.func,
};
