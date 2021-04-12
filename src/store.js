import { configureStore, applyMiddleware, combineReducers, compose } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware, push } from "connected-react-router";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

export default function configureStoreRedux(routerHistory) {
	const router = routerMiddleware(routerHistory);

	const reducers = {
		router: connectRouter(routerHistory),
	};

	const persistConfig = {
		key: "root",
		storage,
		whitelist: ["router"],
	};

	const middlewares = [thunk, router];

	const rootReducer = combineReducers(reducers);

	const rootReducerPersisted = persistReducer(persistConfig, rootReducer);

	return configureStore({ reducer: rootReducerPersisted, middleware: [...middlewares], devTools: process.env.NODE_ENV !== "production" });
}
