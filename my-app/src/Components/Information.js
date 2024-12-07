import styles from "./Information.module.css";
import PropTypes from "prop-types";

export const InformationLayout = ({ status, currentPlayer }) => {
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

InformationLayout.propTypes = {
	status: PropTypes.string,
	currentPlayer: PropTypes.string,
};
