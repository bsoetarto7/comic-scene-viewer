import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { State } from ".";
import { comicScenesReducer } from "../reducers";

export default () => {
    const reducer = combineReducers({
        comicScenes: comicScenesReducer,
    });

    const store: Store<State | undefined> = createStore(
        reducer,
        composeWithDevTools(applyMiddleware(thunk)),
    );

    return store;
};
