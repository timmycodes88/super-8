import { SET_PROFILE } from "./types";

export default function userReducer(state, action) {
  switch (action.type) {
    case SET_PROFILE:
      const newProfile = state.profile; //IN PROGRESS
      return { ...state, profile: { ...state.profile, newProfile } };
    default:
      alert("REDUCER ERROR");
      return state;
  }
}
