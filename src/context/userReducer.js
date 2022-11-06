import { SET_PROFILE, SET_UID, SET_LOADING, SET_USERNAME } from "./types";

export default function userReducer(state, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_UID:
      return {
        ...state,
        uid: action.payload,
        loading: false,
      };
    case SET_PROFILE:
      return { ...state, profile: action.payload, loading: false };
    case SET_USERNAME:
      const newProfile = { ...state.profile, username: action.payload };
      return { ...state, profile: newProfile };
    default:
      alert("REDUCER ERROR");
      return state;
  }
}
