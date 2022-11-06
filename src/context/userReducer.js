import { SET_PROFILE, SET_UID } from "./types";

export default function userReducer(state, action) {
  switch (action.type) {
    case SET_UID:
      return {
        ...state,
        uid: action.payload,
      };
    case SET_PROFILE:
      const newProfile = state.profile; //IN PROGRESS
      return { ...state, profile: { ...state.profile, newProfile } };
    default:
      alert("REDUCER ERROR");
      return state;
  }
}
