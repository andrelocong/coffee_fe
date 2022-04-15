import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./reducers/token.reducer";

const rootReducer = combineReducers({
	token: tokenReducer,
});

export default configureStore({
	reducer: rootReducer,
});
