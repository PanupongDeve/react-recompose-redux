import { Hello_LifeCycle } from "../actions/actionType";

export default function(state = "", action) {
  switch (action.type) {
    case Hello_LifeCycle:
      return action.payload;
    default:
      return state;
  }
}
