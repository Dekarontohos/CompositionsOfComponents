import { StrictMode } from "react";
import { FieldLayout } from "./Field";
import { InformationLayout } from "./Information";
import styles from "./Game.module.css";
import { useDispatch } from "react-redux";
import { RESTART_GAME } from "../Actions";

export const GameLayout = () => {
	const dispatch = useDispatch();
	const ResetGame = () => {
		dispatch(RESTART_GAME);
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
