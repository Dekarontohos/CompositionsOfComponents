import { StrictMode, useState } from "react";
import { FieldLayout } from "./Field";
import { InformationLayout } from "./Information";
import styles from "./Game.module.css";

export const GameLayout = () => {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

	const ResetGame = () => {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(["", "", "", "", "", "", "", "", ""]);
	};

	return (
		<StrictMode>
			<div>
				<InformationLayout
					isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
				></InformationLayout>
				<FieldLayout
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					setIsGameEnded={setIsGameEnded}
					setIsDraw={setIsDraw}
				></FieldLayout>
				<button className={styles.button} onClick={ResetGame}>
					Начать заново
				</button>
			</div>
		</StrictMode>
	);
};
