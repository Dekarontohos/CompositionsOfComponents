import { StrictMode } from "react";
import { FieldLayout } from "./Field";
import { InformationLayout } from "./Information";
import styles from "./Game.module.css";
import store from "../redux/store";

export const GameLayout = () => {
	const ResetGame = () => {
		store.dispatch({ type: "RESTART_GAME" });
	};

	return (
		<StrictMode>
			<div>
				<InformationLayout></InformationLayout>
				<FieldLayout></FieldLayout>
				<button className={styles.button} onClick={ResetGame}>
					Начать заново
				</button>
			</div>
		</StrictMode>
	);
};
