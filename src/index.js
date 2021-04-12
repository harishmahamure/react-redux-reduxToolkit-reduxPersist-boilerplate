import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createBrowserHistory } from "history";
import configureStoreRedux from "./store";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";

let element = document.getElementById("root");

let routerHistory = createBrowserHistory();

const store = configureStoreRedux(routerHistory);

const syncRoutesWithStore = (store, history) => {
	const { router } = store.getState();
	if (router && router.location) {
		history.replace(router.location);
	}
};

syncRoutesWithStore(store, routerHistory);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={routerHistory}>{routes}</ConnectedRouter>
	</Provider>,
	element
);
