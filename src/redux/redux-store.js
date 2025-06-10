import { combineReducers, createStore } from "redux";
import accountPageReducer from "./accountPage-reducer";

let reducers = combineReducers({
	catalogPage: accountPageReducer,
})

let store = createStore(reducers)

export default store