import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
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
let persistor = persistStore(store);

syncRoutesWithStore(store, routerHistory);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={<div>loading</div>} persistor={persistor}>
			<ConnectedRouter history={routerHistory}>{routes}</ConnectedRouter>
		</PersistGate>
	</Provider>,
	element
);
