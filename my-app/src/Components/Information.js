import styles from "./Information.module.css";
import PropTypes from "prop-types";

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	const getTextInfo = () => {
		if (isDraw) {
			return "Ничья";
		} else {
			if (!isDraw && isGameEnded) {
				return `Победа: ${currentPlayer}`;
			} else {
				return `Ходит: ${currentPlayer}`;
			}
		}
	};

	return <div className={styles.informationLayout}>{getTextInfo()}</div>;
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
