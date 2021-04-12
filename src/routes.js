import React from "react";
import { Switch, Route } from "react-router";
import App from "./App";
export default (
	<Switch>
		<Route exact path="/" component={App} />
	</Switch>
);
