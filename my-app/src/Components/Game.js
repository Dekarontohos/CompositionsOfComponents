import { StrictMode, useState } from "react";
import { FieldLayout } from "./Field";
import { InformationLayout } from "./Information";
import styles from "./Game.module.css";
import { PlayerTypes } from "./PlayerTypes";

export const GameLayout = () => {
	const [currentPlayer, setCurrentPlayer] = useState(PlayerTypes[0]);
	const [status, setStatus] = useState("ход");
	const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

	const ResetGame = () => {
		setCurrentPlayer(PlayerTypes[0]);
		setStatus("ход");
		setField(["", "", "", "", "", "", "", "", ""]);
	};

	return (
		<StrictMode>
			<div>
				<InformationLayout
					status={status}
					currentPlayer={currentPlayer}
				></InformationLayout>
				<FieldLayout
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					setStatus={setStatus}
				></FieldLayout>
				<button className={styles.button} onClick={ResetGame}>
					Начать заново
				</button>
			</div>
		</StrictMode>
	);
};
