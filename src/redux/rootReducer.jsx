import { combineReducers } from "redux";
import categoryRudercer from "./reducer/categoryReducer";

const rootReducer = combineReducers({
  categoryRudercer: categoryRudercer,
});

export default rootReducer;
