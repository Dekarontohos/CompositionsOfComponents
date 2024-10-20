import styles from "./Information.module.css";

export const InformationLayout = (props) => {
	return <div className={styles.informationLayout}>{getTextInfo(props)}</div>;
};

const getTextInfo = (data) => {
	if (data.isDraw) {
		return "Ничья";
	} else {
		if (!data.isDraw && data.isGameEnded) {
			return `Победа: ${data.currentPlayer}`;
		} else {
			return `Ходит: ${data.currentPlayer}`;
		}
	}
};
