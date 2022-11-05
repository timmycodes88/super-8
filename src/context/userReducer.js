import { SET_PROFILE } from "./types";

export default function userReducer(state, action) {
  switch (action.type) {
    case SET_PROFILE:
      return state;
    default:
      alert("REDUCER ERROR");
      return state;
  }
}
