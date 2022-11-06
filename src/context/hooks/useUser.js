import { useContext } from "react";
import { UserContext } from "../UserState";

export default function useUser() {
  const { uid } = useContext(UserContext);

  return {
    uid,
  };
}
