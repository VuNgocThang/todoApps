import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";


const composedEnhancers = composeWithDevTools()
// eslint-disable-next-line no-undef
const store = createStore(rootReducer,composedEnhancers);

export default store;
