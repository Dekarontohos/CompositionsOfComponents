//Функциональный
// import styles from "./Information.module.css";
// import { useSelector } from "react-redux";
// import { selectCurrentPlayer } from "../Selectors/select-currentPlayer";
// import { selectStatus } from "../Selectors/select-status";

// export const InformationLayout = () => {
// 	const currentPlayer = useSelector(selectCurrentPlayer);
// 	const status = useSelector(selectStatus);

// 	const getTextInfo = () => {
// 		if (status === "победа") {
// 			return `Победа: ${currentPlayer}`;
// 		} else if (status === "ничья") {
// 			return "Ничья";
// 		} else {
// 			return `Ходит: ${currentPlayer}`;
// 		}
// 	};

// 	return <div className={styles.informationLayout}>{getTextInfo()}</div>;
// };

//Классовый
import { Component } from "react";
// import styles from "./Information.module.css";
import { connect } from "react-redux";
import { selectCurrentPlayer } from "../Selectors/select-currentPlayer";
import { selectStatus } from "../Selectors/select-status";

class InformationLayoutContainer extends Component {
	constructor(props) {
		super(props);
		this.getTextInfo = this.getTextInfo.bind(this);
	}

	getTextInfo() {
		const { currentPlayer, status } = this.props;
		if (status === "победа") {
			return `Победа: ${currentPlayer}`;
		} else if (status === "ничья") {
			return "Ничья";
		} else {
			return `Ходит: ${currentPlayer}`;
		}
	}

	render() {
		return (
			<div
				// className={styles.informationLayout}
				className="border-3 rounded-[15px] min-h-[21px] my-2 mx-auto text-center max-w-[435px] border-gray-300"
			>
				{this.getTextInfo()}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	status: selectStatus(state),
});

export const InformationLayout = connect(mapStateToProps)(
	InformationLayoutContainer,
);
