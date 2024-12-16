import styles from "./Information.module.css";
import { useSelector } from "react-redux";
import { selectCurrentPlayer } from "../Selectors/select-currentPlayer";
import { selectStatus } from "../Selectors/select-status";

export const InformationLayout = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const status = useSelector(selectStatus);

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
