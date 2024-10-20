import styles from "./Field.module.css";
import PropTypes from "prop-types";

export const FieldLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
}) => {
	const newField = [...field];

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

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
			let X_win = true;
			let zero_win = true;
			for (let j = 0; j < WIN_PATTERNS[i].length; j++) {
				if (newField[WIN_PATTERNS[i][j]] !== "X") {
					X_win = false;
				}
				if (newField[WIN_PATTERNS[i][j]] !== "0") {
					zero_win = false;
				}
				if (X_win === false && zero_win === false) {
					break;
				}
			}
			if (X_win || zero_win) {
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
				setIsGameEnded(true);
			} else {
				if (!checkPresenceOfEmptyCells()) {
					setIsDraw(true);
				} else {
					let newCurrentPlayer = currentPlayer === "X" ? "0" : "X";
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
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
};
