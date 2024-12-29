//Функциональный
// import { FieldLayout } from "./Field";
// import { InformationLayout } from "./Information";
// import styles from "./Game.module.css";
// import { useDispatch } from "react-redux";
// import { RESTART_GAME } from "../Actions";

// export const GameLayout = () => {
// 	const dispatch = useDispatch();
// 	const ResetGame = () => {
// 		dispatch(RESTART_GAME);
// 	};

// 	return (
// 		<div>
// 			<InformationLayout></InformationLayout>
// 			<FieldLayout></FieldLayout>
// 			<button className={styles.button} onClick={ResetGame}>
// 				Начать заново
// 			</button>
// 		</div>
// 	);
// };

//Классовый
import { Component } from "react";
import { FieldLayout } from "./Field";
import { InformationLayout } from "./Information";
//import styles from "./Game.module.css";
import { connect } from "react-redux";
import { RESTART_GAME } from "../Actions";

class GameLayoutContainer extends Component {
	resetGame = () => {
		this.props.restartGame();
	};

	render() {
		return (
			<div>
				<InformationLayout />
				<FieldLayout />
				<button
					// className={styles.button}
					className="px-3 py-2 min-w-[100px] bg-gray-300 text-lg border-2 border-gray-500 transition-colors duration-150 ease-in-out my-2 mx-auto flex hover:bg-gray-200 rounded-[15px]"
					onClick={this.resetGame}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		restartGame: () => dispatch(RESTART_GAME),
	};
};

export const GameLayout = connect(
	null,
	mapDispatchToProps,
)(GameLayoutContainer);
