// In store add the complete state(add root reducer)

import { createStore } from "redux";
import rootReducer from "./reducers/Index";
const Store=createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default Store;