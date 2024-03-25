import { combineReducers } from "redux";
import categoryReducer from "./reducer/categoryReducer";

const rootReducer = combineReducers({
  categoryReducer: categoryReducer,
});

export default rootReducer;
