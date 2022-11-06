import { useContext } from "react";
import { UserContext } from "../UserState";

export default function useUser() {
  const { uid, profile, dispatch } = useContext(UserContext);

  return {
    uid,
    profile,
    dispatch,
  };
}
