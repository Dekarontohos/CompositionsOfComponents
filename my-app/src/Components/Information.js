import styles from "./Information.module.css";
import store from "../redux/store";
import { useState, useEffect } from "react";

export const InformationLayout = () => {
	const [data, setData] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setData(store.getState());
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const { status, currentPlayer } = store.getState();
	const getTextInfo = () => {
		if (status === "победа") {
			return `Победа: ${currentPlayer}`;
		} else if (status === "ничья") {
			return "Ничья";
		} else {
			return `Ходит: ${currentPlayer}`;
		}
	};

	return <div className={styles.informationLayout}>{getTextInfo()}</div>;
};
