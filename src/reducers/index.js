import { combineReducers } from "redux";
import helloReducer from "./helloReducer";
import LifecycleReducer from "./lifecycleReducer";
const rootReducer = combineReducers({
  hello: helloReducer,
  lifecycle: LifecycleReducer
});

export default rootReducer;
