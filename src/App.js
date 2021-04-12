import React from "react";
import style from "./Assets/sass/main.scss";
import { increment, decrement } from "./features/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
	const counter = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div className="app">
			<div className="head">
				React, Redux, Redux-toolkit, ReduxPersist boilerplate
				<span role="img" aria-label="rocket ship">
					🚀
				</span>
			</div>
			<div className="sassyDiv">A minimal boilerplate to get started with React and Redux!</div>
			<button onClick={() => dispatch(increment())}>add</button>
			<p>{counter}</p>
			<button onClick={() => dispatch(decrement())}>remove</button>
		</div>
	);
}

export default App;
