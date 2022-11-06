import { useState } from "react";
import useUser from "../../../context/hooks/useUser";
import { SET_USERNAME } from "../../../context/types";
import { postUserName } from "../../../utils/FirebaseConfig";

export default function useProfile() {
  const [usernameValue, setUsernameValue] = useState("");
  const { dispatch, profile, uid } = useUser();

  function setUsername() {
    postUserName(uid, usernameValue).then(res => {
      dispatch({ type: SET_USERNAME, payload: usernameValue });
      setUsernameValue("");
    });
  }

  return {
    usernameValue,
    setUsernameValue,
    profile,
    setUsername,
  };
}
